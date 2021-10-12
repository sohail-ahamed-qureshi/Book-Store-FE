import { UserService } from './../../Services/userService/user.service';
import { DataService } from 'src/app/Services/dataService/data.service';
import { ManageBookService } from './../../Services/bookService/manage-book.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private manageBook:ManageBookService,
  private dataService: DataService,
  private UserService:UserService) { }

  ngOnInit(): void {
  }

  UpdateDetails(bookId:any, bookName:any, author:any, description:any, quantity:any, price:any, image:any, rating:any){
    var quant= +quantity;
    var pric = +price;
    let reqData = {
      BookId:bookId,
      BookName: bookName,
      Author:author,
      Description: description,
      Quantity:quant,
      Price:pric,
      Image:'',
      Rating:rating
    }

    console.log(reqData)
    this.manageBook.UpdateDetails(reqData).subscribe((response:any)=>{
        this.dataService.sendAllBooks(response);
        this.UserService.openSnackBar(response.message);  
    },
    error=>{
      this.UserService.openSnackBar(error.message)
    });
    
  }

}
