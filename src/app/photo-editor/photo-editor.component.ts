import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AlertifyService } from '../Services/alertify.service';
import {UserLoginService} from '../Services/user-login.service'
import { Photo } from '../_Model/Photo';
import {UserService} from '../Services/user.service'

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos:Photo[];
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean = false;
  // hasAnotherDropZoneOver:boolean = false;
  baseUrl=environment.apiUrl;
  constructor(private alertify:AlertifyService,public UserLoginService:UserLoginService,private UserService:UserService) { }

  ngOnInit() {
    this.initializeUpLoad();
  }
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
}
 initializeUpLoad()
 {
   this.uploader=new FileUploader({
     url:this.baseUrl+'/Photos/addPhoto/'+this.UserLoginService.decodedToken.nameid ,
     authToken:'bearer '+localStorage.getItem('token'),
     isHTML5:true,
allowedFileType:['image'],
removeAfterUpload:true,
autoUpload:false,
maxFileSize: 10 * 1024 * 1024
   })
   this.uploader.onAfterAddingFile =(file)=>{file.withCredentials=false;}
   this.uploader.onSuccessItem= (item,response,status,header)=>{
     if(response)
     {
       const res:Photo=JSON.parse(response);
       const photo ={
         id:res.id,
         url:res.url,
         isMain:res.isMain
       }
       this.photos.push(photo)
     }
   }
   
 }
 setMainPhoto(photo:Photo)
 {
    this.UserService.setMainPhoto(this.UserLoginService.decodedToken.nameid,photo.id).subscribe(()=>
  {
console.log("Successfully set to main")
   },error=>{
     this.alertify.error(error);
   })
 }
}
