import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpService) { }

  GetAllBooks(){
    return this.http.GetAllBooks("Dashboard");
  }

}
