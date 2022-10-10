import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from './helpers/constants/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InterviewListComponent } from './pages/interview-list/interview-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CandidateRowDetailComponent } from './components/candidate-row-detail/candidate-row-detail.component';
import { StatusDropdownComponent } from './components/status-dropdown/status-dropdown.component';
import { EditableCommentsComponent } from './components/editable-comments/editable-comments.component';
import { InterviewDetailsComponent } from './components/interview-details/interview-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    InterviewListComponent,
    UserDetailComponent,
    CandidateRowDetailComponent,
    StatusDropdownComponent,
    EditableCommentsComponent,
    InterviewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    DragDropModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
