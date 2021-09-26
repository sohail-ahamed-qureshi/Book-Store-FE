import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/OrderService/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  constructor(private OrdersService: OrdersService,
    private route: Router) { }
  ItemsLength: any;
  Items: any = [];
  isMyOrdersComponent = true;
  ngOnInit(): void {
    this.GetAllOrders();
    this.isMyOrdersComponent = true;
 
  }

  GetAllOrders() {
    this.OrdersService.GetAllOrders().subscribe((response: any) => {
      if (response.data != null) {
        this.Items = response.data;
        this.ItemsLength = response.data.length;
      } else {
        this.route.navigateByUrl('home');
      }
    },
      error => {
        console.log(error);
      })
  }

}
