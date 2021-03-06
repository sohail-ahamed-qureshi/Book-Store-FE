import { NewItemComponent } from './../new-item/new-item.component';
import { EditBookComponent } from './../edit-book/edit-book.component';
import { MatDialog } from '@angular/material/dialog';
import { ManageBookService } from './../../Services/bookService/manage-book.service';
import { WishlistService } from './../../Services/wishlistService/wishlist.service';
import { OrdersService } from './../../Services/OrderService/orders.service';
import { AddressService } from './../../Services/addressService/address.service';
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

  isClicked=false;
  userAddress:any=[];
  isClickedHome=false;
  isContinued=false;
  isCheckout=false;

  @Input() isWishListComponent:any;
  @Input() isMyOrdersComponent:any;
  @Input() isManageBooks:any;
  OrderBooks:any;
  visible=false;

  @Output() UpdateCart = new EventEmitter<any>();
  @Output() UpdateWishlist = new EventEmitter<any>();
  constructor(private route: Router,
    private cartService: CartService,
    private userService: UserService,
    private DataService: DataService,
    private AddressService:AddressService,
    private OrdersService:OrdersService,
    private WishlistService:WishlistService,
    private ManageBookService:ManageBookService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("Orders: "+this.isMyOrdersComponent)
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

  ContToAddress(books:any){
    this.isClicked= true;
    this.isClickedHome=true;
    this.isContinued=true;
    this.GetAddressOfHome('Home');
    this.DataService.sendBook(books);
  }

  ContinueToCheckout(userAddress:any,books:any){
    if(userAddress != null && books != null){
      this.isCheckout=true;
      this.isContinued=false;
      this.OrderBooks=books;
    } 
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
    this.OrdersService.PlaceOrder(reqData).subscribe((response:any)=>{
      this.DataService.sendOrderSuccessMessage(response);
      this.route.navigateByUrl('OrderSuccess');
    },
    error=>{
      console.log(error);
    });
  }

  removeItemFromWishList(item:any){
    let bookId = item.bookId;
    this.WishlistService.RemoveItemFromWishlist(bookId).subscribe((response: any) => {
      this.userService.openSnackBar(response.message);
      this.UpdateWishlist.emit(response);
    },
      error => {
        this.userService.openSnackBar(error.error.message);
      });
  }

  GetAddressOfHome(typeOf:any){
    this.AddressService.GetAddress(typeOf).subscribe((response: any) => {
      this.userAddress= response.data;
      //share address to address view component
      this.DataService.sendaddrDetails(response);
    },
      error => {
        this.userService.openSnackBar(error.error.message);
      });
  }


  DeleteItem(item:any){
     this.ManageBookService.DeleteItem(item.bookId).subscribe((response:any)=>{
      this.userService.openSnackBar(response.message);
     },
     error => {
      this.userService.openSnackBar(error.error.message);
    });
     
  }

  EditItem(item:any){
      this.dialog.open(EditBookComponent,{
        data: item
      });
  }

  AddNewItem(){
    this.dialog.open(NewItemComponent)
  }

}
