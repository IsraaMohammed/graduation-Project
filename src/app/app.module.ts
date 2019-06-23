import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CustomFormsModule} from 'ng2-validation';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInComponent } from './container/log-in/log-in.component';
import { ContainerComponent } from './container/container.component';
import { SliderComponent } from './container/slider/slider.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { SideBarComponent } from './container/side-bar/side-bar.component';
import { ContentProfileComponent } from './container/content-profile/content-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CardItemComponent } from './container/content-profile/card-item/card-item.component';
import { ButtonComponent } from './container/button/button.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';

import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RankComponent } from './rank/rank.component';
import { JobProfileService } from './Services/job-profile.service';
import { ExamComponent } from './exam/exam.component';
import { CourseComponent } from './course/course.component';
import { LoginPopupComponent } from './container/login-popup/login-popup.component';
import { UserRegisterService } from './Services/user-register.service';
import { UserLoginService } from './Services/user-login.service';
import { ServecesService } from './Services/serveces.service';
import { NavLogOutComponent } from './container/nav-log-out/nav-log-out.component';
// import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AlertifyService } from './Services/alertify.service';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { CommunityComponent } from './community/community.component';
import { AddQuestionComponent } from './community/add-question/add-question.component';

// import { NgwWowModule } from 'ngx-wow';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllJobProfileComponent } from './all-job-profile/all-job-profile.component';
import { AdminAllJobsComponent } from './admin-all-jobs/admin-all-jobs.component';
import { FailureComponent } from './failure/failure.component';


export function tokenGetter(){
  return localStorage.getItem('token ')
}




@NgModule({
    declarations:[
  
    AppComponent,
    NavBarComponent,
    LogInComponent,
    ContainerComponent,
    SliderComponent,
    SignUpComponent,
    SideBarComponent,
    ContentProfileComponent,
    CardItemComponent,
    ButtonComponent,
    DropDownComponent,
    ErrorComponent,
    AboutComponent,
    CommunityComponent,
    HomeComponent,
    RankComponent,CourseComponent,ExamComponent, LoginPopupComponent, NavLogOutComponent, PhotoEditorComponent,AddQuestionComponent, AdminPanelComponent, DashBoardComponent, AllUsersComponent, AllJobProfileComponent, AdminAllJobsComponent, FailureComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,   
    HttpClientModule,
    NgbModule,
    FileUploadModule,
    FormsModule,
    CustomFormsModule,
    // NgwWowModule,
    ReactiveFormsModule ,
      RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'container', component: ContainerComponent },
        { path: 'community', component: CommunityComponent },
        { path: 'signup', component: SignUpComponent },
        { path: 'login', component: LogInComponent },
        { path: 'about', component: AboutComponent },
        {path:'urRank',component:RankComponent},
        {path:'exam',component:ExamComponent},
        {path:'course',component:CourseComponent},
        {path:'failure',component:FailureComponent},
         {path:'photo',component:PhotoEditorComponent},
         {path:'community/addQuestion', component:AddQuestionComponent},
         {path:'admin', component:AdminPanelComponent},
         {path:'allUsers', component:AllUsersComponent},
        {path:'AdminAllJobsComponent',component:AdminAllJobsComponent},
        { path: '', component: HomeComponent },
        {path: '**', component: ErrorComponent }
      ]),JwtModule.forRoot({
        config:{
          tokenGetter: tokenGetter,
          whitelistedDomains:['localhost:49444'],
          blacklistedRoutes:['localhost:49444/api/Auth']
        }
      })
       ],
       providers: [JobProfileService,AlertifyService,UserRegisterService,UserLoginService,ServecesService],

  bootstrap: [AppComponent]
})
export class AppModule { }
