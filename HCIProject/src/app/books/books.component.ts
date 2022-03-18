import { Component, OnInit } from '@angular/core';
import { fadeInItems } from '@angular/material/menu';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

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
}
