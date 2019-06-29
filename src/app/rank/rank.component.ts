import { Component, OnInit, Input } from '@angular/core';
import{ServecesService} from '../Services/serveces.service';
import { level } from '../_Model/level';
import { jobProfile } from '../_Model/jobProfileCards';
import { course } from '../_Model/course';
import {UserLoginService} from 'src/app/Services/user-login.service';
@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

ServecesService:ServecesService;
@Input() item: jobProfile;

Data: any[];
@Input() levels: level[] = [];
@Input() level: level = {};
levelCourses:course[];
coursesInLevels: course[] = [];
courses: course[] = [];
@Input()jobProfileData: jobProfile;
userjobprofile:jobProfile[]=[];


coursesGradesByUser:number[]=[];
ranked:boolean=false;
  constructor(private _ServecesService:ServecesService,private user:UserLoginService) { 
    this.ServecesService=_ServecesService;
    //this.levels=["C","C++","Basic SQL","OOP"];
  }

  ngOnInit() {
   this.rankLevels();
   console.log( this.ServecesService.jobProfileID);
  }
  nexte(elem) {
    do {
      elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
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
rankLevels()
{
  this.ServecesService.getJobProfileData(this.ServecesService.jobProfileID).subscribe(Response => {
    console.log(Response);
    this.jobProfileData = Object.assign({}, Response);
   
    // for (let i = 0; i < Response.levels.length; i++) {

      this.ServecesService.getLevelDetails(Response.id,this.user.currentUserID).subscribe((R: level) => {
        this.level = Object.assign({}, R);
        for (let i in R) {
          this.levels.push(R[i]);
          this.courses.push(R[i].courses);
        }
        for(let course in this.courses){
            this.coursesGradesByUser.push(this.courses[course].grade);
        }
        for(let courseItem in this.coursesGradesByUser){
          if(this.coursesGradesByUser[courseItem]>=50){
            this.ranked=true;
            continue;
          }
          else{
            this.ranked=false;
            break;
          }
        }
    
      }); 
   // }
    console.log(this.jobProfileData)
  });
}

}
