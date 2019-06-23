import { Component, OnInit, Input } from '@angular/core';
import { jobProfile } from 'src/app/_Model/jobProfileCards';
import { JobProfileService } from 'src/app/Services/job-profile.service';
import { ServecesService } from 'src/app/Services/serveces.service';
import { level } from 'src/app/_Model/level';
import { course } from 'src/app/_Model/course';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() item: jobProfile;
 
  // @Input() Data:any;

  Data: any[];
  @Input() levels: level[] = [];
  @Input() level: level = {};
  levelCourses:course[];
  coursesInLevels: course[] = [];
  courses: course[] = [];

  constructor(private jobProfile: JobProfileService, private ServecesService: ServecesService) {
    
  }
  //courseGrade:number=this.ServecesService.examGrade;

  ngOnInit() {

  }

  clickedview(id: number) {
    this.ServecesService.getJobProfileData(id).subscribe(Response => {
      //console.log(Response);
      this.ServecesService.jobprofileData = Object.assign({}, Response);
      
      for (let i = 0; i < Response.levels.length; i++) {

        this.ServecesService.getLevelDetails(Response.levels[i].id).subscribe((R: level) => {
          this.level = Object.assign({}, R);
          for (let i in R) {
           //  console.log(R[i].courses);
             //for(let c in R[i].courses){//console.log(R[i].courses[c].id);
             // this.ServecesService.getExamByCourseID(R[i].courses[c].id).subscribe(Response=>console.log(Response.questions))
           // }
            this.levels.push(R[i]);
            this.courses.push(R[i].courses);
  
          }
        }); 
      }
      
      // for(let c in this.courses){console.log(this.courses[c].courseName)}

      //    console.log(this.courses);
    });
    this.ServecesService.jobProfileID = id;
    this.ServecesService.levelsDetails = this.levels;
    this.ServecesService.levelCourse = this.courses;
    //this.ServecesService.coursesInLevels=this.coursesInLevels;


  }

} 
