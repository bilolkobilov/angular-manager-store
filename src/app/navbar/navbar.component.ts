import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentRoute: string;
  linkClicked: boolean = false;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = val.url;
      }
    });
  }

  onClick(route: string) {
    this.currentRoute = route;
    this.linkClicked = true;
  }
}

