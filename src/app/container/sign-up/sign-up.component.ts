import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { user } from '../../../app/_Model/user';

import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserRegisterService } from 'src/app/Services/user-register.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SignUpComponent implements OnInit {
  show: boolean;
  user: user;
  formGroup: FormGroup;
  msg:string='';
  msgName:string='';

  @ViewChild('content')
content:string;

  constructor(private modalService: NgbModal,config: NgbModalConfig, private userRegister: UserRegisterService, private formbulider: FormBuilder) {
    this.show = false;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  openBackDropCustomClass(contentsignup) {
    this.modalService.open(contentsignup, { backdropClass: 'light-blue-backdrop' });
  }

  ngOnInit() {
    this.resetform();

    let Password = new FormControl('', CustomValidators.rangeLength([8, 12]));
    let confirmPassword = new FormControl('', CustomValidators.equalTo(Password));
    this.formGroup = new FormGroup({
      Username: new FormControl('', CustomValidators.rangeLength([3, 30])),
      Password: Password,
      Email: new FormControl('', CustomValidators.email),
      confirmPassword: confirmPassword

    })
  }

  resetform(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      Username: '',
      Password: '',
      Email: '',
      ConfirmPassword: ''
    }
  }
  // open(content) {
  //   this.modalService.open(content);
  // }
  onSubmit(form?: NgForm, modal?: any,content?:any) {
    this.userRegister.registerUser(form.value).subscribe((data: any) => {
      console.log(data);
     // alert(data)
      if (data != null) {
       
        this.modalService.open(content);
        modal.close();
       // alert("Created");
        this.resetform(form);
        this.show = true;
       
       
       
      }


    }, error => {
      if (error.error == "User Name already exists")
      {
        console.log(error);
        console.log(error.error);
       // alert("Your Name already exists");
        this.msgName='User Name already exists';

      }
        
      else if (error.error == "User Email already exists")
     this.msg='Your Email already exists';
      else
      {
        this.msgName='User Name already exists';
        this.msg='Your Email already exists';
      }
    });
    // const obs = this.userRegister.registerUser(form.value);
    // obs.subscribe(console.log);

  }
}


