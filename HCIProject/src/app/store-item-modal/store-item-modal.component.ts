import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalConstants, StoreItem } from 'src/global-constants';

@Component({
  selector: 'app-store-item-modal',
  templateUrl: './store-item-modal.component.html',
  styleUrls: ['./store-item-modal.component.css']
})
export class StoreItemModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<StoreItemModalComponent>, @Inject(MAT_DIALOG_DATA) public data: StoreItem) { }

  ngOnInit(): void {
  }

  close(): void
  {
    this.dialogRef.close();
  }

  addToCart(): void
  {
    GlobalConstants.cartItems.push(this.data);
    this.dialogRef.close();
  }
}
