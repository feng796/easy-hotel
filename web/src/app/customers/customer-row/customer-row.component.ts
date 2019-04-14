import { Component, OnInit, Input } from '@angular/core';
import {Customer} from '../customers/customer';

@Component({
  selector: 'app-customer-row',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.css']
})
export class CustomerRowComponent implements OnInit {

  @Input() customer:any;

  ngOnInit() {
  }

}
