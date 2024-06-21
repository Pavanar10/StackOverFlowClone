import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

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
}
