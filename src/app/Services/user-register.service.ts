import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Response} from "@angular/http";
import { Observable } from 'rxjs';
import {user} from '../_Model/user';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  readonly rootUrl='http://localhost:49444';


  constructor(private http:HttpClient) { }
  registerUser(user:user)
  {
    const body :user={
   
      "Username":user.Username,
      "Password":user.Password,
      "Email":user.Email
    }
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    // const httpOptions = { headers: { 'Content-Type': 'application/json' } };  
    return this.http.post<any>(this.rootUrl + '/api/Auth/register',body,httpOptions);
  }
}
