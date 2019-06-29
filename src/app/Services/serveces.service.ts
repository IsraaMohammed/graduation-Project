import { Injectable } from '@angular/core';
import { level } from '../_Model/level';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jobProfile } from '../_Model/jobProfileCards';
import { course } from '../_Model/course';
import { Exam } from '../_Model/Exam';
import { UserCourses } from '../_Model/UserCourses';
import { userJobProfile } from '../_Model/userJobProfile';
import {UserLoginService} from '../Services/user-login.service';
@Injectable({
  providedIn: 'root'
})
export class ServecesService {
  //data: level[] = [];

  onItemSelected = new Subject<level>();

  constructor(private http: HttpClient,private userLogIn:UserLoginService) { }

  jobProfileID: number;
  userID: number=this.userLogIn.currentUserID;
  examID: number;
  courseID: number;
  public jobprofileData: jobProfile = {};
  levelsDetails: level[] = [];
  
  levelCourse: course[] = [];
  public details: any[] = [];
  coursesInLevels: course[] = [];

  public exam: Exam[] = [];
  public examGrade: number;
  public flag: number;
  

  getAllJobProfileData(): Observable<jobProfile[]> {
    return this.http.get<jobProfile[]>('http://localhost:49444/api/jobProfile');
  }

  addUserJobProfile(userID: number, jobProfileID: number) {
    return this.http.post<userJobProfile>('http://localhost:49444/api/jobProfile/AddJopProfileToUser/' + userID + '/' + jobProfileID);
  }
  getJobProfileData(id: number): Observable<jobProfile> {
    return this.http.get<jobProfile>('http://localhost:49444/api/jobProfile/' + id);
  }
  getUserJobProfileDataForEachUser(userID: number) {

    return this.http.get('http://localhost:49444/api/JobProfile/UserJobProfile?UserId=' + userID);
  }

  getLevelDetails(idJobProfile: number,userID:number): Observable<level> {
    return this.http.get<level>('http://localhost:49444/api/jobProfile/Details/' + idJobProfile+'/'+userID);
  }

  getExamByCourseID(id: number): Observable<Exam> {
    return this.http.get<Exam>('http://localhost:49444/api/jobProfile/exam/' + id);
  }

  updateCourseGrage(UserID:number,courseID:number,grade:number) {
  return this.http.put('http://localhost:49444/api/JobProfile/Grade/'+UserID+'/'+courseID+'?Grade='+grade);
    //  return this.http.put<UserCourses>('http://localhost:49444/api/jobProfile/Grade/' + UserID + '/'+courseID,JSON.stringify(grade));
  }
}
 