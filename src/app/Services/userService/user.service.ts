import { HttpService } from './../httpService/http.service';
import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  durationInSeconds=3;
  constructor(private HttpService: HttpService,
    private snackBar: MatSnackBar) { }

  openSnackBar( message:string) {
    this.snackBar.open(message,'OK', {
      duration: this.durationInSeconds* 1000,
    });
  }

  UpdateUserDetails(data:any){
    return this.HttpService.UpdateUserDetails('User/UpdateDetails', data);
  }
  
  SignUp(data:any){
    return this.HttpService.SignUp("User/Register",data);
  }

  Login(data:any){
    return this.HttpService.Login("User/Login",data);
  }
}
