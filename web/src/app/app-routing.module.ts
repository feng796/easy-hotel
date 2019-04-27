import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OutComponent } from './out/out.component';
import { LeaveComponent } from './leave/leave.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'out', component:OutComponent},
  {path: 'leave',component:LeaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
