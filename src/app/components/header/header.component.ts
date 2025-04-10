import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
// import { faE } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  isHovering = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  onHoverEnter() {
    this.isHovering = true;
  }

  onHoverLeave() {
    this.isHovering = false;
  }

  email: string = "hayleyChibi@gmail.com"

  faChart = faDashboard
  faLogOut = faExternalLink
}
