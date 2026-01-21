import { Component } from '@angular/core';
import { StudentRegistartionComponent } from './student-registartion/student-registartion.component';
import { LoginComponent } from './login/login.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';


@Component({
  selector: 'app-root',
  imports: [StudentRegistartionComponent,LoginComponent,ManageStudentComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DemoAngularProject';
}
