import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {UserLoginService} from '../app/Services/user-login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jwtHelper=new JwtHelperService();
  
  constructor(private UserLoginService:UserLoginService)
  {
   
    setTimeout(()=>{this.load.nativeElement.style.display='none'},0)
    //3500
     }
  ngOnInit(): void {
  const token=localStorage.getItem('token');
  if(token)
  {this.UserLoginService.decodedToken=this.jwtHelper.decodeToken(token);}
}
  title = 'ITI-Day1-UT';
 
  @ViewChild('loading')
  load:ElementRef;
 
    
     
  
    
  }


