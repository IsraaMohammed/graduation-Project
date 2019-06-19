import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserLoginService } from 'src/app/Services/user-login.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { user } from '../../../app/_Model/user';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { text } from '@angular/core/src/render3';
@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

user:user;
show:boolean;
text:string;
formGroup: FormGroup;
  msg: string='';
  constructor(private modalService: NgbModal,private loginservice:UserLoginService,private router:Router) {
    this.show=false;
     this.text="Log In";
   }
  openBackDropCustomClassLogin(content){
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Username: new FormControl('', CustomValidators.rangeLength([3, 30])),
      Password:  new FormControl('',  CustomValidators.rangeLength([8, 12]))
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
  onSubmit(form?:NgForm,modal?:any)
  {
  
    this.loginservice.LoginUser(form.value).subscribe((data: any) => 
    {
      if(localStorage.getItem('token'))
      {
      // console.log(data);
      // alert(data)
      // if (data != null)
       
        modal.close();
        alert("Created");
        this.resetform(form);
        this.router.navigate(['container']);
        this.show=true;
      //  this.text="Log Out";
      //  if(this.show){
      //   this.text ='Log out';
      //   this.router.navigate(['home']);
      //  }
      //  else
      //  this.text ='Log in';
      
      }

  
    }, error => {
      
      if(error.status=='404' || error.status=='401')
      { 
        this.msg="UserName Or Password is Invalid";
        console.log(error)

      }
      else
      console.log("israa error")
    
    }
    )

  

}


}

