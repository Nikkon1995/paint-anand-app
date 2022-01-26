import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  displayServicesHeader = true;
  displayPrice: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.displayServicesHeader = true;
  }

  displayPrices() {
    this.displayPrice = true;
  }
  
  alertClosed() {
    this.displayPrice = false;
  }
}
