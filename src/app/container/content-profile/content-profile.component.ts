import { Component, OnInit } from '@angular/core';
import { jobProfile } from 'src/app/_Model/jobProfileCards';
import {JobProfileService} from '../../Services/job-profile.service';
import { Subscription } from 'rxjs';
import { UserLoginService } from 'src/app/Services/user-login.service';


@Component({
  selector: 'app-content-profile',
  templateUrl: './content-profile.component.html',
  styleUrls: ['./content-profile.component.css']
})
export class ContentProfileComponent implements OnInit {
  data: jobProfile[]=[];
  loginservice: UserLoginService;
  // jobObservable:Subscription;
  constructor(private jobProfileService:JobProfileService,private _loginservice:UserLoginService) { 
    this.loginservice = _loginservice;
    // this.data=[
    //   {id:1, name:'.NET Developer', image:'../../assets/imgs/dotnet.png',describtion:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    //   {id:2, name:'Frontend Angular', image:'../../assets/imgs/front.png',describtion:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    //   {id:3, name:'Frontend React', image:'../../assets/imgs/web-development.png',describtion:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
    //   ,{id:3, name:'Frontend React', image:'../../assets/imgs/web-development.png',describtion:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}

    // ]
    
   }
   
  

  ngOnInit() {

    this.jobProfileService.getAllJobs()
    .then(res => {
      this.data = res.data;
      console.log(res.data);
    })
    .catch(err => console.log(err));
  //  this.jobProfileService.getAllJobs()
  //  .subscribe(( data: jobProfile[]) =>{
  //     this.data = data;
  //     // console.log(this.data);
  //     // console.log(this.loginservice.LoginUser)
  //     let token = localStorage.getItem('token');
  //     console.log(token);
    
  //     // this.loginservice.isLoggedIn=true;
      
  //   }),
  //   error =>{
  //     console.log(error);
  //     this.loginservice.isLoggedIn=false;
  //    alert(this.loginservice.decodedToken.nameid);
  //     // this.loginservice.user.token;
  //   }

  }
 

}
