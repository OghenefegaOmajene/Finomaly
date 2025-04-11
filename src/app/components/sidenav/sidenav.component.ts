import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Input() isCollapsed = false;

  // isCollapsed = false;

  navItems = [
    { label: 'Overview', icon: 'bi-speedometer2', link: '/dashboard/overview' },
    { label: 'Transactions', icon: 'bi-graph-up-arrow', link: '/dashboard/transactions' },
    { label: 'Anomalies', icon: 'bi-exclamation-circle', link: '/dashboard/anomalies' },
    { label: 'Analytics', icon: 'bi-bar-chart-line', link: '/dashboard/analytics' },
    { label: 'Settings', icon: 'bi-gear', link: '/dashboard/settings' },
  ];

  // toggleCollapse() {
  //   this.isCollapsed = !this.isCollapsed;
  // }
}
