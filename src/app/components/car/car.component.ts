import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
 
  Cars:Car[] = [];
  dataLoaded = false;
  filterText = "";
  constructor(private carService:CarService , 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
       }
       if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
       }  
       if(params["Id"]){
        this.getCarsByBrand(params["Id"])
       }else{
        this.getCars();
      }
      })

  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
     this.Cars=response.data
     this.dataLoaded=true;
    })

  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
     this.Cars=response.data
     this.dataLoaded=true;
    })

  }
  getCarsById(Id:number){
    this.carService.getCarById(Id).subscribe(response=>{
     this.Cars=response.data
     this.dataLoaded=true;
    })

  }
   getCarsByBrand(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
     this.Cars=response.data
     this.dataLoaded=true;
    })

  }

  addToCart(car:Car){
   this.toastrService.success("Sepete eklendi",car.descriptio)
  }
}
