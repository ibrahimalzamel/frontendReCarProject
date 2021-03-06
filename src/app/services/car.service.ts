import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CarDetailComponent } from '../components/car-detail/car-detail.component';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44319/api/';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"Cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"Cars/getbyid?id="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"Cars/getbycolorid?id="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"Cars/getbybrandid?id="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

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
 

  getCarByDailyPrice(min:number,max:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"Cars/getByDailyPrice?min="+min+"max="+max;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)

  }
}

