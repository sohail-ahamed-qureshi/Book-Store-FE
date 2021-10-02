import { HttpService } from './../httpService/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private HttpService: HttpService) { }

  GetAddress(typeOf:any){
    return this.HttpService.GetAddress('Address/'+typeOf);
  }

}
