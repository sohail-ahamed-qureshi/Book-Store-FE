import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) { }

  isLogin=false;
  ngOnInit(): void {
    
  }

  redirectToLogin(){
    this.route.navigateByUrl('User/login');
    this.isLogin = false;
  }

  redirectToSignUp(){
    this.route.navigateByUrl('User/SignUp')
    this.isLogin = true;
  }
}
