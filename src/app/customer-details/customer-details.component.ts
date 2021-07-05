import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer!: Customer;
  

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const customerIdRoute = Number(routeParams.get('id'));

    this.customerService.getCustomerById(customerIdRoute).subscribe(data => {this.customer = data; console.log(data)},
    error => console.log(error));
  }

}
