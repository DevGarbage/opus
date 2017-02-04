import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-back-link-header',
  templateUrl: './back-link-header.component.html',
  styleUrls: ['./back-link-header.component.css']
})
export class BackLinkHeaderComponent implements OnInit {

  constructor() { }

  @Output() backClick = new EventEmitter();

  ngOnInit() {
  }

  onBackClick() {
    this.backClick.emit();
  }

}
