import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},{
  path:'login',component:LoginComponent
},
{
  path:'createaccount',
  component:CreateAccountComponent
},{path:'home',component:HomeComponent},
{path:'solution/:questionid',component:SolutionsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
