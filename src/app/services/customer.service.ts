import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl='https://localhost:44319/api/';
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+"Customers/getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerById(customerId:number):Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+"Customers/getbyid?id="+customerId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerByUserId(userId:number):Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+"Customers/getbyuserid?id="+userId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomerDetails():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+"Customers/getcustomerdetails";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
