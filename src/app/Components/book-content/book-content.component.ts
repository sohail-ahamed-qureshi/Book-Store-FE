import { WishlistService } from './../../Services/wishlistService/wishlist.service';
import { UserService } from './../../Services/userService/user.service';
import { CartService } from './../../Services/cartService/cart.service';
import { DataService } from 'src/app/Services/dataService/data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit {

  constructor(
    private route: Router,
    private dataService: DataService,
    private cartService: CartService,
    private userService: UserService,
    private wishlistService: WishlistService) {
  }
  book: any;
  token: any;
  userData: any;
  existingUser = false;
  isCart = false;
  isDisabled = false;
  QtyInput = 1;
  isOutOfStock=false;

  ngOnInit(): void {
    //book details sharing from display books component
    this.dataService.rcvBookDetails.subscribe((data: any) => {
      this.book = data;
      if(this.book.quantity == 0){
        this.isOutOfStock = true;
      }
    });
    this.userData = localStorage.getItem('userData');
    if (this.userData != '') {
      this.existingUser = true;
    }
  }


  redirectToHome() {
    this.route.navigateByUrl('home');
  }

  AddToCart() {
    //if user is logged_in then add item to cart else 
    //ask to login/signup
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      let reqData = {
        bookId: this.book.bookId,
        quantity: 1
      }
      this.cartService.AddToCart(reqData).subscribe((response: any) => {
        //item added to cart
        console.log(response);
        //update the badge in navbar
        this.dataService.sendCartUpdate(response);
        this.userService.openSnackBar(response.message);
        this.isCart = true;
      }, error => {
        //some exception occured
        console.log(error.message);
        this.userService.openSnackBar(error.error.message);
      });
    } else {
      //unknown user
      this.userService.openSnackBar("Please Login/SignUp...");

    }
  }

  IncreaseQty(qty: any) {
    // after updating quantity increase qty by 1
    let reqData = {
      bookId: this.book.bookId,
      quantity: 1
    }
    this.cartService.UpdateQuantity(reqData).subscribe((response: any) => {
      this.QtyInput = qty + 1;
      this.userService.openSnackBar(response.message);
    },
      error => {
        this.userService.openSnackBar(error.error.message);
      });
  }

  DecreaseQty(qty: any) {
    console.log(qty);
    if (qty > 1) {
       // after updating quantity increase qty by 1
    let reqData = {
      bookId: this.book.bookId,
      quantity: -1
    }
    this.cartService.UpdateQuantity(reqData).subscribe((response: any) => {
      this.QtyInput = qty - 1;
      this.userService.openSnackBar(response.message);
    },
      error => {
        this.userService.openSnackBar(error.error.message);
      });
    }

  }

  AddTowishlist() {
    this.token = localStorage.getItem('token');
    if (this.token != null) {
       let bookId=  this.book.bookId; 
      this.wishlistService.AddToWishList(bookId).subscribe((response: any) => {
        //item added to cart
        console.log(response);
        this.userService.openSnackBar(response.message);
      }, error => {
        //some exception occured
        console.log(error.message);
        this.userService.openSnackBar(error.error.message);
      });
    } else {
      //unknown user
      this.userService.openSnackBar("Please Login/SignUp...");

    }
  }
}
