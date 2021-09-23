import { CartService } from './../../Services/cartService/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService) { }
  cartItems:any;
  ngOnInit(): void {
    this.GetAllCartItems();
  }

  GetAllCartItems(){
    this.CartService.GetAllCartItems().subscribe((response:any)=>{
      console.log(response);
      this.cartItems= response.data;
    },
    error=>{
      console.log(error);
    })
  }

}
