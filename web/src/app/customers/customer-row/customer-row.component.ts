import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Customer } from 'src/app/shared/customer.model';
import { CustomersService } from 'src/app/shared/customers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-row',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.css']
})
export class CustomerRowComponent implements OnInit {
  list: Customer[];
  Id: string;
  Name: string;
  Room: string;

  constructor(private service: CustomersService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private readonly afs: AngularFirestore) {
  }

  ngOnInit() {
    this.service.getCustomers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Customer;
      })
    }
    );
  }

  onEdit(CUS: Customer) {
    this.service.formData = Object.assign({}, CUS);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('customers/' + id).delete();
    }
  }
  

}
