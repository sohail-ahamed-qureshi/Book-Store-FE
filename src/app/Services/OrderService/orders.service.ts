import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private HttpService: HttpService) { }

  PlaceOrder(data:any){
    return this.HttpService.PlaceOrder("Orders", data);
  }
}
