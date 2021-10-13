import { HttpService } from './../httpService/http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageBookService {

  constructor(private HttpService: HttpService) { }

  DeleteItem(bookId:any){
    return this.HttpService.DeleteItem('Books/'+bookId);
  }

  UpdateDetails(data:any){
    return this.HttpService.UpdateBookDetails('Books', data);
  }

  AddBook(data:any){
    return this.HttpService.AddBook('Books', data);
  }
}
