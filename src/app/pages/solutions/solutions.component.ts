import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  solutionText:string='';
  questionId:any;

  constructor(public questionService:QuestionService,private route:ActivatedRoute,public userService:UserService){}

  solution={
    username:'',
    upVotes:['userids'],
    downVotes:['userids'],
    solution:''
  }

  questionOnj:any;

  ngOnInit(){
    this.questionId = this.route.snapshot.paramMap.get('questionid');
      this.questionService.getQuestionById(this.questionId).then(
        (res)=>{
          console.log(res)
          this.questionOnj=res;
        }
      ).catch((error)=>console.log(error))
  }

  postSolution(){
    let solution= {
      username:this.userService.user.username,
      solution:this.solutionText,
      upvotes:[],
      downvotes:[]
    }

    this.questionOnj.solution.push(solution);
    console.log("sdsafasdsaf",this.questionOnj)

    this.questionService.updateQuestion(this.questionOnj)
    .then((res)=>{
      console.log(res)
    this.solutionText='';
    })
    .catch((err)=>console.log(err));
  }
}
