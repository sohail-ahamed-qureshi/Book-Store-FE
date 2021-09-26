import { Router } from '@angular/router';
import { WishlistService } from './../../Services/wishlistService/wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private wishlistService: WishlistService,
    private route: Router) { }
  wishlistItems:any=[];
  ItemsLength:any;
  isWishListComponent=true;
  ngOnInit(): void {
    this.GetAllItemsFromWishList()
    this.isWishListComponent=true;
  }

  GetAllItemsFromWishList(){
    this.wishlistService.GetAllItemsFromWishList().subscribe((response:any)=>{
      if(response.data != null){
        this.wishlistItems=response.data;
        this.ItemsLength=this.wishlistItems.length;
      }
      else{
        this.route.navigateByUrl('home');
      }  
    },
    error=>{
      console.log(error);
    })
  }

  ReceiveUpdate(event:any){
    this.GetAllItemsFromWishList();
  }

}
