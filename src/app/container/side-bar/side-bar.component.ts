import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/_Model/user';
import { UserLoginService } from 'src/app/Services/user-login.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
userInfo: user;
  constructor(public loginservice:UserLoginService) {
  //  this.userInfo={
  //     id:1,Image:'../../assets/imgs/user.png',Username:'Israa Mohamed'

  //   }
    if(localStorage.getItem('currentUser')){
      var currentUser= JSON.parse(localStorage.getItem('currentUser'));
      var Username =currentUser;
     
    }
   this.userInfo={
      //id:1,Image:'../../assets/imgs/user.png',Username:'Israa Mohamed'
      id:1,Image:'../../assets/imgs/user.png',Username:Username

    }
  
   }

  ngOnInit() {
  }
  logOut(){
    this.loginservice.logOut();
  }
  loggedIn(){
    return this.loginservice.loggedIn();
  }

}
