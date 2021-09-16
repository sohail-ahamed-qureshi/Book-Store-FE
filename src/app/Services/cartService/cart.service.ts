import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService: HttpService) { }

  AddToCart(data:any){
    return this.httpService.AddToCart('Cart', data);
  }
}
