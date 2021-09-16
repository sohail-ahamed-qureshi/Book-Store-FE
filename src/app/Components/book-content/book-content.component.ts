import { CartService } from './../../Services/cartService/cart.service';
import { DataService } from 'src/app/Services/dataService/data.service';
import { AdminService } from './../../Services/adminService/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit {

  constructor(
    private route: Router,
    private dataService: DataService,
    private cartService: CartService) { }
  book: any;
  token: any;
  userData: any;
  existingUser = false;
  ngOnInit(): void {
    //book details sharing from display books component
    this.dataService.rcvBookDetails.subscribe((data: any) => {
      this.book = data;
    })

    // Check whether user is logged_in or signed_up
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      //verify user's profile
      this.cartService.GetDetails().subscribe((response: any) => {
        this.userData = response.data;
        console.log(response)
      });
      if (this.userData != null) {
        this.existingUser = true;
      }
    }
    else {
      this.existingUser = false;
    }
    console.log(this.existingUser);
  }

  redirectToHome() {
    this.route.navigateByUrl('home');
  }

  AddToCart() {
    if(this.existingUser){
      let reqData = {
        bookId: this.book.bookId,
        quantity: 1
      }
      this.cartService.AddToCart(reqData).subscribe((response: any) => {
        console.log(response);
      })
    }
  }

  AddTowishlist() {
    if (this.existingUser) {
      //add item to wishlist
    }
  }
}
