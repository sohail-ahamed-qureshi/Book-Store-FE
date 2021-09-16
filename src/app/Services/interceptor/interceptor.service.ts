import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token:any;
  constructor() { 
    this.token = localStorage.getItem('token');
  }
  intercept(req:any, next:any){
    let request = req.clone({
      setHeaders:{
        Authorization: 'Bearer '+this.token
      }
    });
    return next.handle(request);
  }
}
