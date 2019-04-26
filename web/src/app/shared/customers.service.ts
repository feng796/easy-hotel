import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  formData : Customer;
  

  constructor(){}
  

}
