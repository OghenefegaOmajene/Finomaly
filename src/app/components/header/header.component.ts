import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
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
  menuToggle = false;
  accountToggle = false;

  constructor(private eRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  email: string = "hayleyChibi@gmail.com"

  faChart = faDashboard;
  faLogOut = faExternalLink;

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    // Close menu if clicked outside menu-toggle or navLinks
    if (
      this.menuToggle &&
      !this.eRef.nativeElement.querySelector('.menu-toggle')?.contains(target) &&
      !this.eRef.nativeElement.querySelector('.navLinks')?.contains(target)
    ) {
      this.menuToggle = false;
    }

    // Close account dropdown if clicked outside the .user area
    if (
      this.accountToggle &&
      !this.eRef.nativeElement.querySelector('.user')?.contains(target)
    ) {
      this.accountToggle = false;
    }
  }

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }

  toggleHoverBox() {
    this.accountToggle = !this.accountToggle;
  }
}
// export class HeaderComponent {
//   isScrolled = false;
//   isHovering = false;
//   menuToggle = false;

//   constructor(private eRef: ElementRef) {}

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     this.isScrolled = window.scrollY > 50;
//   }

//   onHoverEnter() {
//     this.isHovering = true;
//   }

//   onHoverLeave() {
//     this.isHovering = false;
//   }

//   email: string = "hayleyChibi@gmail.com"

//   faChart = faDashboard
//   faLogOut = faExternalLink


//   @HostListener('document:click', ['$event'])
//   handleClickOutside(event: Event) {
//     const target = event.target as HTMLElement;

//     if (
//       this.menuToggle &&
//       !this.eRef.nativeElement.querySelector('.menu-toggle')?.contains(target) &&
//       !this.eRef.nativeElement.querySelector('.navLinks')?.contains(target)
//     ) {
//       this.menuToggle = false;
//     }
//   }

//   toggleMenu() {
//     this.menuToggle = !this.menuToggle;
//   }

//   toggleHoverBox(){

//   }
// }
