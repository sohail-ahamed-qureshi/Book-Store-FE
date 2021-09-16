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
  constructor(private dataService: DataService,
    private dialog: MatDialog,
    private route: Router) { }
  ngOnInit(): void {

    // search word recieved from nav-searchbar
    this.dataService.rcvSearch.subscribe((response: any) => {
      this.searchWord = response;
    });
  }

  OpenBook(book: any) {
    this.dataService.SendBookDetails(book);
    this.route.navigateByUrl('Book');
  }


}
