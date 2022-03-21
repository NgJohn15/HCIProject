import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  getRouterURL(): string
  {
    return this.router.url.slice(1);
  }

  test0() {
    GlobalConstants.test0_cart = true;
    if (GlobalConstants.test0_active) {
      GlobalConstants.test0_on_clicks += 1;
      GlobalConstants.test0_total_clicks += 1;
    }

    if (GlobalConstants.test2_active) {
      GlobalConstants.test2_on_clicks += 1;
      GlobalConstants.test2_total_clicks += 1;
    }
  }

  test0_fin() {
    if (GlobalConstants.test0_cart && GlobalConstants.test0_active) {
      let dateTime = new Date();
      GlobalConstants.test0_end = dateTime;
      GlobalConstants.test0_fin = true;
      GlobalConstants.test0_active = false;

      GlobalConstants.test0_on_clicks += 1;
      GlobalConstants.test0_total_clicks += 1;

      this.snackBar.open("Test 0 Complete", "Dismiss", { duration: 1500});
    }
  }
}
