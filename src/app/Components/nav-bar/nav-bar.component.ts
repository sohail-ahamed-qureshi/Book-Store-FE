import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isProfile = false;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  clickedProfile() {
    this.isProfile = !this.isProfile;
  }

  shareSeachWord(search:any){
   this.dataService.sendSearch(search);
  }



}
