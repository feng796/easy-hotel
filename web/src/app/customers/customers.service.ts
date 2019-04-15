import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';
import {Customer} from './customers/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersUri = 'https://localhost:5001/api/customers';
  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(`${operation} failed : ${error.message}`);
      return of (result as T);
    };
  }
  constructor(private http: HttpClient){}
  getCustomers(){
    return this.http.get<Customer[]>(this.customersUri).pipe(
      tap(_=> console.log('fetched customers')),
      catchError(this.handleError<Customer[]>('getCustomers',[]))
    );
  }
}
