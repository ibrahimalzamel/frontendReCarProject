import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='https://localhost:44319/api/';
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"Rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getCarRentalDetails():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"Rentals/getcarrentaldetails";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalById(rentalId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"Rentals/getbyid?id="+rentalId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"Rentals/getbycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  
  getRentalByCustomerId(customerId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl+"Rentals/getbycustomerid?id="+customerId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
 


}
