import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}
createAccount:FormGroup=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  username:['',[Validators.required,Validators.maxLength(12)]],
  password:['',[Validators.required,Validators.minLength(6)]]
})

createUser(){
  this.userService.createAccount(this.createAccount.value).then((res)=>{
    console.log(res);
    this.userService.user=res;
    localStorage.setItem('user',JSON.stringify(res));
    this.router.navigate(['/home']);
  }).catch((err)=>{console.log(err)})
}
}
