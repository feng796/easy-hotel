import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { CustomersService } from 'src/app/shared/customers.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private service : CustomersService,
    private toastr: ToastrService,
    private location: Location) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Name: '',
      Room: '',
    }
  }

  onSubmit(form:NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.Post(form.value).subscribe(res =>{
      this.toastr.success('Inserted successfully','check in');
      this.resetForm(form);
    });
  }
}
