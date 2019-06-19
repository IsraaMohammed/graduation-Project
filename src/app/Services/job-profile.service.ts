import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jobProfile } from '../_Model/jobProfileCards';
import Axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class JobProfileService {

  // data : Observable<jobProfile[]> ;

  constructor(private httpClient:HttpClient) { }

  getAllJobs() {
    let token = "bearer " + localStorage.getItem('token');
    console.log(token);
    return Axios.get("http://localhost:49444/api/jobProfile/", {headers: {Authorization: token}});
  }
// getAllJobs(): Observable<jobProfile[]>{
  
//   return this.httpClient.get<jobProfile[]>('http://localhost:49444/api/jobProfile/'
//   ,setHeaders:{Authorization:localStorage.getItem('token')}

  
// )
// }

}
