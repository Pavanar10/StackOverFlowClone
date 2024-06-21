import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
constructor(public userServcie:UserService,private router:Router){

}
ngOnInit(): void {
  if(this.userServcie.user === undefined){
    let str= localStorage.getItem('user');
    if(str!==null){
      this.userServcie.user=JSON.parse(str);
    }else{
      this.router.navigate(['/login']);
    }
  }
  
  
    
  }

logout(){
  this.userServcie.user=undefined;
  this.router.navigate(['/login']);
  localStorage.clear();
}
}
