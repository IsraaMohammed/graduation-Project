import { Component, OnInit, Input } from '@angular/core';
import { user } from '../_Model/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users: user[]=[];
  @Input() user:user;
  @Input() toggle: boolean;
  userservice: UserService;
  constructor(private _UserService:UserService) { 
    this.userservice=_UserService;
    this.toggle=true;
  }

  ngOnInit() {
    this.userservice.getUsers().subscribe((data:user[])=>  {this.users = data;
   console.log(this.users);
  })
  }

}
