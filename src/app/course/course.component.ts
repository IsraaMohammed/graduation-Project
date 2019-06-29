import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobProfileService } from '../Services/job-profile.service';
import { ServecesService } from 'src/app/Services/serveces.service';
import { level } from '../_Model/level';
import { jobProfile } from '../_Model/jobProfileCards';
import { course } from '../_Model/course';
import { Exam } from '../_Model/Exam';
import { UserLoginService } from '../Services/user-login.service';
import { UserCourses } from '../_Model/UserCourses';
import { from } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(private jobProfile: JobProfileService, private ServecesService: ServecesService,private user:UserLoginService) { }
  @Input() chk: any;
  @Input() levels: level[]=this.ServecesService.levelsDetails;
 
  @Input() level:level;
  @Input() courses:course[]=this.ServecesService.levelCourse;
  @Input() course:course;
  @Input()coursesInLevels:course[]=this.ServecesService.coursesInLevels;
  @Input() LevelData = {};
@Input() userJobProfileData:jobProfile;
  //@Input() userjobProfile:jobProfile[]=this.ServecesService.userJobProfile;
   e: Exam;
   @Input() exam:Exam[]=[];
  @Input() exGrade:number=this.ServecesService.examGrade;
  @Input() flag:number=0;
  modal:any;
examID:number=0;
@Input() checked:UserCourses;
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
     
    } else {
      nextelem.style.display = "none";
    }
  }

  countChecked:number=0;
  Levelchecked:boolean=false;
  ngOnInit() {
   this.ServecesService.getJobProfileData(this.ServecesService.jobProfileID).subscribe(Response=>{
     this.userJobProfileData=Object.assign({},Response);
     console.log(this.userJobProfileData);
     console.log("levels",this.ServecesService.levelsDetails)
   });
  // this.changesWhenCorrecting();
   
  }
 
  takeExam(id:number){
    this.ServecesService.getExamByCourseID(id).subscribe(Response=>{//console.log(Response);
      this.e=Object.assign({},Response);
      for(let i in Response)
      { this.exam.push(Response[i])}
    });
    console.log(this.exam);
    this.ServecesService.exam=this.exam;
   
    this.ServecesService.courseID=id;
    
  }

  // changesWhenCorrecting(){
  //  for(let l in this.levels){
  //    for(let c in this.levels[l].courses){
  //      console.log(this.levels[l].courses[c].grade)
  //    }
  //  }
  // }


}

