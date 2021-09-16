import { DataService } from 'src/app/Services/dataService/data.service';
import { AdminService } from './../../Services/adminService/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit {

  constructor(
  private route: Router,
  private dataService: DataService) { }
  book:any;
  token:any;
  existingUser=false;
  ngOnInit(): void {
    //book details sharing from display books component
    this.dataService.rcvBookDetails.subscribe((data:any)=>{
      this.book=data;
    })

    // Check whether user is logged_in or signed_up
    this.token = localStorage.getItem('token');
    if(this.token != null || this.token != ''){
        //verify user's profile
    }
    


  }

  redirectToHome(){
    this.route.navigateByUrl('home');
  }

  AddToCart(){
    if(!this.existingUser){
      
    }
  }

  AddTowishlist(){

  }
}
