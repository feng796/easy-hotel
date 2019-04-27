import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { CustomersService } from 'src/app/shared/customers.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  Customers$: Observable<Customer[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private Service: CustomersService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.Customers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.Service.searchcustomer(term)),
    );
  }
}
