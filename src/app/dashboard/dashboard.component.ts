import { Component } from '@angular/core';
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { SidenavheaderComponent } from '../components/sidenavheader/sidenavheader.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidenavComponent, SidenavheaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isCollapsed = false;

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
