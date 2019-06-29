import { Component, OnInit, Input } from '@angular/core';
import { jobProfile } from 'src/app/_Model/jobProfileCards';
import { JobProfileService } from 'src/app/Services/job-profile.service';
import { ServecesService } from 'src/app/Services/serveces.service';
import { level } from 'src/app/_Model/level';
import { course } from 'src/app/_Model/course';
import {UserLoginService} from 'src/app/Services/user-login.service';
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() item: jobProfile;

  Data: any[];
  @Input() levels: level[] = [];
  @Input() level: level = {};
  levelCourses:course[];
  coursesInLevels: course[] = [];
  courses: course[] = [];
  jobProfileData: jobProfile;
  userjobprofile:jobProfile[]=[];
  constructor(private jobProfile: JobProfileService, private ServecesService: ServecesService,private user:UserLoginService) {
    
  }
  //courseGrade:number=this.ServecesService.examGrade;

  ngOnInit() {

  }

  clickedview(id: number) {
    this.ServecesService.getJobProfileData(id).subscribe(Response => {
      console.log(Response,"response from fun get jobs data");
      this.jobProfileData = Object.assign({}, Response);
     
      // for (let i = 0; i < Response.levels.length; i++) {

        this.ServecesService.getLevelDetails(Response.id,this.user.currentUserID).subscribe((R: level) => {
          console.log("after subscribe r level :" ,R)
          // console.log("Response.levels[i].id",Response.levels[i].id)
          this.level = Object.assign({}, R);
          for (let i in R) {
            this.levels.push(R[i]);
            this.courses.push(R[i].courses);
          }
        }); 
      }
      // console.log(this.jobProfileData)
    );
    
    this.ServecesService.jobProfileID = id;
    this.ServecesService.levelsDetails = this.levels;
    this.ServecesService.levelCourse = this.courses;
    
    
   
  }

} 
