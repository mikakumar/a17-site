import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
import { Router, NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, public router: Router) {};

  isHome: boolean = false;
  openDialog(){
  let dialogRef = this.dialog.open(LoginPopupComponent, {
    height: '70vh',
    width: '35vw'
  });
  this.router.events
 .subscribe(() => {
   dialogRef.close();
 });
  dialogRef.afterClosed().subscribe(result=>{
    console.log(`Submitted: ${result}`);
  })

  }

}
