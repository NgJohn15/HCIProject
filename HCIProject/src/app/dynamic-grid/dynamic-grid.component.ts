import { Component, HostListener, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { GlobalConstants, StoreItem } from 'src/global-constants';

@Component({
  selector: 'dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.css']
})
export class DynamicGridComponent implements OnInit 
{
  storeItems: StoreItem[] = GlobalConstants.storeItems;

  mousePositionX: number = 0;
  mousePositionY: number = 0;
  cardMinSize: number = 200;
  cardMaxSize: number = 400;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) 
  {
    this.mousePositionX = event.clientX;
    this.mousePositionY = event.clientY
  }

  getCardSize(card: any): number
  {
    let cardX = card.offsetLeft + card.offsetWidth / 2;
    let cardY = card.offsetTop + card.offsetHeight / 2;
    let distance = Math.sqrt(Math.pow(this.mousePositionX - cardX, 2) + Math.pow(this.mousePositionY - cardY, 2));
    let size = this.lerp(this.cardMinSize, this.cardMaxSize, Math.max(0, 1 - distance / 400));
    return size;
  }

  lerp(a: number, b: number, t: number): number 
  {
    return a * (1 - t) + b * t;
  }
}
