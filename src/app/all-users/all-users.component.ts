import { Component, OnInit, Input } from '@angular/core';
import { user } from '../_Model/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: user[]=[];
  @Input() user:user;
  userservice: UserService;
  constructor(private _UserService:UserService) { 
    this.userservice=_UserService;
  }
  ngOnInit() {
    this.userservice.getUsers().subscribe((data:user[])=>  {this.users = data;
      console.log(this.users);
  }
   )
}

removeUser(id:number)
{
  this.userservice.deletetUser(id).subscribe(data=>{
    console.log(data);
   let index = this.users.findIndex(el=>el.id===id);
   this.users.splice(index,1);
  });
}
}
