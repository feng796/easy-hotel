import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerRowComponent } from './customers/customer-row/customer-row.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { CustomersService } from './shared/customers.service';
import { CustomersComponent } from './customers/customers.component';
import { Customer } from './shared/customer.model';
import { ChangeComponent } from './customers/change/change.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OutComponent } from './out/out.component';
import { LeaveComponent } from './leave/leave.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    CustomersComponent,
    CustomerRowComponent,
    NavbarComponent,
    ChangeComponent,
    WelcomeComponent,
    OutComponent,
    LeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }