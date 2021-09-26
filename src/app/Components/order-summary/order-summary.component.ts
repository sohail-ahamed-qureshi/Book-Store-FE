import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/dataService/data.service';
import { OrdersService } from 'src/app/Services/OrderService/orders.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  isCheckout=false;
  OrderBooks:any=[];
  userAddress:any=[];
  constructor(
    private ordersService:OrdersService,
    private dataService: DataService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.dataService.rcvbook2.subscribe((response:any)=>{
      this.OrderBooks= response;
      if(this.OrderBooks.length != 0){
        this.isCheckout=true;
      }
    })
    this.dataService.rcvaddrDetails2.subscribe((response:any)=>{
      this.userAddress=response;
    })
  }

  CheckOut(OrderBooks:any, userAddress:any){
    let cartId:any;
    OrderBooks.forEach((book:any) => {
      cartId=book.cartId
    });
    let reqData = {
      CartId:cartId,
      AddressId: userAddress.addressId
    }
    this.ordersService.PlaceOrder(reqData).subscribe((response:any)=>{
      this.dataService.sendOrderSuccessMessage(response);
      this.route.navigateByUrl('OrderSuccess');
    },
    error=>{
      console.log(error);
    });
  }

}
