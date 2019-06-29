import { Component, OnInit, Input } from '@angular/core';
import { user } from '../_Model/user';
import { JobProfileService } from '../Services/job-profile.service';
import { jobProfile } from '../_Model/jobProfileCards';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-all-job-profile',
  templateUrl: './all-job-profile.component.html',
  styleUrls: ['./all-job-profile.component.css']
})
export class AllJobProfileComponent implements OnInit {
  jobs: jobProfile[]=[];
  job:jobProfile;
  @Input() user:user;
  formGroup: FormGroup;
  JobProfileService: JobProfileService;
  constructor(private _JobProfileService:JobProfileService,  private modalService: NgbModal) { 
    this.JobProfileService=_JobProfileService;
    
  }
  ngOnInit() {
    this.formGroup = new FormGroup({
      Name: new FormControl('',[Validators.required]),
      Desc:  new FormControl('', [Validators.required])
    });
   
   
    this.JobProfileService.getAllJobs()
    .then(res => {
      this.jobs = res.data;
      console.log(this.jobs);
    })
    .catch(err => console.log(err));
  }
  resetform(form?: NgForm) {
    if (form != null)
      form.reset();
    this.job = {

      name: '',
      description: ''
    
    }
  }
  onSubmit(form?:NgForm,modal?:any)
  {
    this.JobProfileService.AddJobProfile(form.value).subscribe((data: any) => 
    {
     console.log(data);
     if (data != null)
       {
        modal.close();
        this.resetform(form);
      }
    },error => {console.log(error)}
    );
  }
  open(content) {
    this.modalService.open(content);
  }
  removeJobProfile(JobProfilId: number)
  {
 
  this.JobProfileService.deletetJobProfile(JobProfilId).subscribe(data=>{
    console.log(data);
    let index = this.jobs.findIndex(el=>el.id===JobProfilId);
    this.jobs.splice(index,1);

  });
 

 }
}

