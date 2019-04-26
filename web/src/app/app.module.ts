import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CustomerComponent} from './customers/customer/customer.component'
import { CustomersComponent } from './customers/customers.component';
import { CustomerRowComponent } from './customers/customer-row/customer-row.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule } from '@angular/forms';
import { CustomersService } from './customers/customers.service';
import { CustomerSearchComponent } from './customer-search/customer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    CustomersComponent,
    CustomerRowComponent,
    NavbarComponent,
    CustomerSearchComponent,
    CustomerSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
