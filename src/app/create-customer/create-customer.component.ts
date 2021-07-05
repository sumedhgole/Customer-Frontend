import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  customerError!: Customer;
  addForm!: NgForm;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("inside onsubmit method");
    this.saveCustomer(this.addForm);
  }
  
  saveCustomer(addForm: NgForm) {
    this.customerService.createCustomer(this.customer).subscribe(data => {console.log(data);this.navigateToCustomers();},
    error => {
      this.customerError = error.error;
      console.log(error);
    });
    
  }

  navigateToCustomers() {
    this.router.navigate(['/customers']);
  }

}
