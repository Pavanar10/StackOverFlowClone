import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  questionStr:string='';

/*    question={
    username:'',
    question:'',
    solution:[{
      username:'',
      upVotes:0,
      downVotes:0,
      answer:''
    },]
  } */

  constructor(private questionService:QuestionService,public userService:UserService){
  
  }

  allQuestions:Array<any>=[];
  ngOnInit(){
    

    this.questionService.getQuestions().then(
      (res:any)=>{
        console.log(res);
        this.allQuestions=res}
    ).catch((error)=>{
      console.log(error);
    });
  }
  post(){
    this.questionService.postQuestion({
      username:this.userService.user.username,
      question:this.questionStr,
      solution:[]
    })
    .then((res)=>{
      console.log(res)
      this.questionStr='';
      this.allQuestions.push(res)
    })
    .catch((err)=>{
      console.log(err)
    });
  }

  
  

}
