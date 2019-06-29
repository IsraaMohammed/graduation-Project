import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jobProfile } from '../_Model/jobProfileCards';
import Axios from 'axios';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JobProfileService { 

  // data : Observable<jobProfile[]> ;
  baseUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  getAllJobs() {
    let token = "bearer " + localStorage.getItem('token');
    console.log(token);
    return Axios.get("http://localhost:49444/api/jobProfile/", {headers: {Authorization: token}});
  }
  deletetJobProfile(id):Observable<jobProfile>{
    return this.httpClient.get<any>(this.baseUrl +'/JobProfile/'+id);
  }

  AddJobProfile(jobProfile:jobProfile){
    const body :jobProfile={
     "name": jobProfile.name,
     "description":jobProfile.description
     
    }
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  

    return this.httpClient.post<any>(this.baseUrl+'/Admin/jobProfile/',body,httpOptions);
    
  }
// getAllJobs(): Observable<jobProfile[]>{
  
//   return this.httpClient.get<jobProfile[]>('http://localhost:49444/api/jobProfile/'
//   ,setHeaders:{Authorization:localStorage.getItem('token')}

  
// )
// }

}
