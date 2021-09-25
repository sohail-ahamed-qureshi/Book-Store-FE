import { DataService } from 'src/app/Services/dataService/data.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private DataService:DataService,
    private route: Router) { }
  message:any;
  ngOnInit(): void {
    this.DataService.rcvSuccessMessage.subscribe((response:any)=>{
      this.message=response.message;
    })
  }

  redirectToHome(){
    this.route.navigateByUrl('home');
  }

}
