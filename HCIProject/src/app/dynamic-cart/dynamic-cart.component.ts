import { Component, HostListener, Input, OnInit } from '@angular/core';
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

  constructor() { }

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
    //GlobalConstants.cartItems.splice(index, 1);
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
