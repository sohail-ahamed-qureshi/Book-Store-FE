import { Router } from '@angular/router';
import { BookContentComponent } from './../book-content/book-content.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {

  //all books from parent- home component
  @Input() books: any = [];
  searchWord: any;

  // pagination controls
  pageSize = 12;
  page: number = 1;
  totalLength: any;
  outOfStock = false;

  constructor(private dataService: DataService,
    private route: Router) { }
  ngOnInit(): void {

    // search word recieved from nav-searchbar
    this.dataService.rcvSearch.subscribe((response: any) => {
      this.searchWord = response;
      this.totalLength = response.length;
    });
  }

  OpenBook(book: any) {
    this.dataService.SendBookDetails(book);
    this.route.navigateByUrl('Book');
  }

  checkForStock(book: any) {
    return { 'outOfStock': book.quantity == 0,
    'stock': book.quantity == 0 };
  }


}
