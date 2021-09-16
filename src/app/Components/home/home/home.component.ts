import { AdminService } from './../../../Services/adminService/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allBooks:any=[];
  
  constructor(private adminSerivce: AdminService) { }

  ngOnInit(): void {
    this.GetAllBooks();
  }

  GetAllBooks() {
    this.adminSerivce.GetAllBooks().subscribe((response: any) => {
      this.allBooks = response.data;
    })
  }

}
