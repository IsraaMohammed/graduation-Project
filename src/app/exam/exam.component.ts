import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CourseComponent} from '../course/course.component';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  Exam: Array<any>;
  count: number = 0;
  rate:number=0;
  // @Output() onCorrectingExam=new EventEmitter<any> ();

  constructor() {
    this.Exam = [
      {
        Question: "A :",
        Answer: "A"
      },
      {
        Question: "B :",
        Answer: "B"
      },
      {
        Question: "C :",
        Answer: "C"
      },
      {
        Question: "D:",
        Answer: "D"
      },
      {
        Question: "E :",
        Answer: "E"
      }
    ];

  }

  correctingExam() {
    var answers = document.getElementsByTagName("select");
    for (var a = 0; a < answers.length; a++) {
      if ((answers[a].options[answers[a].selectedIndex].textContent) === this.Exam[a].Answer) {
        this.count++;
      }
    }
    this.rate=((this.count/this.Exam.length)*100);
    if(this.rate>=50){
      alert(this.rate +"%");
      CourseComponent.prototype.clicked();
    }else{alert("Failed!!")}
  }; 



  ngOnInit() {
  }

}
