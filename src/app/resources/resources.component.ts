import { Component, ViewEncapsulation } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router} from '@angular/router';
import { VideoComponent } from '../video/video.component';
import { YTdet } from '../job-object';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ResourcesComponent {

  ytid: string= 'VCJ45dH0aOs';

  constructor(public dialog: MatDialog, public router: Router) {};

openDialog(){
    let dialogRef = this.dialog.open(VideoComponent, {
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
