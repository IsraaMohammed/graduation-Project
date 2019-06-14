import { Component, OnInit, Input } from '@angular/core';
import { jobProfile } from 'src/app/_Model/jobProfileCards';
import { JobProfileService } from 'src/app/Services/job-profile.service';
import {ServecesService} from 'src/app/Services/serveces.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
 
 @Input() item:jobProfile;
 @Input() Data:any;

  constructor(private jobProfile:JobProfileService,private ServecesService:ServecesService) {

  }

  ngOnInit() {
  }

  clickedview(id:number){
    this.ServecesService.getById(id).subscribe((data:any)=>{
     this.Data=data;
      console.log(data[0]);
    })
//  alert(id)
   
  }

} 
