import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatEditComponent } from './candidat-edit/candidat-edit.component';
import { CandidatLoginComponent } from './candidat-login/candidat-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/candidat-list', pathMatch: 'full' },
  {
    path: 'candidat-list',
    component: CandidatListComponent
  },
  {
    path: 'candidat-add',
    component: CandidatEditComponent
  },
  {
    path: 'candidat-login',
    component: CandidatLoginComponent
  },
  {
    path: 'candidat-edit/:id',
    component: CandidatEditComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
