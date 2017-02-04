import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab-speed-dial',
  templateUrl: './fab-speed-dial.component.html',
  styleUrls: ['./fab-speed-dial.component.css']
})
export class FabSpeedDialComponent implements OnInit {

  constructor() { }
  isDialItemOpen = false;

  ngOnInit() {
  }
  openDialItem() {
    this.isDialItemOpen = !this.isDialItemOpen;
  }
}
