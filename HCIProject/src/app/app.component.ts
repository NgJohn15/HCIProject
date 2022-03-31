import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants } from 'src/global-constants';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { MatDialog } from '@angular/material/dialog';
import { Test3DialogComponent } from './test3-dialog/test3-dialog.component';
import { Test2DialogComponent } from './test2-dialog/test2-dialog.component';
import { Test1DialogComponent } from './test1-dialog/test1-dialog.component';
import { Test0DialogComponent } from './test0-dialog/test0-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'HCIProject';

  constructor(private router: Router, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  getRouterURL(): string
  {
    return this.router.url.slice(1);
  }

  getTest0_fin() {
    return GlobalConstants.test0_fin;
  }
  getTest1_fin() {
    return GlobalConstants.test1_fin;
  }
  getTest2_fin() {
    return GlobalConstants.test2_fin;
  }
  getTest3_fin() {
    return GlobalConstants.test3_fin;
  }

  getActiveTest0() {
    return GlobalConstants.test0_active;
  }
  getActiveTest1() {
    return GlobalConstants.test1_active;
  }
  getActiveTest2() {
    return GlobalConstants.test2_active;
  }
  getActiveTest3() {
    return GlobalConstants.test3_active;
  }

  getActiveTest() {
    return GlobalConstants.test0_active || GlobalConstants.test1_active || GlobalConstants.test2_active || GlobalConstants.test3_active;
  }

  test0() {
    GlobalConstants.test0_cart = true;
    if (GlobalConstants.test0_active) {
      GlobalConstants.test0_on_clicks += 1;
      GlobalConstants.test0_total_clicks += 1;
    }

    if (GlobalConstants.test2_active) {
      GlobalConstants.test2_on_clicks += 1;
      GlobalConstants.test2_total_clicks += 1;
    }
  }

  home_clicked() {
    // Test 0 Completion
    if (GlobalConstants.test0_cart && GlobalConstants.test0_active) {
      let dateTime = new Date();
      GlobalConstants.test0_end = dateTime;
      GlobalConstants.test0_fin = true;
      GlobalConstants.test0_active = false;

      GlobalConstants.test0_on_clicks += 1;
      GlobalConstants.test0_total_clicks += 1;
      this.snackBar.open("Test 0 Complete", "Dismiss", { duration: 1500});
    }

    // Test 1 Completion
    if (GlobalConstants.test1_active && GlobalConstants.test1_added)
    {
      console.log("TEST 1 Complete");
      let dateTime = new Date();
      GlobalConstants.test1_end = dateTime;
      GlobalConstants.test1_active = false;
      GlobalConstants.test1_fin = true;

      // update click count
      GlobalConstants.test1_on_clicks += 1;
      GlobalConstants.test1_total_clicks += 1;

      // Notify User
      this.snackBar.open("Test 1 Complete", "Dismiss", { duration: 1500});
    }

    // Test 2 Completion
    if (GlobalConstants.test2_active && GlobalConstants.test2_removed) {
      let dateTime = new Date();
      console.log("Completed Test 2");
      GlobalConstants.test2_active = false;
      GlobalConstants.test2_end = dateTime;
      GlobalConstants.test2_fin = true;

      GlobalConstants.test2_on_clicks += 1;
      GlobalConstants.test2_total_clicks += 1;

      this.snackBar.open("Test 2 Complete", "Dismiss", { duration: 1500});
    }

    // Test 3 Completion
    if (GlobalConstants.test3_active && GlobalConstants.test3_baseball && GlobalConstants.test3_computermouse && GlobalConstants.test3_hat && GlobalConstants.test3_children) {
        console.log("Completed Test 3");
        let dateTime = new Date();
        GlobalConstants.test3_active = false;
        GlobalConstants.test3_end = dateTime;
        GlobalConstants.test3_fin = true;
      
        GlobalConstants.test3_on_clicks += 1;
        GlobalConstants.test3_total_clicks += 1;

        this.snackBar.open("Test 3 Complete", "Dismiss", { duration: 1500});
    }
  }

  startTest0() {
    const dialogRef = this.dialog.open(Test0DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      let dateTime = new Date()
      console.log('Begining test 0: ' + dateTime);
      GlobalConstants.test0_active = true;
      GlobalConstants.test0_start = dateTime;

      // stop all other active tracks
      GlobalConstants.test1_active = false;
      GlobalConstants.test2_active = false;
      GlobalConstants.test3_active = false;
    });
  }

  startTest1() {
    const dialogRef = this.dialog.open(Test1DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      let dateTime = new Date()
      console.log('Begining test1: ' +dateTime);
      GlobalConstants.test1_active = true;
      GlobalConstants.test1_start = dateTime;

      // stop all other active tracks
      GlobalConstants.test0_active = false;
      GlobalConstants.test2_active = false;
      GlobalConstants.test3_active = false;
    });
  }

  startTest2() {
    // add volleyball item to cart if one doesn't already exist
    let temp = true;
    for (let item of GlobalConstants.cartItems) {
      if (item.name == "Volleyball") {
        temp = false;
      }
    }
    if (temp) {
      GlobalConstants.cartItems.push({name: "Volleyball", dept: "sports", description: "Standard issue volleyball for all ages."});
    }
    
    const dialogRef = this.dialog.open(Test2DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      let dateTime = new Date()
      console.log('Begining test2: ' + dateTime);
      GlobalConstants.test2_active = true;
      GlobalConstants.test2_start = dateTime;

      // stop all other active tracks
      GlobalConstants.test0_active = false;
      GlobalConstants.test1_active = false;
      GlobalConstants.test3_active = false;
    });
  }

  startTest3() {
    const dialogRef = this.dialog.open(Test3DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      let dateTime = new Date()
      console.log('Begining test3: ' + dateTime);
      GlobalConstants.test3_active = true;
      GlobalConstants.test3_start = dateTime;

      // stop all other active tracks
      GlobalConstants.test0_active = false;
      GlobalConstants.test1_active = false;
      GlobalConstants.test2_active = false;
    });
  }

  toggleDynamic(isDynamic: boolean) {
    GlobalConstants.isDynamic = !isDynamic;
  }

  getResultsReady() {
    return !(GlobalConstants.test0_fin && GlobalConstants.test1_fin && GlobalConstants.test2_fin && GlobalConstants.test3_fin);
  }

  getResults() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Static Test Data',
      headers: ["Test Number", "Start Time", "End Time", "Duration (ms)", "Total Clicks", "Accurate Clicks", "Click Accuracy", "isDynamic"]
    }
    var data = [
      {
        testnum: 0,
        start: GlobalConstants.test0_start,
        end: GlobalConstants.test0_end,
        duration: GlobalConstants.test0_end.getTime() - GlobalConstants.test0_start.getTime(),
        total_clicks: GlobalConstants.test0_total_clicks,
        on_clicks: GlobalConstants.test0_on_clicks,
        click_acc: GlobalConstants.test0_on_clicks/GlobalConstants.test0_total_clicks,
        isDynamic: GlobalConstants.isDynamic
      },
      {
        testnum: 1,
        start: GlobalConstants.test1_start,
        end: GlobalConstants.test1_end,
        duration: GlobalConstants.test1_end.getTime() - GlobalConstants.test1_start.getTime(),
        total_clicks: GlobalConstants.test1_total_clicks,
        on_clicks: GlobalConstants.test1_on_clicks,
        click_acc: GlobalConstants.test1_on_clicks/GlobalConstants.test1_total_clicks,
        isDynamic: GlobalConstants.isDynamic
      },
      {
        testnum: 2,
        start: GlobalConstants.test2_start,
        end: GlobalConstants.test2_end,
        duration: GlobalConstants.test2_end.getTime() - GlobalConstants.test2_start.getTime(),
        total_clicks: GlobalConstants.test2_total_clicks,
        on_clicks: GlobalConstants.test2_on_clicks,
        click_acc: GlobalConstants.test2_on_clicks/GlobalConstants.test2_total_clicks,
        isDynamic: GlobalConstants.isDynamic
      },
      {
        testnum: 3,
        start: GlobalConstants.test3_start,
        end: GlobalConstants.test3_end,
        duration: GlobalConstants.test3_end.getTime() - GlobalConstants.test3_start.getTime(),
        total_clicks: GlobalConstants.test3_total_clicks,
        on_clicks: GlobalConstants.test3_on_clicks,
        click_acc: GlobalConstants.test3_on_clicks/GlobalConstants.test3_total_clicks,
        isDynamic: GlobalConstants.isDynamic
      }
    ];

    new ngxCsv(data, "data", options)
  }
}