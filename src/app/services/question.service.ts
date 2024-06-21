import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  currentQuestionObj:any;

  constructor(private http:HttpClient) { }

  postQuestion(question:any){
    return new Promise((resolve,rej)=>{
      this.http.post('http://localhost:3000/questions',question).subscribe(
        (res)=>{
          resolve(res)
        },
        (error)=>{
          rej(error)
        }
      )
    })
  }

  getQuestions(){
    return new Promise((resolve,Reject)=>{
      this.http.get('http://localhost:3000/questions').subscribe(
        (res)=>{
          resolve(res)
        },
        (error)=>{
          Reject(error)
        }
      )
    })
  }

  getQuestionById(id:string){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost:3000/questions/' + id).subscribe(
        (res)=>{
          resolve(res)
        },
        (error)=>{
          reject(error)
        }
      )
    })
  }

  updateQuestion(newObj:any){
    return new Promise((resolve,rej)=>{
      this.http.put('http://localhost:3000/questions/'+newObj.id,newObj).subscribe(
        (res)=>{
          resolve(res)
        },
        (error)=>{
          rej(error)
        }
      )
    })
  }

}
