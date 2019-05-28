import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

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

import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { RankComponent } from './rank/rank.component';
import { JobProfileService } from './job-profile.service';
import { ExamComponent } from './exam/exam.component';
import { CourseComponent } from './course/course.component';


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
    RankComponent,CourseComponent,ExamComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,   
    HttpClientModule,
    NgbModule,
      RouterModule.forRoot([
        { path: '', component: ContainerComponent },
        { path: 'container', component: ContainerComponent },
        { path: 'home', component: HomeComponent },
        { path: 'community', component: CommunityComponent },
        { path: 'signup', component: SignUpComponent },
        { path: 'login', component: LogInComponent },
        { path: 'about', component: AboutComponent },
       
        {path:'urRank',component:RankComponent},
        {path:'exam',component:ExamComponent},
        {path:'course',component:CourseComponent},
        { path: '**', component: ErrorComponent }
      ])
       ],
  providers: [JobProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
