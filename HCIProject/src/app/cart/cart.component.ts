import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_items = GlobalConstants.cart_items;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  emptyClick() {
    console.log("empty click");
    if (GlobalConstants.test0_active) {
      console.log("empty click");
      GlobalConstants.test0_total_clicks += 1;
    }
    if (GlobalConstants.test1_active) {
      console.log("empty click");
      GlobalConstants.test1_total_clicks += 1;
    }
    if (GlobalConstants.test2_active) {
      console.log("empty click");
      GlobalConstants.test2_total_clicks += 1;
    }
    if (GlobalConstants.test3_active) {
      console.log("empty click");
      GlobalConstants.test3_total_clicks += 1;
    }
  }

  removeItem(item: any) {
    // get index of item
    const index = this.cart_items.indexOf(item);

    // remove item
    if (index > -1) {
      this.cart_items.splice(index, 1); // 2nd parameter means remove one item only
    }

    // test2 condition
    if (GlobalConstants.test2_active && item.name == "Volleyball") {
      let dateTime = new Date();
      console.log("Completed Test 2");
      GlobalConstants.test2_active = false;
      GlobalConstants.test2_end = dateTime;
      GlobalConstants.test2_fin = true;

      GlobalConstants.test2_on_clicks += 1;
      GlobalConstants.test2_total_clicks += 1;

      this.snackBar.open("Test 2 Complete", "Dismiss", { duration: 1500});
    }
  }
}
