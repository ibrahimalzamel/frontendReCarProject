import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';

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

}
