import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car1 = { carId: 1, carName: 'BMV', colorId: 2, unitPrice: 5000 };
  car2 = { carId: 2, carName: 'BMV', colorId: 4, unitPrice: 25000 };
  car3 = { carId: 3, carName: 'BMV', colorId: 6, unitPrice: 110000 };
  car4 = { carId: 4, carName: 'BMV', colorId: 3, unitPrice: 78000 };
  cars = [this.car1, this.car2, this.car3, this.car4];
  constructor() {}

  ngOnInit(): void {
    
  }
}
