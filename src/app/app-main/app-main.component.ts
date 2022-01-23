import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  servicesProdvided: string[] = [
    'Civil Work',
    'Painting Work',
    'Carpenter Work',
    'Sliding Work',
    'Electric Work',
    'Water Proofing',
    'Restoration',
    'Tiles, Marble',
    'Plaster, Paris or Wall Putty',
    'Modular Bedroom',
    'Modular Kitchen',
    'Modular Bathroom',
    'False Ceiling',
    'Repairing',
    'Plumbing Work'
  ]
  ngOnInit(): void {
  }

}
