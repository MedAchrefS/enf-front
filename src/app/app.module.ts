import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CandidatEditComponent } from './candidat-edit/candidat-edit.component';
import { FormsModule } from '@angular/forms';
import { CandidatLoginComponent } from './candidat-login/candidat-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatListComponent,
    CandidatEditComponent,
    CandidatLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
