import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private search = new BehaviorSubject([]);
  rcvSearch = this.search.asObservable();
  constructor() { }

  sendSearch(searchWord: any) {
    this.search.next(searchWord);
  }
}
