import { Component, Input, OnInit } from '@angular/core';
import { AddressService } from 'src/app/Services/addressService/address.service';
import { DataService } from 'src/app/Services/dataService/data.service';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.scss']
})
export class AddressViewComponent implements OnInit {
  isClicked=false;
  isContinued=false;
  isClickedHome=false;
  isClickedWork=false;
  isClickedOthers=false;
  editable=false;
  userAddress:any=[];
  items:any=[];
  @Input() isProfileComponent:any;
  constructor(
    private userService: UserService,
    private dataService: DataService,
    private addressService:AddressService,
  ) { }

  ngOnInit(): void {
    // receive address details from display-items component
    this.dataService.rcvaddrDetails.subscribe((response:any)=>{
      this.userAddress = response.data;
      if(this.userAddress != undefined){
        this.isClicked = true;
        this.isClickedHome=true;
        this.isContinued= true;
      }
    });
    // recieve books from display-items component
    this.dataService.rcvbook.subscribe((response:any)=>{
      this.items=response;
    });

    //trigger GetAddressOfHome on profile Component
    if(this.isProfileComponent){
      this.GetAddress('Home');
    }
  }

  GetAddress(typeOf:any){
    console.log(typeOf);
    if(typeOf === 'Home'){
      this.isClickedHome = true;
      this.isClickedWork = false;
      this.isClickedOthers = false;
    }
    else if(typeOf === 'Work'){
      this.isClickedHome = false;
      this.isClickedOthers = false;
      this.isClickedWork = true;
    }
    else{
      this.isClickedHome = false;
      this.isClickedWork = false;
      this.isClickedOthers = true;
    }
    this.addressService.GetAddress(typeOf).subscribe((response: any) => {
      this.userAddress= response.data;
      console.log(response)
    },
      (error:any) => {
        this.userService.openSnackBar(error.error.message);
      });
  }

  initialize(){
    
  }


  ContinueToCheckout(userAddress:any,books:any){
    if(userAddress != null && books != null){
      this.isContinued=false;
      this.dataService.sendaddrDetails2(userAddress);
      this.dataService.sendBooks2(books);
    } 
  }

}
