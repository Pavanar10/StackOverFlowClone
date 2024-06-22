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

  vote(id:number,param:number){
      if(param===1){
        //upvote

        if(!(this.questionOnj.solution[id].upvotes.indexOf(this.userService.user.id)>=0)){
          this.questionOnj.solution[id].upvotes.push(this.userService.user.id) ;
        }

          for(let i =0;i< this.questionOnj.solution[id].downvotes.length;i++){
              if(this.questionOnj.solution[id].downvotes[i]===this.userService.user.id){
                this.questionOnj.solution[id].downvotes.splice(i,1)
              }
          }

      }
      else{
        

        if(!(this.questionOnj.solution[id].downvotes.indexOf(this.userService.user.id)>=0)){
          this.questionOnj.solution[id].downvotes.push(this.userService.user.id) 
        }

          for(let i =0;i< this.questionOnj.solution[id].upvotes.length;i++){
            if(this.questionOnj.solution[id].upvotes[i]===this.userService.user.id){
              this.questionOnj.solution[id].upvotes.splice(i,1)
            }
        }
  }

  this.questionService.updateQuestion(this.questionOnj)
  .then((res)=>{
    console.log(res)
  this.solutionText='';
  })
  .catch((err)=>console.log(err));
}
}
