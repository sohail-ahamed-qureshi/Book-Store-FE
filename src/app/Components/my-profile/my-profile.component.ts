import { CartService } from './../../Services/cartService/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user:any=[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // this.GetUserDetails();
  }

  // GetUserDetails() {
  //   this.cartService.GetDetails().subscribe((response: any) => {
  //     this.user = response.data;
  //     console.log(this.user)
  //   });
  // }

}
