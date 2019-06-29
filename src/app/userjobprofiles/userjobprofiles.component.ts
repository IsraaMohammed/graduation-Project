import { Component, OnInit,Input } from '@angular/core';
import {UserLoginService} from 'src/app/Services/user-login.service';
import {ServecesService} from '../Services/serveces.service';
import { jobProfile } from '../_Model/jobProfileCards';
@Component({
  selector: 'app-userjobprofiles',
  templateUrl: './userjobprofiles.component.html',
  styleUrls: ['./userjobprofiles.component.css']
})
export class UserjobprofilesComponent implements OnInit {
  data: jobProfile[]=[];
  one:jobProfile;
  constructor(private service:ServecesService,private userLoged:UserLoginService) { }

  ngOnInit() {
    this.service.getUserJobProfileDataForEachUser(this.userLoged.currentUserID).subscribe(Response=>{
      console.log(Response);
      this.one=Object.assign({},Response);
      for(let i in Response){
        this.data.push(Response[i])
      }      
    })
    console.log(this.data)
  }



}
