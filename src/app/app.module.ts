import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   MatSnackBarModule,
   MatCardModule,
   MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
