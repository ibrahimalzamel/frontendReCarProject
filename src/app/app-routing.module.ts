import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [

  {path:"",pathMatch:"full",component:CarComponent},
  {path:"CarDetail",pathMatch:"full",component:CarDetailComponent},
  {path:"Brand",pathMatch:"full",component:BrandComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
