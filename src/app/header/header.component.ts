import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { AuthComponent } from '../auth/auth.component';

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
  dialogRef: MatDialogRef<any>;
  displayAlert = false;
  constructor(public matDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.displayServicesHeader = true;
    this.router.events.subscribe((events)=> {
      if(events instanceof NavigationStart) {
        if(events.url=='/home'){
          console.log(events.url)
          this.displayServicesHeader = true;
        }
      }
      else {
        this.displayServicesHeader = false;
      }
    })
  }


  displayPrices() {
    this.displayAlert = true;
    this.dialogRef = this.matDialog.open(AlertComponent, {
      width: '100vw',
      // height: '60vh',
    });

    this.dialogRef.afterClosed().subscribe(()=> {
      this.displayAlert = false;
    })
  }

  openLoginDialog() {
    this.dialogRef = this.matDialog.open(AuthComponent)
    this.dialogRef.afterClosed().subscribe((data)=> {
      console.log(data);
    })
  }
}
