import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/global-constants';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = GlobalConstants.items;
  cart = GlobalConstants.cart_items;
  test1_start = GlobalConstants.test1_start;
  test1_end = GlobalConstants.test1_end;

  constructor() { }

  ngOnInit(): void {
  }

  startTest1() {
    let dateTime = new Date()
    console.log("Begining Test 1 " + dateTime);
    this.test1_start = dateTime;
  }

  startTest2() {
    let dateTime = new Date()
    console.log("Begining Test 2 " + dateTime);

    this.test1_end = dateTime;
  }

  startTest3() {
    let dateTime = new Date()
    console.log("Begining Test 3 " + dateTime);
  }

  startTest4() {
    let dateTime = new Date()
    console.log("Begining Test 4 " + dateTime);
  }

  getResults() {
    console.log(this.test1_start + " " + this.test1_end);
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Static Test Data',
      headers: ["Test Number", "Start Time", "End Time", "Duration (ms)"]
    }
    var data = [
      {
        testnum: 1,
        start: this.test1_start,
        end: this.test1_end,
        duration: this.test1_end.getTime() - this.test1_start.getTime()
      }
    ];

    new ngxCsv(data, "data", options)
  }

  addItem(itemName: any) {
    console.log("added" + itemName.name);

    // add item to shopping list
    this.cart.push(itemName);
  }

}
