import { Component } from '@angular/core';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css'
})
export class LoginPopupComponent {
  signupSubmit: any[] = [];
  loginDetails ={
    email: '',
    password: ''
  };

  onSignup(){
    this.signupSubmit.push(this.loginDetails);
    localStorage.setItem('loginSubmit', JSON.stringify(this.signupSubmit));                                    
  }

}
