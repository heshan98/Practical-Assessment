import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent {
  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private snackBar: MatSnackBar
  )
    { }


    submit(teacherName: string) {
      this.snackBar.open('Wait a Second ....', 'Close', {
        duration: 1000,
      });

      //console.log(teacherName);
      this.teacherService.createTeacher(teacherName).subscribe({
        next: (response) => {
          console.log('Teacher created successfully:', response);
          this.router.navigate(['/teachers']);
          this.snackBar.open('Teacher created successfully', 'Close', {
            duration: 3000,
          });
        },
        error: (error) => {
          console.error('Error creating teacher:', error);
          this.snackBar.open('Error creating teacher', 'Close', {
            duration: 3000,
          });
        }
      });
    }
}

