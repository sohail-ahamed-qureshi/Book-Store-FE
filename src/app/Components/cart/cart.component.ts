import { CartService } from './../../Services/cartService/cart.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService) { }
  cartItems:any;
  cartItemsLength:any;

  

  ngOnInit(): void {
    this.GetAllCartItems();
  }

  GetAllCartItems(){
    this.CartService.GetAllCartItems().subscribe((response:any)=>{
      console.log(response);
      this.cartItems= response.data;
      this.cartItemsLength= response.data.length;
    },
    error=>{
      console.log(error);
    })
  }

  ReceiveUpdate(event:any){
    this.GetAllCartItems();
  }

}
