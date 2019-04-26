import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {MessageService} from 'src/app/message.service';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Constent-Type':'application/jason'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  formData : Customer;
  

  
  readonly rootURL = 'https://localhost:5001/api/customer'
  list : Customer[];

  constructor(private http: HttpClient,
    private messageService: MessageService){}
  
  Post(formData: Customer){

    return this.http.post(this.rootURL, formData)
  }


  refreash(){
    this.http.get(this.rootURL).toPromise().then(res => this.list = res as Customer[]);
  }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.rootURL).pipe(
      tap(_=>this.log('fetched heroes')),
      catchError(this.handleError<Customer[]>('getCustomers',[]))
    );
  }
 
  getCustomer(Id: number):Observable<Customer>{
    const url = '${this.rootURL}/${Id}';
    return this.http.get<Customer>(url).pipe(
      tap(_=>this.log('fetched customer Id=${Id}')),
      catchError(this.handleError<Customer>('getCustomer id=${Id}'))
    );
  }

  searchcustomer(term: string): Observable<Customer[]>{
   if(!term.trim()){
     return of([]);
   }
   return this.http.get<Customer[]>('${this.rootURL}/?Name=${term}').pipe(
     tap(_=>this.log('found customers matching "${term}"')),
     catchError(this.handleError<Customer[]>('searchCustomers',[]))
   );
  }


  private handleError<T> (operation = 'operation', result?:T){
    return (error:any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  private log(message: string){
    this.messageService.add('CustomersService:${message}');
  }


}
