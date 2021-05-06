import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl='https://localhost:44319/api/';
  
  constructor(private httpClient:HttpClient) { }

  getCarDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"Cars/getCarsDetailDtos";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  GetCarsDetailByBrandName(brandName:string):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"Cars/getcarsdetailbybrandname?brandname="+brandName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  GetCarsDetailByColorName(colorName:string):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"Cars/getcarsdetailbycolorname?colorname="+colorName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
 
  
}
