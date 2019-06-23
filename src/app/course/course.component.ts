import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobProfileService } from 'src/app/Services/job-profile.service';
import { ServecesService } from 'src/app/Services/serveces.service';
import { level } from '../_Model/level';
import { jobProfile } from '../_Model/jobProfileCards';
import { course } from '../_Model/course';
import { Exam } from '../_Model/Exam';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(private jobProfile: JobProfileService, private ServecesService: ServecesService) { }
  @Input() chk: any;
  @Input() levels: level[]=this.ServecesService.levelsDetails;
  @Input() level:level;
  @Input() courses:course[]=this.ServecesService.levelCourse;
@Input() course:course;
  @Input()coursesInLevels:course[]=this.ServecesService.coursesInLevels;
  @Input() LevelData = {};

   e: Exam;
   @Input() exam:Exam[]=[];
  @Input() exGrade:number=this.ServecesService.examGrade;
  @Input() flag:number=0;
  modal:any;
examID:number=0;
  nexte(elem) {
    do {
      elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
  }
  clicked() {
    //this.chk=document.activeElement.getElementsByTagName('input');
    this.chk = document.getElementsByClassName('custom-control-input');
    this.chk.checked = true;
    // this.clickTakeExam.next(); 
  }
  myClickFunction() {
    var x = document.activeElement;
    var nextelem = this.nexte(x);
    if (nextelem.style.display === "none") {
      nextelem.style.display = "block";
      // if(nextelem.next(x)==document.lastElementChild){
      //   //post project method 
      //   nextelem.style.display="block";

      // }
      // nextelem.style.transitionDuration="5s";
    } else {
      nextelem.style.display = "none";
      // nextelem.style.transitionDuration="5s";

    }
  }

  //   getCheckedCheckboxesFor(checkboxName) {
  //   var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]');
  //     for (let i = 0; i < checkboxes.length; i++) {


  //     }
  // }


  ngOnInit() {
    // console.log(this.levels)
    // console.log(this.courses)
    //this.changesWhenCorrecting();
    console.log(this.examID);

  }
   
  takeExam(id:number){
    this.ServecesService.getExamByCourseID(id).subscribe(Response=>{//console.log(Response);
      this.e=Object.assign({},Response);
     // this.ServecesService.examID=Response.id;
      for(let i in Response)
      { this.exam.push(Response[i])}
    });
    console.log(this.exam);
    this.ServecesService.exam=this.exam;
    //this.examID=id;
  // console.log(id);
    this.ServecesService.courseID=id;
    //this.courses[id].grade=this.exGrade;
    
  }

  // changesWhenCorrecting(){
  //   if(this.exGrade>=50){
  //       this.flag=0;
  //       console.log(this.exGrade);
  //     }
  //     else{
  //       this.flag=1;
  //     console.log(this.exGrade);
      
  //   }
  // }


}

