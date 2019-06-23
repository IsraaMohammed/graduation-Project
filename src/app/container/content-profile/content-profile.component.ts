import { Component, OnInit } from '@angular/core';
import { jobProfile } from 'src/app/_Model/jobProfileCards';
import {JobProfileService} from '../../Services/job-profile.service';
import { Subscription } from 'rxjs';
import { UserLoginService } from 'src/app/Services/user-login.service';
// import { NgwWowModule } from 'ngx-wow';

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
 
    
   }
   
  
  //  const wow = new WOW(
  //   {
  //     boxClass:     'wow',      // animated element css class (default is wow)
  //     animateClass: 'animated', // animation css class (default is animated)
  //     offset:       0,          // distance to the element when triggering the animation (default is 0)
  //     mobile:       true,       // trigger animations on mobile devices (default is true)
  //     live:         true,       // act on asynchronously loaded content (default is true)
  //     callback:     function(box) {
  //       // the callback is fired every time an animation is started
  //       // the argument that is passed in is the DOM node being animated
  //     },
  //     scrollContainer: null,    // optional scroll container selector, otherwise use window,
  //     resetAnimation: true,     // reset animation on end (default is true)
  //   }
  // );
  // wow.init();
  ngOnInit() {
    // new WOW().init();
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
