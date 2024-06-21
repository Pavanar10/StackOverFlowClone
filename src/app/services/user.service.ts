import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
public user:any;

  createAccount(userObj:any){
    return new Promise<any>((resolve,reject)=>{
      this.http.post('http://localhost:3000/users',userObj).subscribe(
        (response)=>{
          resolve(response)
        },
      (error)=>{
        reject(error)
      })
    })
  }

  getUser(email:string){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost:3000/users?email=' +email).subscribe(
        (res)=>{
          console.log(res)
          resolve(res)
        },
      (err)=>{reject(err)})
    })
  }
}
