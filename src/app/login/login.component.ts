import { Component } from '@angular/core';
import { LogRegInfo } from '../job-object';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  signupSubmit: any[] = [];
  loginDetails:LogRegInfo={
    email: '',
    password: ''
  };

  onSignup(){
    this.signupSubmit.push(this.loginDetails);
    localStorage.setItem('loginSubmit', JSON.stringify(this.signupSubmit));                                    
  }

  /*onLogin(){
    const userExist = this.signupSubmit.find(l=>l.email==)
  }*/

}
