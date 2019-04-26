import { Component, OnInit, Input } from '@angular/core';
import {CustomersService} from 'src/app/shared/customers.service';
import { Customer } from 'src/app/shared/customer.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-customer-row',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.css']
})
export class CustomerRowComponent implements OnInit {
  allCustomer:Observable<Customer[]>;

constructor(private service :CustomersService){}
  ngOnInit() {
    this.service.refreash();
  }

  

  

  popilateForm(cus : Customer){
    
  }

}
