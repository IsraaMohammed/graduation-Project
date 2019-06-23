import { Component, OnInit } from '@angular/core';
import {JobProfileService} from '../Services/job-profile.service'
import { jobProfile } from '../_Model/jobProfileCards';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  JobProfileService:JobProfileService;
  jobs: jobProfile[]=[];
  constructor(private _JobProfileService:JobProfileService) {
this.JobProfileService=_JobProfileService;
   }

  ngOnInit() {
    this.JobProfileService.getAllJobs()
    .then(res => {
      this.jobs = res.data;
      console.log(this.jobs);
    })
    .catch(err => console.log(err));
  }

}
