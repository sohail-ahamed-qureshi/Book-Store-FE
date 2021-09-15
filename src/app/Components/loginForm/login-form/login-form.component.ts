import { UserService } from 'src/app/Services/userService/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder,
    private UserService:UserService,
    private router: Router
    ) { }

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
    this.UserService.Login(requestPayload).subscribe((response:any)=>{
      console.log(response);
      this.loginForm.reset('');
      // store token in local storage
      localStorage.setItem('token', response.token)
      this.router.navigateByUrl('home');
      this.UserService.openSnackBar(response.message);
    },error =>{
      this.UserService.openSnackBar(error.error.message);
    }
    )
   
  }

  routeToForgot(){
    
  }

}
