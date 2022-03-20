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

    // add volleyball item to cart if one doesn't already exist
    let temp = true;
    for (let item of GlobalConstants.cart_items) {
      if (item.name == "Volleyball") {
        temp = false;
      }
    }
    if (temp) {
      GlobalConstants.cart_items.push({name: "Volleyball", dept: "sports", description: "Standard issue volleyball for all ages."});
    }
    
    const dialogRef = this.dialog.open(Test2Diaglog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Begining test2: ' + dateTime);
      GlobalConstants.test2_active = true;
      GlobalConstants.test2_start = dateTime;
    });
  }

  startTest3() {
    let dateTime = new Date()
    console.log("Begining Test 3 " + dateTime);

    const dialogRef = this.dialog.open(Test3Diaglog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Begining test3: ' + dateTime);
      GlobalConstants.test3_active = true;
      GlobalConstants.test3_start = dateTime;
    });
  }

  startTest4() {
    let dateTime = new Date()
    console.log("Begining Test 4 " + dateTime);

    const dialogRef = this.dialog.open(Test4Diaglog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Begining test4: ' + dateTime);
      GlobalConstants.test4_active = true;
      GlobalConstants.test4_start = dateTime;
    });
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
      },
      {
        testnum: 2,
        start: GlobalConstants.test2_start,
        end: GlobalConstants.test2_end,
        duration: GlobalConstants.test2_end.getTime() - GlobalConstants.test2_start.getTime()
      },
      {
        testnum: 3,
        start: GlobalConstants.test3_start,
        end: GlobalConstants.test3_end,
        duration: GlobalConstants.test3_end.getTime() - GlobalConstants.test3_start.getTime()
      },
      // {
      //   testnum: 4,
      //   start: GlobalConstants.test4_start,
      //   end: GlobalConstants.test4_end,
      //   duration: GlobalConstants.test4_end.getTime() - GlobalConstants.test3_start.getTime()
      // }
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

@Component({
  selector: 'test2-dialog',
  templateUrl: 'test2-dialog.html',
})
export class Test2Diaglog {}

@Component({
  selector: 'test3-dialog',
  templateUrl: 'test3-dialog.html',
})
export class Test3Diaglog {}

@Component({
  selector: 'test4-dialog',
  templateUrl: 'test4-dialog.html',
})
export class Test4Diaglog {}
