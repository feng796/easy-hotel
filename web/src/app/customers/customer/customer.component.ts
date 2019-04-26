import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { CustomersService } from 'src/app/shared/customers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private service : CustomersService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: null,
      Name: '',
      Room: '',
    }
  }

}
