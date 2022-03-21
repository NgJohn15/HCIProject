import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalConstants, StoreItem } from 'src/global-constants';
import { StoreItemModalComponent } from '../store-item-modal/store-item-modal.component';

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
  scrollPosition: number = 0;
  cardMinSize: number = 200;
  cardMaxSize: number = 400;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) 
  {
    this.mousePositionX = event.clientX;
    this.mousePositionY = event.clientY;
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: any)
  {
    this.scrollPosition = window.scrollY;
  }

  getCardSize(card: any): number
  {
    let cardX = card.offsetLeft + card.offsetWidth / 2;
    let cardY = card.offsetTop + card.offsetHeight / 2;
    let distance = Math.sqrt(Math.pow(this.mousePositionX - cardX, 2) + Math.pow(this.mousePositionY + this.scrollPosition - cardY, 2));
    let size = this.lerp(this.cardMinSize, this.cardMaxSize, Math.max(0, 1 - distance / 600));
    return size;
  }

  lerp(a: number, b: number, t: number): number 
  {
    return a * (1 - t) + b * t;
  }

  openItem(item: StoreItem): void
  {
    let dialogRef = this.dialog.open(StoreItemModalComponent, {
      height: '400px',
      width: '600px',
      data: item
    });
  }

  getRouterURL(): string
  {
    console.log(this.router.url);
    return this.router.url.slice(1);
  }
}
