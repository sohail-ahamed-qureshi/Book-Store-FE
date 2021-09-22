import { UserService } from './../../Services/userService/user.service';
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
export class BookContentComponent implements OnInit, OnDestroy {

  constructor(
    private route: Router,
    private dataService: DataService,
    private cartService: CartService,
    private userService: UserService) {
  }
  book: any;
  token: any;
  userData: any;
  existingUser = false;
  isCart = false;
  isDisabled = false;
  QtyInput = 1;
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
        if (response.success) {
          localStorage.setItem('userData', response.data.fullName);
        }
      });
    }
  }

  ngOnDestroy() {

  }

  redirectToHome() {
    this.route.navigateByUrl('home');
  }

  AddToCart() {
    //if user is logged_in then add item to cart else 
    //ask to login/signup
    if (this.existingUser) {
      let reqData = {
        bookId: this.book.bookId,
        quantity: 1
      }
      this.cartService.AddToCart(reqData).subscribe((response: any) => {
        //item added to cart
        console.log(response);
        this.isCart = true;
      }, error => {
        //some exception occured
        console.log(error.message);
      }
      );
    }
    //unknown user
    this.userService.openSnackBar("Please Login/SignUp...");



    this.isDisabled = true;


  }

  IncreaseQty(qty: any) {
    console.log(qty);
    this.QtyInput += 1;
  }

  DecreaseQty(qty: any) {
    console.log(qty);
    if (qty > 1) {
      this.QtyInput -= 1;
    }

  }

  AddTowishlist() {
    if (this.existingUser) {
      //add item to wishlist
    }
  }
}
