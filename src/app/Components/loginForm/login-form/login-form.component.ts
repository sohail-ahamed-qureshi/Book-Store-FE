import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showPwd: boolean = false;
  visible=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }


  OnCheck() {
    this.showPwd = !this.showPwd;
    this.visible=!this.visible;
  }

  OnSignin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let requestPayload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(requestPayload)
  }

  routeToForgot(){
    
  }

}
