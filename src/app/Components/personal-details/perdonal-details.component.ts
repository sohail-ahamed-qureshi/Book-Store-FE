import { UserService } from 'src/app/Services/userService/user.service';
import { Router } from '@angular/router';
import { CartService } from './../../Services/cartService/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perdonal-details',
  templateUrl: './perdonal-details.component.html',
  styleUrls: ['./perdonal-details.component.scss']
})
export class PerdonalDetailsComponent implements OnInit {
  editable = false;
  user: any = [];
  fullName: any;
  email: any;
  password: any;
  mobile: any;

  constructor(private cartService: CartService,
    private route: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.GetUserDetails();
  }

  initialize() {
    this.fullName = this.user.fullName;
    this.email = this.user.email;
    this.password = this.user.password;
    this.mobile = this.user.mobileNumber;
    this.editable = false;
  }

  redirectToHome() {
    this.route.navigateByUrl('home');
  }

  UpdateChanges(fullName: any, email: any, password: any, mobile: any) {
    let reqData = {
      fullName: fullName,
      email: email,
      mobileNumber: new Number(mobile),
      password: password
    }
    console.log(reqData);
    this.userService.UpdateUserDetails(reqData).subscribe((response: any) => {
      this.userService.openSnackBar(response.message);
      console.log(response);
      this.ngOnInit();
    },
      error => {
        this.userService.openSnackBar(error.message);
        this.initialize();
        console.log(error);
      });
  }

  GetUserDetails() {
    this.cartService.GetDetails().subscribe((response: any) => {
      this.user = response.data;
      console.log(this.user)
    });
  }



}
