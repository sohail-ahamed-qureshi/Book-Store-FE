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

  //Order Success Message
  private Ordermessage = new BehaviorSubject([]);
  rcvSuccessMessage = this.Ordermessage.asObservable();

  private bookDetails = new BehaviorSubject([]);
  rcvBookDetails = this.bookDetails.asObservable();

  // shareaddress
  private addrDetails = new BehaviorSubject([]);
  rcvaddrDetails = this.addrDetails.asObservable();

  // sharebooks
  private shareBooks = new BehaviorSubject([]);
  rcvbook = this.shareBooks.asObservable();


  private addrDetails2 = new BehaviorSubject([]);
  rcvaddrDetails2 = this.addrDetails2.asObservable();

  // sharebooks
  private shareBooks2 = new BehaviorSubject([]);
  rcvbook2 = this.shareBooks2.asObservable();
  constructor() { }

  // sharebooks
  sendBook(message: any) {
    this.shareBooks.next(message);
  }

  // shareaddress
  sendaddrDetails(message: any) {
    this.addrDetails.next(message);
  }

  // sharebooks
  sendBooks2(message: any) {
    this.shareBooks2.next(message);
  }

  // shareaddress
  sendaddrDetails2(message: any) {
    this.addrDetails2.next(message);
  }


  sendUpdate(message: any) {
    this.Cart.next(message);
  }

  sendOrderSuccessMessage(message: any) {
    this.Ordermessage.next(message);
  }

  //for navbar-cart update
  sendCartUpdate(message: any) {
    this.CartUpdate.next(message);
  }

  sendSearch(searchWord: any) {
    this.search.next(searchWord);
  }

  SendBookDetails(book: any) {
    this.bookDetails.next(book);
  }
}
