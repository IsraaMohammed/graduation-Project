// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {user} from '../_Model/user';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserLoginService {

//   readonly rootUrl='http://localhost:49444';


//   constructor(private http:HttpClient) { }

//   LoginUser(user:user)
//   {
//     const body :user={
      
//       "Username":user.Username,
//       "Password":user.Password
   
//     }
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
//     // const httpOptions = { headers: { 'Content-Type': 'application/json' } };  
//     return this.http.post<any>(this.rootUrl + '/api/Auth/Login',body,httpOptions);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

import {user} from '../_Model/user';
import {map} from  'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  readonly rootUrl=environment.apiUrl + 'Auth/';
user:user;
jwtHelper=new JwtHelperService();
decodedToken :any;
  constructor(private http:HttpClient) { }

  LoginUser(user:user)
  {
    const body :user={
      "Username":user.Username,
      "Password":user.Password
    }
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    // const httpOptions = { headers: { 'Content-Type': 'application/json' } };  
    return this.http.post<any>(this.rootUrl + 'Login',body,httpOptions).pipe(
      map((res:any)=>{
        const user = res;
        if(user){
          localStorage.setItem('token',user.token);
          localStorage.setItem('currentUser',JSON.stringify(body.Username));
          this.decodedToken=this.jwtHelper.decodeToken(user.token);
        console.log(this.decodedToken.nameid);

        }
      },error=>{console.log("Login failed")})

    )

  
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;   //if token exist return true if empty return false
  
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    console.log("logout");
  
  }
 

 
}

