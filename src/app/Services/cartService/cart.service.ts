import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
token:any;
  constructor(private httpService: HttpService) { }

  GetDetails(){
    return  this.httpService.GetDetails('User/GetDetails');
  }

  AddToCart(data:any){
    return this.httpService.AddToCart('Cart', data);
  }

  UpdateQuantity(data:any){
    return this.httpService.UpdateQuantity('Cart', data);
  }

  GetAllCartItems(){
    return this.httpService.GetAllCartItems('Cart');
  }
}
