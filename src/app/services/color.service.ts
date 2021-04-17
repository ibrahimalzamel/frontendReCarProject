import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/Color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl='https://localhost:44319/api/';

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"Colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  getColorById(colorId:number):Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"Colors/getbyid?id="+colorId;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  getColorByName(colorName:string):Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"Colors/getbycolorname?name="+colorName;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}