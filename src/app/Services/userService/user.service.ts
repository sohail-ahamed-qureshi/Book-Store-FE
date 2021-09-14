import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpService: HttpService) { }

  SignUp(data:any){
    return this.HttpService.SignUp("User/Register",data);
  }
}
