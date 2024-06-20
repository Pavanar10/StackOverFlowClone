import { Component } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm:FormGroup=this.fb.group({
 'email':['',[Validators.required,Validators.email]],
  'password':['',[Validators.required,Validators.minLength(6)]]
});

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router,
    private snackBar:MatSnackBar
  ){

  }

  login(){
    this.userService.getUser(this.loginForm.value.email).then((res:any)=>{
        if(res.length===0){
          console.log('Account does not exist');
          this.snackBar.open('Account does not exist','ok');

        }else if(res[0].password ===this.loginForm.value.password){
          console.log('Passwords Match');
          this.snackBar.open('login successful','ok');
          this.userService.user=res[0];
          localStorage.setItem('user',JSON.stringify(res[0]));
          this.router.navigate(['/home']);
        }else {
          console.log('Passwords do not match');
          this.snackBar.open('Incorrect Password','ok')
        }
    }).catch((err)=>{
      console.log(err)
    })
  }
}
