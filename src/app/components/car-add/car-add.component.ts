import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm : FormGroup ;
  constructor(private formBulider:FormBuilder,
    private carService : CarService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm(){
    this.carAddForm=this.formBulider.group({
      carName :["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYaer:["",Validators.required],
      fuelName:["",Validators.required],
      dailyPrice:["",Validators.required],
      descriptio : ["",Validators.required],
    })
  }

  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı")
      },responsError=>{
        if(responsError.error.Errors.length>0){
          for (let i = 0; i < responsError.error.Errors.length; i++) {
            this.toastrService.error(responsError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
         
        }
        
      })
    }else{
      this.toastrService.error("Formunuz","DİKKAT")
    }
  }
}
