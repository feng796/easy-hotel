import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { CustomersService } from 'src/app/shared/customers.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private service: CustomersService,
    private firestore:AngularFirestore,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      No: '',
      Name: '',
      Room: '',
    }
  }

  onSubmit(form:NgForm){
    let data = form.value;
    delete data.id;
    if(form.value.id == null)
      this.firestore.collection('customers').add(data);
    else
      this.firestore.doc('customers/'+form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Check-In successfully');
  }

  update(customer: Customer){
    this.service.updateCustomer(customer);
  }

}
