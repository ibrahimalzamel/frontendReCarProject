import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
 
  CarDetails:CarDetail[] = [];
  Cars:Car[] = [];
  dataLoaded = false;
  filterText="";
  constructor(private CarDetailService : CarDetailService,
    private toastrService:ToastrService ,
    private activatedRoute:ActivatedRoute,  
     private cartService:CartService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorName"]){
        this.getCarDetailByColor(params["colorName"])
       }
       else if (params["brandName"]){
        this.getCarDetailByBrand(params["brandName"])
       }  

       else{
        this.getCarDetail();
      }
      })
    

  }

  getCarDetailByColor(colorName:string)
  {
    this.CarDetailService.GetCarsDetailByColorName(colorName).subscribe(response=>{
      this.CarDetails=response.data
      this.dataLoaded=true;})
  }
  getCarDetailByBrand(brandName:string){
    this.CarDetailService.GetCarsDetailByBrandName(brandName).subscribe(response=>{
      this.CarDetails=response.data
      this.dataLoaded=true;})

  }
  getCarDetail(){
     this.CarDetailService.getCarDetail().subscribe(response=>{
     this.CarDetails= response.data
     this.dataLoaded=true;
    })

  }

  addToCart(carDetail:CarDetail){
    this.toastrService.success("Sepete eklendi",carDetail.brandName)
    this.cartService.addToCart(carDetail);
  }
}
