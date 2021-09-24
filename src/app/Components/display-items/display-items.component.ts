import { DataService } from 'src/app/Services/dataService/data.service';
import { UserService } from './../../Services/userService/user.service';
import { CartService } from './../../Services/cartService/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss']
})
export class DisplayItemsComponent implements OnInit {
  @Input() items: any = [];
  @Input() itemsCount: any;

  @Output() UpdateCart = new EventEmitter<any>();
  constructor(private route: Router,
    private cartService: CartService,
    private userService: UserService,
    private DataService: DataService) { }

  ngOnInit(): void {

  }

  redirectToHome() {
    this.route.navigateByUrl('home');
  }

  IncreaseQty(book: any) {
    // after updating quantity increase qty by 1
    let reqData = {
      bookId: book.bookId,
      quantity: 1
    }
    this.cartService.UpdateQuantity(reqData).subscribe((response: any) => {
      this.userService.openSnackBar(response.message);
      this.UpdateCart.emit(response);
    },
      error => {
        this.userService.openSnackBar(error.error.message);
      });
  }

  DecreaseQty(book: any) {
    // after updating quantity increase qty by 1
    let reqData = {
      bookId: book.bookId,
      quantity: -1
    }
    this.cartService.UpdateQuantity(reqData).subscribe((response: any) => {
      this.DataService.sendCartUpdate(response);
      this.userService.openSnackBar(response.message);
      this.UpdateCart.emit(response);
    },
      error => {
        this.userService.openSnackBar(error.error.message);
      });
  }

  removeItemFromCart(item: any) {
    let bookId = item.bookId;
    this.cartService.RemoveItemfromCart(bookId).subscribe((response: any) => {
      this.userService.openSnackBar(response.message);
      this.UpdateCart.emit(response);
    },
      error => {
        this.userService.openSnackBar(error.error.message);
      });
  }

}
