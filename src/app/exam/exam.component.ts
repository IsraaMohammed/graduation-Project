import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServecesService } from 'src/app/Services/serveces.service';
import { CourseComponent } from '../course/course.component';
import { Exam } from '../_Model/Exam';
import {UserCourses} from '../_Model/UserCourses';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



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
  m=document.getElementsByTagName('form');
  
  userID:number=this.ServecesService.userID;

  show:boolean;
text:string;
  @Input() exam: Exam[] = this.ServecesService.exam;
  // @Output() onCorrectingExam=new EventEmitter<any> ();

  constructor(private ServecesService: ServecesService, private router: Router, private modalService: NgbModal) {
    this.show=false;
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
      nextelem.hidden=false;
      // nextelem.style.transitionDuration="5s";
    } 
  }
  correctingExam() {
    var answers = document.getElementsByTagName("select");
    for (var a = 0; a < answers.length; a++) {
      if ((answers[a].options[answers[a].selectedIndex].textContent) === this.exam[a].modelAnswer) {
        this.count++;
      }
    }
    this.rate = ((this.count / this.exam.length) * 100);
    this.ServecesService.examGrade = this.rate;
    
    if (this.rate >= 50) {
      this.ServecesService.updateCourseGrage(this.rate).subscribe(Response=>{
        console.log(Response)
      },(error)=>{
        console.log('ann error occured '+error)
      });
      this.router.navigate(['/course']);
      
    } else {
     // this.myClickFunction();
      //this.modalService.open(this.m); 
      this.router.navigate(['/failure']);
      

      //
    }
  };






  ngOnInit() {
    //console.log(this.exam);
    console.log('courseID '+this.ServecesService.courseID);
    console.log('UserID '+this.ServecesService.userID);

    
console.log(this.m)
  }

}
