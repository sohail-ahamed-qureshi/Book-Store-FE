
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: any = environment.BaseUrl;
  token: any;

  constructor(private http: HttpClient,
  ) { }

  GetDetails(url: any) {
    this.token = localStorage.getItem('token');
    console.log("token: "+this.token)
    var headersobject = new HttpHeaders().set("Authorization", "Bearer " +this.token);
    let httpOptions = {
      headers: headersobject
    }
    return this.http.get(this.baseUrl + url, httpOptions);
  }

  GetAllBooks(url: any) {
    return this.http.get(this.baseUrl + url);
  }

  AddToCart(url: any, data: any) {
    return this.http.post(this.baseUrl + url, data);
  }

  UpdateQuantity(url: any, data: any){
    return this.http.put(this.baseUrl+url, data);
  }

  SignUp(url: any, data: any) {
    return this.http.post(this.baseUrl + url, data);
  }

  Login(url: any, data: any) {
    return this.http.post(this.baseUrl + url, data);
  }

  AddToWishlist(url:any, bookId:number){
    return this.http.post(this.baseUrl+url, bookId);
  }

}
