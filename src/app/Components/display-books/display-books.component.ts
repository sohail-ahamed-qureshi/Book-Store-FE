import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit, OnDestroy {

  @Input() books:any=[];
  count:number=0;  
  constructor() { }
  ngOnInit(): void {

  }

  ngOnDestroy(){
    console.log(this.books);
    
  }

}
