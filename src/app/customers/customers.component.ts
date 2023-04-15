import { Component } from '@angular/core';
import { customers } from '../customersData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customers = customers;
  currentPage = 1;
  pageSize = 12;
  totalPages = Math.ceil(this.customers.length / this.pageSize);
  pages: number[] = [];

  get customersForCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.customers.slice(startIndex, endIndex);
  }

  constructor(private router: Router) {
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }
}

