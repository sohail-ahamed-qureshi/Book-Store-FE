import { WishlistService } from './../../Services/wishlistService/wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private wishlistService: WishlistService) { }
  wishlistItems:any=[];
  ItemsLength:any;
  ngOnInit(): void {
    this.GetAllItemsFromWishList()
  }

  GetAllItemsFromWishList(){
    this.wishlistService.GetAllItemsFromWishList().subscribe((response:any)=>{
      this.wishlistItems=response.data;
      this.ItemsLength=this.wishlistItems.length;
    })
  }

}
