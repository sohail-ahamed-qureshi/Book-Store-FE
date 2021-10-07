import { CartService } from './../../Services/cartService/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  constructor(private cartService:CartService) { }
  isProfileComponent=true;
  isClicked=true;
  role:any;
  isAdmin=false;
  ngOnInit(): void {
    this.role = localStorage.getItem('Role');
    if(this.role == 'Admin'){
      this.isAdmin = true;
    }
  }

}
