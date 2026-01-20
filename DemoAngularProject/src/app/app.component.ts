import { Component } from '@angular/core';
import { StudentRegistartionComponent } from './student-registartion/student-registartion.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  imports: [StudentRegistartionComponent,LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DemoAngularProject';
}
