import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITeacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:8080/api/teacher'; // Update with your API URL

  constructor(private http: HttpClient) { }

  // Create a new teacher
  createTeacher(teacherName: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { teacherName })
      .pipe(
        catchError(error => {
          throw 'Error creating teacher: ' + error;
        })
      );
  }
  // Retrieve all teachers
  getAllTeachers(): Observable<ITeacher[]> { // Specify the return type as Teacher[]
    return this.http.get<ITeacher[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          throw 'Error retrieving teachers: ' + error;
        })
      );
  }
}
