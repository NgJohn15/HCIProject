import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_items = GlobalConstants.cart_items;
  constructor() { }

  ngOnInit(): void {
  }

  removeItem(item: any) {
    // get index of item
    const index = this.cart_items.indexOf(item);

    // remove item
    if (index > -1) {
      this.cart_items.splice(index, 1); // 2nd parameter means remove one item only
    }

    // test2 condition
    if (GlobalConstants.test2_active && item.name == "Volleyball") {
      let dateTime = new Date();
      console.log("Completed Test 2");
      GlobalConstants.test2_active = false;
      GlobalConstants.test2_end = dateTime;
      GlobalConstants.test2_fin = true;
    }
  }
}
