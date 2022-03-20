import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HCIProject';
  cartCount = GlobalConstants.count;
  constructor(private snackBar: MatSnackBar) {
  }

  test0() {
    GlobalConstants.test0_cart = true;
  }

  test0_fin() {
    if (GlobalConstants.test0_cart && GlobalConstants.test0_active) {
      let dateTime = new Date();
      GlobalConstants.test0_end = dateTime;
      GlobalConstants.test0_fin = true;
      GlobalConstants.test0_active = false;

      this.snackBar.open("Test 0 Complete", "Dismiss", { duration: 1500});
    }
  }
}
