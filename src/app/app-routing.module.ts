import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [

  {path:"",pathMatch:"full",component:BrandComponent},
  {path:"products",component:BrandComponent},
  {path:"category/:categoryId",component:BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
