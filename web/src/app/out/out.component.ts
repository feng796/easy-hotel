import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../shared/customers.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Customer } from '../shared/customer.model';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css']
})
export class OutComponent implements OnInit {
  customer: Customer;
  Id: string;
  No: string;
  Name: string;
  Room: string;
  noteDoc : AngularFirestoreDocument<Customer>;

  constructor(private service: CustomersService,
    private afs:AngularFirestore,
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

  getCustomer(id: string){
    this.noteDoc = this.afs.doc('customers/' + id);
    
  }

}
