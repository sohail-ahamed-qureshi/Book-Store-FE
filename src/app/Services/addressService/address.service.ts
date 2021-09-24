import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private HttpService: HttpService) { }

  GetAddressOfHome(typeOf:any){
    return this.HttpService.GetAddressOfHome('Address/'+typeOf);
  }
}
