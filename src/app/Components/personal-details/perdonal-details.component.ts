import { Router } from '@angular/router';
import { CartService } from './../../Services/cartService/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perdonal-details',
  templateUrl: './perdonal-details.component.html',
  styleUrls: ['./perdonal-details.component.scss']
})
export class PerdonalDetailsComponent implements OnInit {
  editable=false;
  user:any=[];
  constructor(private cartService: CartService,
    private route: Router) { }

  ngOnInit(): void {
    this.GetUserDetails();
  }
  redirectToHome(){
    this.route.navigateByUrl('home');
  }

  GetUserDetails(){
    this.cartService.GetDetails().subscribe((response:any)=>{
      this.user=response.data;
      console.log(this.user)
    });
  }

}
