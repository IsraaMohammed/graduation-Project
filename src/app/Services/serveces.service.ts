import { Injectable } from '@angular/core';
import { level } from '../_Model/level';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jobProfile } from '../_Model/jobProfileCards';

@Injectable({
  providedIn: 'root'
})
export class ServecesService {
data:level[];
onItemSelected=new Subject<level>();

  constructor(private http:HttpClient) { }
  jobprofile:jobProfile;
  getById(Id:number){

  alert(Id);
    return this.http.get('http://localhost:49444/api/jobProfile/Details/' + Id)
  
  // getAll(){return this.data;}

  }
}
