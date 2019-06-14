import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/Services/user-login.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { user } from '../../../app/_Model/user';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
formGroup:FormGroup;
 
  show: boolean;
  user: user;
  msg: string='';

  constructor(private loginservice:UserLoginService, private router: Router) { 
    this.show=false;
  }

  ngOnInit() {
    this.formGroup=new FormGroup({
      Username:new FormControl('',CustomValidators.rangeLength([3,30])),
      Password:new FormControl('',CustomValidators.rangeLength([8,12]))
    })
  }
onSubmit(form?:NgForm)
{
this.loginservice.LoginUser(form.value).subscribe((data:any)=>
{
  alert(data);
  if(data !=null){
   
    this.resetform(form);
    this.router.navigate(['container']);
    this.show=true;
  }

}, error => {
      
  if(error.status=='401')
  { 
    this.msg="UserName Or Password is Invalid";
    console.log(error)

  }
  else
  console.log("israa error")

})
}
resetform(form?: NgForm) {
  if (form != null)
    form.reset();
  this.user = {

    Username: '',
    Password: ''
  
  }
}

}
