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

  constructor() { }

  ngOnInit(): void {
  }

}
