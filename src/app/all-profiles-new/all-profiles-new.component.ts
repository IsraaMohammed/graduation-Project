import { Component, OnInit,Input } from '@angular/core';
import {ServecesService} from 'src/app/Services/serveces.service';
import { jobProfile } from '../_Model/jobProfileCards';
import {UserLoginService} from 'src/app/Services/user-login.service';
import { from } from 'rxjs';
import { userJobProfile } from '../_Model/userJobProfile';
@Component({
  selector: 'app-all-profiles-new',
  templateUrl: './all-profiles-new.component.html',
  styleUrls: ['./all-profiles-new.component.css']
})
export class AllProfilesNewComponent implements OnInit {

  constructor(private service:ServecesService,private user:UserLoginService) { }
  @Input() item: jobProfile;
  userID:number=this.user.currentUserID
  ngOnInit() {
    this.service.getAllJobProfileData().subscribe(Response=>{
      console.log(Response)
    })
  }
  addUserJobProfile(jobProfileID:number){
    this.service.addUserJobProfile(this.userID,jobProfileID).subscribe(Response=>
      console.log(Response));
  }

}
  