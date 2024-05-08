import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { ITeacher, Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.css']
})

export class TeachersTableComponent {
  displayedColumns: string[] = ['id', 'teacherName'];
  teachers: ITeacher[] = [];

  constructor(private teacherService: TeacherService,private router:Router) { }

  ngOnInit(): void {

    this.teacherService.getAllTeachers().subscribe({
      next: (teachers) => {
        this.teachers = teachers;
        console.log(teachers);
      },
      error: (error) => {
        console.error('Error retrieving teachers:', error);
      }
    } as Observer<any>);
  }
  AddTeacher(){
    this.router.navigate(['/']);
  }
}
