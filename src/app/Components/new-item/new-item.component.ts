import { DataService } from 'src/app/Services/dataService/data.service';
import { UserService } from './../../Services/userService/user.service';
import { ManageBookService } from './../../Services/bookService/manage-book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  NewBook!:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private manageBook: ManageBookService,
    private UserService: UserService,
    private dataService: DataService) { }

  ngOnInit() {
this.NewBook = this.formBuilder.group({
  bookName:['', Validators.required],
  author:['', Validators.required],
  description:['', Validators.required],
  quantity:[0, Validators.required],
  price:[0, Validators.required],
})
  }

  AddBook(){
    if(this.NewBook.invalid){
      return;
    }
    let reqData ={
      BookName: this.NewBook.value.bookName,
      Author: this.NewBook.value.author,
      Description: this.NewBook.value.description,
      Quantity: this.NewBook.value.quantity,
      Price: this.NewBook.value.price
    }
    this.manageBook.AddBook(reqData).subscribe((response:any)=>{
      this.UserService.openSnackBar(response.message);
      this.dataService.sendAllBooks(response);
    },
    error=>{
      this.UserService.openSnackBar(error.message);
    })
    
  }

}
