import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants, StoreItem } from 'src/global-constants';

@Component({
  selector: 'dynamic-cart',
  templateUrl: './dynamic-cart.component.html',
  styleUrls: ['./dynamic-cart.component.css']
})
export class DynamicCartComponent 
{
  @Input() enableDynamic: boolean = false;

  cartItems: StoreItem[] = GlobalConstants.cartItems;
  mousePositionY: number = 0;
  scrollPosition: number = 0;
  cardMinHeight: number = 75;
  cardMaxHeight: number = 200;

  constructor(private snackBar: MatSnackBar) { }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) 
  {
    this.mousePositionY = event.clientY;
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: any)
  {
    this.scrollPosition = window.scrollY;
  }

  removeItem(item: StoreItem)
  {
    let index = this.cartItems.indexOf(item);
    this.cartItems.splice(index, 1);

    // test2 condition
    if (GlobalConstants.test2_active && item.name == "Volleyball") {
      GlobalConstants.test2_removed = true;
      GlobalConstants.test2_on_clicks += 1;
      GlobalConstants.test2_total_clicks += 1;
    }

    // Handle active tests misclicks
    if (GlobalConstants.test0_active) {
      GlobalConstants.test0_total_clicks += 1;
    }
    if (GlobalConstants.test1_active) {
      GlobalConstants.test1_total_clicks += 1;
    }
    if (GlobalConstants.test3_active) {
      GlobalConstants.test3_total_clicks += 1;
    }
  }

  getCardHeight(card: any): number
  {
    if (this.enableDynamic)
    {
      let distance = Math.abs(this.mousePositionY - (card.offsetTop + card.offsetHeight / 2));
      let size = this.lerp(this.cardMinHeight, this.cardMaxHeight, Math.max(0, 1 - distance / 125));
      return size;
    }
    return this.cardMinHeight;
  }

  lerp(a: number, b: number, t: number): number 
  {
    return a * (1 - t) + b * t;
  }
}
