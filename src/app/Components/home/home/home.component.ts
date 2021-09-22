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
  token: any;

  constructor(private adminSerivce: AdminService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.GetAllBooks();
    this.CheckUserLoggedIn();
    this.CheckUserLoggedIn();
  }

  CheckUserLoggedIn() {
    // Check whether user is logged_in or signed_up
    //verify user's profile
    this.cartService.GetDetails().subscribe((response: any) => {
      console.log("Login Response: " + response.success)
      if (response.success == true) {
        localStorage.setItem('userData', response.data.fullName);
      }
      else {
        localStorage.setItem('userData', '');
      }
    },
      error => {
        console.log(error.message);
        localStorage.setItem('userData', '');
      }
    );

  }

  GetAllBooks() {
    this.adminSerivce.GetAllBooks().subscribe((response: any) => {
      this.allBooks = response.data;
    })
  }

}
