import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  //HttpGet[getall , getbyid,getbrandname]
  //HttpPost[add,delete , update]
  apiUrlAll='https://localhost:44319/api/Brands/getall';
  apiUrlAdd='https://localhost:44319/api/Brands/add';
  apiUrlDelete='https://localhost:44319/api/Brands/delete';
  apiUrlUpdate='https://localhost:44319/api/Brands/update';
  
  constructor(private httpClient:HttpClient) { }

  getAllBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrlAll);
  }
  getByBrandId():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrlAll);
  } 
  getByBrandName():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrlAll);
  } 
  AddBrand():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrlAdd);
  } 
  DeleteBrand():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrlDelete);
  } 
  UpdateBrand():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrlUpdate);
  }
}
