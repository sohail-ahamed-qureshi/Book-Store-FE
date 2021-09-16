import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit, OnDestroy {

  @Input() books: any = [];
  searchWord: any;
  count: number = 0;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.rcvSearch.subscribe((response: any) => {
      this.searchWord = response;
    })
  }

  ngOnDestroy() {
  }

}
