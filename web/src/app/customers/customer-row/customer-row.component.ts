import { Component, OnInit, Input } from '@angular/core';
import {CustomersService} from 'src/app/shared/customers.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-row',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.css']
})
export class CustomerRowComponent implements OnInit {

  @Input() customer:any;

  ngOnInit() {
  }

}
