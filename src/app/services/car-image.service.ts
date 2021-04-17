import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl='https://localhost:44319/api/';
  constructor(private httpClient:HttpClient) { }
  
  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"CarImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"CarImages/getImagesByCarId?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  
}
