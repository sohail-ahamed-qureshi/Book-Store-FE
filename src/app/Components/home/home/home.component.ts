import { CartService } from './../../../Services/cartService/cart.service';
import { AdminService } from './../../../Services/adminService/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allBooks: any = [];
  items: any = [];
  token: any;

  constructor(private adminSerivce: AdminService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.GetAllBooks();
   
  }

 

  GetAllBooks() {
    this.adminSerivce.GetAllBooks().subscribe((response: any) => {
      this.allBooks = response.data;
    })
  }



}
