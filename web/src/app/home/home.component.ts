import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer.model';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { CustomersService } from '../shared/customers.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


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
