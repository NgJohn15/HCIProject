import { Component, OnInit } from '@angular/core';
import { fadeInItems } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  cart = GlobalConstants.cart_items;
  items = GlobalConstants.items;
  books = new Map();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    for (let item of this.items.entries()) {
      if (item[1].dept == "books") {
        this.books.set(item[0], item[1]);
      }
    }
  }

  addItem(itemName: any) {
    console.log("added" + itemName.name);
    console.log(itemName);
    // add item to shopping list
    this.cart.push(itemName);

    // Test3 Condition
    if (this.containsAllItems()) {
      console.log("Completed Test 3");
      let dateTime = new Date();
      GlobalConstants.test3_active = false;
      GlobalConstants.test3_end = dateTime;
      GlobalConstants.test3_fin = true;

      this.snackBar.open("Test 3 Complete", "Dismiss", { duration: 1500});
    }
  }

  containsAllItems() {
    let baseballReq = false;
    let compMouseReq = false;
    let hatReq = false;
    let CBReq = false;

    for (let item of GlobalConstants.cart_items) {
      if (item.name == "Baseball") {
        baseballReq = true;
      }
      if (item.name == "Computer Mouse") {
        compMouseReq = true;
      }
      if (item.name == "hat") {
        hatReq = true;
      }
      if (item.name == "Children's Story Book") {
        CBReq = true;
      }
    }

    return baseballReq && compMouseReq && hatReq && CBReq;
  }
}
