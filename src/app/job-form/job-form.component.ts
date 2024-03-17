import { Component, OnInit } from '@angular/core';
import { countries } from '../country_data';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent {

  pays = countries;


  url:String="";

  onselectFile(e){
    if(e.target.files){
      var read_file = new FileReader();
      read_file.readAsDataURL(e.target.files[0]);
      read_file.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

}
