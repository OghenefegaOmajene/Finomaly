import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenavheader',
  imports: [],
  templateUrl: './sidenavheader.component.html',
  styleUrl: './sidenavheader.component.css'
})
export class SidenavheaderComponent {
  @Output() toggle = new EventEmitter<void>();

  onToggleClick() {
    this.toggle.emit();
  }
}
