import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { TeachersTableComponent } from './pages/teachers-table/teachers-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const appRoutes: Routes = [

  { path: 'teachers', component: TeachersTableComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AddTeacherComponent,
    TeachersTableComponent,

  ],
  imports: [
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot([
      {path: '**', component: AddTeacherComponent}  //first page
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
