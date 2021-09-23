import { WishlistService } from './../../Services/wishlistService/wishlist.service';
import { UserService } from './../../Services/userService/user.service';
import { CartService } from './../../Services/cartService/cart.service';
import { DataService } from 'src/app/Services/dataService/data.service';
import { AdminService } from './../../Services/adminService/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit, OnDestroy, OnChanges {

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


  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnInit(): void {
    //book details sharing from display books component
    this.dataService.rcvBookDetails.subscribe((data: any) => {
      this.book = data;
    });
    this.userData = localStorage.getItem('userData');
    if (this.userData != '') {
      this.existingUser = true;
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
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      let reqData = {
        bookId: this.book.bookId,
        quantity: 1
      }
      this.cartService.AddToCart(reqData).subscribe((response: any) => {
        //item added to cart
        console.log(response);
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
