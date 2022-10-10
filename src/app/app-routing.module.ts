import { InterviewListComponent } from './pages/interview-list/interview-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'interview-list',
    pathMatch: 'full'
  },
  {
    path: 'interview-list',
    component: InterviewListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
