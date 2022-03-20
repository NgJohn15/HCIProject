import { Component, OnInit } from '@angular/core';
import { fadeInItems } from '@angular/material/menu';
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

  constructor() { }

  ngOnInit(): void {
    for (let item of this.items.entries()) {
      if (item[1].dept == "books") {
        this.books.set(item[0], item[1]);
      }
    }
  }

  addItem(itemName: any) {
    console.log("added" + itemName.name);

    // add item to shopping list
    this.cart.push(itemName);
  }
}
