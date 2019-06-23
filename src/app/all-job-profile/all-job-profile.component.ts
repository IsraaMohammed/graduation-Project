import { Component, OnInit, Input } from '@angular/core';
import { user } from '../_Model/user';
import { JobProfileService } from '../Services/job-profile.service';
import { jobProfile } from '../_Model/jobProfileCards';


@Component({
  selector: 'app-all-job-profile',
  templateUrl: './all-job-profile.component.html',
  styleUrls: ['./all-job-profile.component.css']
})
export class AllJobProfileComponent implements OnInit {
  jobs: jobProfile[]=[];
  @Input() user:user;

  JobProfileService: JobProfileService;
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

