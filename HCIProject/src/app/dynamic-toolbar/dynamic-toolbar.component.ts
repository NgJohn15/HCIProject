import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'dynamic-toolbar',
  templateUrl: './dynamic-toolbar.component.html',
  styleUrls: ['./dynamic-toolbar.component.css']
})
export class DynamicToolbarComponent implements OnInit 
{
  buttons: ToolbarButton[] = [
    {routerLink: "", text: "All"},
    {routerLink: "sports", text: "Sports"},
    {routerLink: "electronics", text: "Electronics"},
    {routerLink: "clothes", text: "Clothes"},
    {routerLink: "books", text: "Books"}
  ]
  mousePositionX: number = 0;
  buttonMinWidth: number = 100;
  buttonMaxWidth: number = 200;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) 
  {
    console.log(event.clientX, event.clientY);
    this.mousePositionX = event.clientX;
  }

  getButtonWidth(button: MatButton): number
  {
    let distance = Math.abs(this.mousePositionX - (button._elementRef.nativeElement.offsetLeft + button._elementRef.nativeElement.offsetWidth / 2));
    let size = this.lerp(this.buttonMinWidth, this.buttonMaxWidth, Math.max(0, 1 - distance / 200));
    return size;
  }

  lerp(a: number, b: number, t: number): number 
  {
    return a * (1 - t) + b * t;
  }
}

interface ToolbarButton
{
  routerLink: string;
  text: string;
}
