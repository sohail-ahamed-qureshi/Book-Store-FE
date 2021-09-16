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

  private bookDetails = new BehaviorSubject([]);
  rcvBookDetails = this.bookDetails.asObservable();
  constructor() { }

  sendSearch(searchWord: any) {
    this.search.next(searchWord);
  }

  SendBookDetails(book:any){
    this.bookDetails.next(book);
  }
}
