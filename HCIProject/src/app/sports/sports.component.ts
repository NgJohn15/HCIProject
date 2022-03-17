import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/global-constants';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  items = GlobalConstants.items;

  constructor() { }

  ngOnInit(): void {
  }

}
