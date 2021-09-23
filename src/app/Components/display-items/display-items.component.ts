import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss']
})
export class DisplayItemsComponent implements OnInit {
  @Input() items:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.items)
  }

}
