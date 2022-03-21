import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  cart = GlobalConstants.cart_items;
  sports = new Map();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    for (let entry of GlobalConstants.items.entries()) {
      if (entry[1].dept == "sports") {
        this.sports.set(entry[0], entry[1]);
      }
    }
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

  addItem(itemName: any) {
    console.log("added " + itemName.name);

    // add item to shopping list
    this.cart.push(itemName);

    // test 1 complete condition
    if (GlobalConstants.test1_active && itemName.name == "Volleyball")
    {
      console.log("TEST 1 Complete");
      let dateTime = new Date();
      GlobalConstants.test1_end = dateTime;
      GlobalConstants.test1_active = false;
      GlobalConstants.test1_fin = true;

      // Notify User
      this.snackBar.open("Test 1 Complete", "Dismiss", { duration: 1500});
    }
  }

}
