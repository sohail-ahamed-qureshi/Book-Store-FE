import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpService) { }

  AddToWishList(bookId:number){
    return this.http.AddToWishlist('WishList',bookId);
  }
}
