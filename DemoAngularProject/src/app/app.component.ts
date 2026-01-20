import { Component } from '@angular/core';
import { StudentRegistartionComponent } from './student-registartion/student-registartion.component';


@Component({
  selector: 'app-root',
  imports: [StudentRegistartionComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DemoAngularProject';
}
