import { Component, OnInit, Input } from '@angular/core';
import { ServecesService } from 'src/app/Services/serveces.service';
import { Exam } from '../_Model/Exam';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent implements OnInit {

  constructor(private services:ServecesService) { }
  @Input() exGrade:number=this.services.examGrade;
  e: Exam;
  @Input() exam:Exam[]=[];
  examId:number=this.services.examID;
  ngOnInit() {
  }
  takeExam(){
    this.services.getExamByCourseID(this.services.courseID).subscribe(Response=>{//console.log(Response);
      this.e=Object.assign({},Response);
      for(let i in Response)
      { this.exam.push(Response[i])}
    });
    console.log(this.exam);
    this.services.exam=this.exam;
    //this.courses[id].grade=this.exGrade;
    
  }
}
