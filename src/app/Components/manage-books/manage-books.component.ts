import { DataService } from 'src/app/Services/dataService/data.service';
import { AdminService } from './../../Services/adminService/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.scss']
})
export class ManageBooksComponent implements OnInit {
  isManageBooks = true;
  allBooks: any = [];
  booksCount: any;
  constructor(private adminService: AdminService,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.GetAllBooks();
    this.dataService.rcvAllbooks.subscribe((response: any) => {
      this.GetAllBooks();
    })
  }

  GetAllBooks() {
    this.adminService.GetAllBooks().subscribe((response: any) => {
      this.allBooks = response.data;
      this.booksCount = this.allBooks.length;
    })
  }

}
