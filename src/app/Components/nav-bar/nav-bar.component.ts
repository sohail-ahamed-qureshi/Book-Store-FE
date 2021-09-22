import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
  badgeContent=0;
  constructor(private dataService: DataService,
    private route: Router,
  ) {

   }

  ngOnInit(): void {
    this.isLoggedIn = false;
    console.log("Logged In: "+this.isLoggedIn)
  }

  clickedProfile() {
    this.isProfile = !this.isProfile;
    let userData: any = localStorage.getItem('userData');
    if (userData != '') {
      this.userName = userData;
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  redirectToLogin() {
    this.route.navigateByUrl('User');
  }

  redirectToLogout(){
    this.isLoggedIn = false;
    localStorage.clear();
    this.redirectToHome();
  }

  shareSeachWord(search: any) {
    this.dataService.sendSearch(search);
  }

  redirectToOrders() {
  }

  redirectToWishlist() {

  }
  redirectToCart() {

  }

  redirectToHome() {
    this.route.navigateByUrl('home');
  }


}
