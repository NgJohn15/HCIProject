import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'HCIProject';
  cartCount = GlobalConstants.count;

  constructor(private router: Router) { }

  getRouterURL(): string
  {
    return this.router.url.slice(1);
  }
}
