import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // source for sharing search word from search bar
  //  to display books component
  private search = new BehaviorSubject([]);
  rcvSearch = this.search.asObservable();

  //for navbar-cart update
  private CartUpdate = new BehaviorSubject([]);
  rcvUpdate = this.CartUpdate.asObservable();

  //for Cart update on operations
  private Cart = new BehaviorSubject([]);
  Update = this.Cart.asObservable();

  private bookDetails = new BehaviorSubject([]);
  rcvBookDetails = this.bookDetails.asObservable();
  constructor() { }


  sendUpdate(message:any){
    this.Cart.next(message);
  }

  sendCartUpdate(message:any){
    this.CartUpdate.next(message);
  }

  sendSearch(searchWord: any) {
    this.search.next(searchWord);
  }

  SendBookDetails(book:any){
    this.bookDetails.next(book);
  }
}
