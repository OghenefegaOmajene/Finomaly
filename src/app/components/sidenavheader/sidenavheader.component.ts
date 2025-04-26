import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenavheader',
  imports: [RouterLink],
  templateUrl: './sidenavheader.component.html',
  styleUrl: './sidenavheader.component.css'
})
export class SidenavheaderComponent {
  @Output() toggle = new EventEmitter<void>();

  onToggleClick() {
    this.toggle.emit();
  }
}
