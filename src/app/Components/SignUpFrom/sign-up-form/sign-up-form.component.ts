import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  SignUpForm!: FormGroup;
  submitted = false;
  showPwd: boolean = false;
  visible = false;
  constructor(private formBuilder: FormBuilder,
    private user: UserService,
    private route: Router) { }

  ngOnInit(): void {
    this.SignUpForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.SignUpForm.controls;
  }


  OnCheck() {
    this.showPwd = !this.showPwd;
    this.visible = !this.visible;
  }


  OnSignUp() {
    this.submitted = true;
    if (this.SignUpForm.invalid) {
      return;
    }
    let requestPayload = {
      fullname: this.SignUpForm.value.fullname,
      email: this.SignUpForm.value.email,
      password: this.SignUpForm.value.password,
      mobileNumber: this.SignUpForm.value.mobile
    }
    console.log(requestPayload);
    this.user.SignUp(requestPayload).subscribe((response: any) => {
      this.user.openSnackBar(response.message);
      this.route.navigateByUrl('User/login')
    }, error => {
      this.user.openSnackBar(error.error.message);
    });
  }

}
