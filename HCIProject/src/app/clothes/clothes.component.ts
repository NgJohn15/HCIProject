import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  cart = GlobalConstants.cart_items;
  items = GlobalConstants.items;
  clothes = new Map();
  constructor() { }

  ngOnInit(): void {
    for (let entry of this.items.entries()) {
      if (entry[1].dept == "clothes") {
        this.clothes.set(entry[0], entry[1]);
      }
    }
  }

  addItem(itemName: any) {
    console.log("added" + itemName.name);

    // add item to shopping list
    this.cart.push(itemName);
  }
}
