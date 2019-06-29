import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {user} from '../_Model/user';
import { Observable } from 'rxjs';
const httpOption={
  headers:new HttpHeaders({
    'Authorization':'Bearer' +localStorage.getItem('token')
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
getUsers(): Observable<user[]>{
  return this.http.get<user[]>(this.baseUrl + '/users');
}
getUser(id):Observable<user>{
  return this.http.get<user>(this.baseUrl + '/users/' +id);

}
deletetUser(id):Observable<user>{
  return this.http.delete<user>(this.baseUrl + '/Users/' +id);

}
updateUser(id:number,user:user)
{
  return this.http.put(this.baseUrl + '/users/' +id,user)
}
setMainPhoto(userId:number,id:number)
{
  return this.http.post(this.baseUrl+ '/users/' + userId +'photos/' +id +'setMain' ,{})
}
}
