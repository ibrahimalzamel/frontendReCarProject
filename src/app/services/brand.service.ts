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
  apiUrl='https://localhost:44319/api/';
  constructor(private httpClient:HttpClient) { }

  getAllBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"Brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  getByBrandId(brandId:number):Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"Brands/getbyid?id="+brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  } 
  getByBrandName(brandName:string):Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"Brands/getbrandname?name="+brandName;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  } 
  
  AddBrand():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"Brands/add";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  } 
  DeleteBrand():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"Brands/delete";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  } 
  UpdateBrand():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"Brands/update";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
