import { Component } from '@angular/core';
import { customers } from '../customersData';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customers= customers
}
