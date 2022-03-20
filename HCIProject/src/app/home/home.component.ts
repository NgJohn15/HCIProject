import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/global-constants';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = GlobalConstants.items;
  cart = GlobalConstants.cart_items;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  startTest1() {
    let dateTime = new Date()
    console.log("Begining Test 1 " + dateTime);

    const dialogRef = this.dialog.open(Test1Diaglog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Begining test1: ' +dateTime);
      GlobalConstants.test1_active = true;
      GlobalConstants.test1_start = dateTime;
    });

    
  }

  startTest2() {
    let dateTime = new Date()
    console.log("Begining Test 2 " + dateTime);
    GlobalConstants.test2_active = true;
    GlobalConstants.test2_start = dateTime;
  }

  startTest3() {
    let dateTime = new Date()
    console.log("Begining Test 3 " + dateTime);
    GlobalConstants.test3_active = true;
    GlobalConstants.test3_start = dateTime;
  }

  startTest4() {
    let dateTime = new Date()
    console.log("Begining Test 4 " + dateTime);
    GlobalConstants.test4_active = true;
    GlobalConstants.test4_start = dateTime;
  }

  getResults() {
    console.log(GlobalConstants.test1_start + " " + GlobalConstants.test1_end);
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
        start: GlobalConstants.test1_start,
        end: GlobalConstants.test1_end,
        duration: GlobalConstants.test1_end.getTime() - GlobalConstants.test1_start.getTime()
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

@Component({
  selector: 'test1-dialog',
  templateUrl: 'test1-dialog.html',
})
export class Test1Diaglog {}
