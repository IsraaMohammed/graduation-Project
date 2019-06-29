import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServecesService } from 'src/app/Services/serveces.service';
import { CourseComponent } from '../course/course.component';
import { Exam } from '../_Model/Exam';
import { UserCourses } from '../_Model/UserCourses';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserLoginService } from '../Services/user-login.service';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  closeResult: string;
  //Exam: Array<any>;
  count: number = 0;
  rate: number;
  m = document.getElementsByTagName('form');

  userID: number = this.ServecesService.userID;

  show: boolean;
  text: string;
  @Input() exam: Exam[] = this.ServecesService.exam;
  // @Output() onCorrectingExam=new EventEmitter<any> ();

  constructor(
    private ServecesService: ServecesService,
    private router: Router, private modalService: NgbModal,
    private userLogged: UserLoginService,
    private ngFlashMessageService: NgFlashMessageService
  ) {
    this.show = false;
  }


  openLg(content) {

    this.modalService.open(content, { size: 'lg' });
  }
  nexte(elem) {
    do {
      elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
  }
  myClickFunction() {
    //var x = document.getElementsByTagName('form');
    var nextelem = this.nexte(this.m);
    if (nextelem.hidden === true) {
      nextelem.hidden = false;
      // nextelem.style.transitionDuration="5s";
    }
  }
  correctingExam(form?: NgForm, modal?: any, content?: any) {
    var answers = document.getElementsByTagName("select");
    for (var a = 0; a < answers.length; a++) {
      if ((answers[a].options[answers[a].selectedIndex].textContent) === this.exam[a].modelAnswer) {
        this.count++;
      }
    }
    this.rate = ((this.count / this.exam.length) * 100);
    this.ServecesService.examGrade = this.rate;



    if (this.rate >= 50) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Congratulation, You have passed the Exam!"],
          dismissible: true,
          timeout: 3000,
          type: 'success'
        });
      this.ServecesService.updateCourseGrage(this.userLogged.currentUserID, this.ServecesService.courseID, this.rate).subscribe(Response =>
        console.log(Response))
      setTimeout(() => {
        this.router.navigate(['/course']);
      }, 3000);
    } else {
      // this.myClickFunction();
      //this.modalService.open(this.m); 
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Oh!!, You didn't pass the Exam!"],
        dismissible: false,
        timeout: 3000,
        type: 'danger'
      });
      setTimeout(() => {
        this.router.navigate(['/course']);
      }, 3000);


      //
    }
  };






  ngOnInit() {
    //console.log(this.exam);
    console.log('courseID ' + this.ServecesService.courseID);
    console.log('UserID ' + this.ServecesService.userID);


    console.log(this.m)
  }

}
