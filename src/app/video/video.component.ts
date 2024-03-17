import { Component, Input, Inject, inject } from '@angular/core';
import { YoutubeServiceService } from '../youtube-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YTdet } from '../job-object';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

  constructor() {}
  @Input({required:true})
  ytid!:string;
  apiLoaded = inject(YoutubeServiceService).apiLoaded;

}
