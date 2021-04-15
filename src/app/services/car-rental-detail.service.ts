import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarRentalDetail } from '../models/carRentalDetail';

@Injectable({
  providedIn: 'root'
})
export class CarRentalDetailService {

  apiUrl='https://localhost:44319/api/Rentals/getcarrentaldetails';
  constructor(private httpClient:HttpClient) { }

  getCarRentalDetails():Observable<ListResponseModel<CarRentalDetail>>{
    return this.httpClient.get<ListResponseModel<CarRentalDetail>>(this.apiUrl);
  }
}
