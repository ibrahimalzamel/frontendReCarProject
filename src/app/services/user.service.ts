import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://localhost:44319/api/';
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl+"Users/getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getById(userId:number):Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl+"Users/getbyid?id="+userId;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getByUserName(userName:string):Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl+"Users/getbyusername?name="+userName;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getByUserLastName(lastName:string):Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl+"Users/getbylastname"+lastName;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
}
