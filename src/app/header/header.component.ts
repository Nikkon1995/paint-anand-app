import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public content = {
    heading: 'Dipika Space Home Studio',
    subHeading: 'Modern Design For Your Home'
  }
  displayPrice: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayPrices() {
    this.displayPrice = true;
  }
  
  alertClosed() {
    this.displayPrice = false;
  }
}
