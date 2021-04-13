import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarRentalDetailResponseModel } from '../models/carRentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarRentalDetailService {

  apiUrl='https://localhost:44366/api/Products/getall';
  constructor(private httpClient:HttpClient) { }

  getCarRentalDetails():Observable<CarRentalDetailResponseModel>{
    return this.httpClient.get<CarRentalDetailResponseModel>(this.apiUrl);
  }
}
