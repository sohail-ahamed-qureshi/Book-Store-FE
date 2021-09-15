
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:any = environment.BaseUrl;
  
  constructor(private http: HttpClient,
  ) { }

  GetAllBooks(url:any){
    return this.http.get(this.baseUrl+url);
  }

  SignUp(url:any, data:any){
   return this.http.post(this.baseUrl+url, data);
  }

  Login(url:any, data:any){
    return this.http.post(this.baseUrl+url, data);
  }
}
