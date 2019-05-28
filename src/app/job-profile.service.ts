import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jobProfile } from './_Model/jobProfileCards';
@Injectable({
  providedIn: 'root'
})
export class JobProfileService {

  // data : Observable<jobProfile[]> ;

  constructor(private httpClient:HttpClient) { }

getAllJobs(): Observable<jobProfile[]>{
  return this.httpClient.get<jobProfile[]>('http://localhost:49444/api/jobProfile/')
}

}
