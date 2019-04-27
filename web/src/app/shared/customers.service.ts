import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  formData : Customer;
  

  constructor(private firestore: AngularFirestore){}
  getCustomers(){
    return this.firestore.collection('customers').snapshotChanges();
  }

  updateCustomer(customer: Customer){
    this.firestore.doc('customers'+customer.id).update(customer);
  }

}
