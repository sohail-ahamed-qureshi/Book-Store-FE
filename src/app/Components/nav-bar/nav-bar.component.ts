import { UserService } from './../../Services/userService/user.service';
import { CartService } from './../../Services/cartService/cart.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isProfile = false;
  userName: any;
  isLoggedIn = false;
  badgeContent = 0;
  items: any = [];
  token: any;
  isSearch=false;
  constructor(private dataService: DataService,
    private route: Router,
    private cartService: CartService,
    private UserService: UserService
  ) { }

  ngOnInit(): void {
    this.dataService.rcvUpdate.subscribe((response: any) => {
      this.GetAllCartItems();
    });
    
    //check user login
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      this.isLoggedIn = true;
      this.userName = localStorage.getItem('userData');
    }
    console.log("Logged In: " + this.isLoggedIn);
    this.GetAllCartItems();
    this.CheckUserLoggedIn();
  }

  CheckUserLoggedIn() {
    // Check whether user is logged_in or signed_up
    //verify user's profile
    if (this.isLoggedIn) {
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
  }



  clickedProfile() {
    this.isProfile = !this.isProfile;
    this.userName = localStorage.getItem('userData');
  }

  redirectToLogin() {
    this.route.navigateByUrl('User');
  }

  redirectToLogout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.badgeContent = 0;
    this.route.navigateByUrl('home');
  }

  shareSeachWord(search: any) {
    this.dataService.sendSearch(search);
  }

  redirectToOrders() {
  }

  redirectToWishlist() {
    this.route.navigateByUrl('MyWishlist');
  }
  redirectToCart() {
    if(this.badgeContent == 0){
      this.UserService.openSnackBar('Cart is Empty');
      return;
    }
    this.route.navigateByUrl('cart');
  }

  redirectToHome() {
    this.route.navigateByUrl('home');
  }

  GetAllCartItems() {
    this.cartService.GetAllCartItems().subscribe((response: any) => {
      this.items = response.data;
      if(this.items != null){
        this.badgeContent = this.items.length;
      }
      
    })
  }


}
