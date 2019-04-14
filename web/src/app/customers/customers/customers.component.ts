import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  customers: Customer[] = [
    {
      Id: 126,
      Name: 'peach',
      Room: 'Suite'
    },
    {
      Id: 127,
      Name: 'orange',
      Room: 'King'
    }
  ];
}
