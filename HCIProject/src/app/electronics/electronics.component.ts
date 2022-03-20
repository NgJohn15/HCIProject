import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  cart = GlobalConstants.cart_items;
  items = GlobalConstants.items;
  electronics = new Map();
  constructor() { }

  ngOnInit(): void {
    for (let entry of this.items.entries()) {
      if (entry[1].dept == "electronics") {
        this.electronics.set(entry[0], entry[1]);
      }
    }
  }

  addItem(itemName: any) {
    console.log("added" + itemName.name);

    // add item to shopping list
    this.cart.push(itemName);
  }
}
