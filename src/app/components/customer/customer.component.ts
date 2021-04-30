import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  Customers:Customer[]=[];
  currentCustomer : Customer;
  dataLoaded= false;
  
    constructor(private colorService:CustomerService) { }
  
    ngOnInit(): void {
      this.getCustomers();
    }
  
    getCustomers(){
     this.colorService.getCustomers().subscribe(response=>{
      this.Customers =response.data
      this.dataLoaded = true;
     })
   }
   


}
