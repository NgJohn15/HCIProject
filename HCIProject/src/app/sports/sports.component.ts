import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  cart = GlobalConstants.cart_items;
  items = GlobalConstants.items;
  sports = new Map();

  constructor() { }

  ngOnInit(): void {
    for (let entry of this.items.entries()) {
      if (entry[1].dept == "sports") {
        this.sports.set(entry[0], entry[1]);
      }
    }
  }

  addItem(itemName: any) {
    console.log("added" + itemName.name);

    // add item to shopping list
    this.cart.push(itemName);
  }

}
