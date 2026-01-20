import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DemoAngularProject';
}
