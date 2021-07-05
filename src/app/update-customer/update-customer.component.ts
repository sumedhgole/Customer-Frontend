import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id!: number;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data => {this.customer = data; console.log(data)},
    error => console.log(error));
  }

  onSubmit() {
    this.customerService.updateCustomer(this.customer).subscribe(data => {this.navigateToCustomers();},error => console.log(error));
  }

  navigateToCustomers() {
    this.router.navigate(['/customers']);
  }
  
}
