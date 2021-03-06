import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants, StoreItem } from 'src/global-constants';

@Component({
  selector: 'app-store-item-modal',
  templateUrl: './store-item-modal.component.html',
  styleUrls: ['./store-item-modal.component.css']
})
export class StoreItemModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<StoreItemModalComponent>, @Inject(MAT_DIALOG_DATA) public data: StoreItem, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  close(): void
  {
    this.dialogRef.close();
  }

  // containsAllItems() {
  //   let baseballReq = false;
  //   let compMouseReq = false;
  //   let hatReq = false;
  //   let CBReq = false;

  //   for (let item of GlobalConstants.cartItems) {
  //     if (item.name == "Baseball") {
  //       baseballReq = true;
  //     }
  //     if (item.name == "Computer Mouse") {
  //       compMouseReq = true;
  //     }
  //     if (item.name == "hat") {
  //       hatReq = true;
  //     }
  //     if (item.name == "Children's Story Book") {
  //       CBReq = true;
  //     }
  //   }

  //   return baseballReq && compMouseReq && hatReq && CBReq;
  // }

  addToCart(): void
  {
    GlobalConstants.cartItems.push(this.data);


    // test 1 complete condition
    if (GlobalConstants.test1_active && this.data.name == "Volleyball")
    {
      GlobalConstants.test1_added = true;

      // update click count
      GlobalConstants.test1_on_clicks += 1;
      GlobalConstants.test1_total_clicks += 1;
    }

    // Test2 Condition
    if (GlobalConstants.test2_active) {
      GlobalConstants.test2_on_clicks += 1;
      GlobalConstants.test2_total_clicks += 1;
    }
    // Test3 Condition
    if (GlobalConstants.test3_active) {
      if (this.data.name == "Baseball") {
        GlobalConstants.test3_baseball = true;
        GlobalConstants.test3_on_clicks += 1;
        GlobalConstants.test3_total_clicks += 1;
      }
      if (this.data.name == "Computer Mouse") {
        GlobalConstants.test3_computermouse = true;
        GlobalConstants.test3_on_clicks += 1;
        GlobalConstants.test3_total_clicks += 1;
      }
      if (this.data.name == "hat") {
        GlobalConstants.test3_hat = true;
        GlobalConstants.test3_on_clicks += 1;
        GlobalConstants.test3_total_clicks += 1;
      }
      if (this.data.name == "Children's Story Book") {
        GlobalConstants.test3_children = true;
        GlobalConstants.test3_on_clicks += 1;
        GlobalConstants.test3_total_clicks += 1;
      }
    }

    this.dialogRef.close();
  }
}
