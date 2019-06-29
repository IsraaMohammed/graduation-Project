import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/_Model/user';
import { UserLoginService } from 'src/app/Services/user-login.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';




@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  userInfo: user;
  photoExist:boolean;
  sanitizer: DomSanitizer;
  SafeResourceUrl: SafeResourceUrl;
  photourl: string;
  constructor(public loginservice: UserLoginService, public _sanitizer: DomSanitizer) {
    //  this.userInfo={
    //     id:1,Image:'../../assets/imgs/user.png',Username:'Israa Mohamed'

    //   }
    this.sanitizer = _sanitizer;
    this.photoExist=false;

    //error here
this.photourl=localStorage.getItem('url');
// this.photourl=this.photourl.substr(1,this.photourl.length-2)
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var Username = currentUser;

    }

    this.userInfo = {
      //id:1,Image:'../../assets/imgs/user.png',Username:'Israa Mohamed'
      id: 1, Image: this.sanitizer.bypassSecurityTrustResourceUrl(this.photourl), Username: Username
      // id:1,Image:'../../assets/imgs/user.png',Username:Username

    }
    if( this.photourl)
    {
        this.photoExist=true;
    }
  
  }
  logOut() {
    this.loginservice.logOut();
  }
  loggedIn() {
    return this.loginservice.loggedIn();
  }


}
