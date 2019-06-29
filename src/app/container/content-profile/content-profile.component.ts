import { Component, OnInit, Input } from '@angular/core';
import { jobProfile } from 'src/app/_Model/jobProfileCards';
import {JobProfileService} from '../../Services/job-profile.service';
import {ServecesService} from 'src/app/Services/serveces.service';
import { UserLoginService } from 'src/app/Services/user-login.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-content-profile',
  templateUrl: './content-profile.component.html',
  styleUrls: ['./content-profile.component.css']
})
export class ContentProfileComponent implements OnInit {
  data: jobProfile[]=[];
  loginservice: UserLoginService;
  @Input() flag:boolean=false;
 
  // jobObservable:Subscription;
  constructor(private jobProfileService:JobProfileService,private _loginservice:UserLoginService,private router:Router,private service:ServecesService) { 
    this.loginservice = _loginservice;
    
    
   }
   
  

  ngOnInit() {

    this.jobProfileService.getAllJobs()
    .then(res => {
      this.data = res.data;
      console.log(res.data);
      //this.service.selectedJobProfile=this.data;
      
    })
    .catch(err => console.log(err));
  
  }
  viewSelectedJobProfile(){
   // this.flag=true;
    console.log(this._loginservice.currentUserID);
    this.router.navigate(['/userjobprofiles']);
  }
 

}
