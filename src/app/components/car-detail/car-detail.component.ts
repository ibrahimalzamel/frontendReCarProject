import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
 
  CarDetails:CarDetail[] = [];
  dataLoaded = false;
  constructor(private CarDetailService : CarDetailService) {}

  ngOnInit(): void {
    this.getCarDetail();
  }
  getCarDetail(){
     this.CarDetailService.getCarDetail().subscribe(response=>{
     this.CarDetails= response.data
     this.dataLoaded=true;
    })

  }
}
