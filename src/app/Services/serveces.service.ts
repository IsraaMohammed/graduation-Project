import { Injectable } from '@angular/core';
import { level } from '../_Model/level';
import { Subject, Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jobProfile } from '../_Model/jobProfileCards';
import { course } from '../_Model/course';
import { Exam } from '../_Model/Exam';
import { UserCourses } from '../_Model/UserCourses';

@Injectable({
  providedIn: 'root'
})
export class ServecesService {
  //data: level[] = [];

  onItemSelected = new Subject<level>();

  constructor(private http: HttpClient) { }

  jobProfileID: number;
  userID:number;
  examID:number;
  courseID:number;
  public jobprofileData:jobProfile={};
  levelsDetails: level[]=[];
  levelCourse:course[]=[];
 public details: any[]=[];
 coursesInLevels:course[]=[];

 public exam: Exam[]=[];
 public examGrade: number;
public flag:number;  

  getJobProfileData(id: number):Observable<jobProfile> {
    return this.http.get<jobProfile>('http://localhost:49444/api/jobProfile/' + id);
    
  }


  getLevelDetails(id:number):Observable<level>{
   
     return this.http.get<level>('http://localhost:49444/api/jobProfile/Details/'+id);
     
  }
  
  getExamByCourseID(id:number):Observable<Exam>{
    return this.http.get<Exam>('http://localhost:49444/api/jobProfile/exam/'+id);
  }

  updateCourseGrage(grade:number):Observable<UserCourses>{
    return this.http.put<UserCourses>('http://localhost:49444/api/jobProfile/Grade'+this.userID+'/'+this.courseID,grade);
  }
}
