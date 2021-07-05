import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = "http://localhost:8080/customers/";

  constructor(private httpClient: HttpClient) { }

  getCustomerList(): Observable<Customer[]> {

    return this.httpClient.get<Customer[]>(`${this.baseURL}`+'getAll');
  }

  createCustomer(customer: Customer) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'save', customer);
 }
  
 getCustomerById(id: number) : Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}`+`/getById/${id}`);
 }

 
 updateCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}`+`/update`,customer);
 }

 deleteCustomer(id: number): Observable<Object> {
   return this.httpClient.delete(`${this.baseURL}/delete/${id}`)
 }
}
