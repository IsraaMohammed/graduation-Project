import { Component, OnInit } from '@angular/core';
import { user } from '../_Model/user';
import { UserLoginService } from '../Services/user-login.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
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