import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ZaiganAI';
}
