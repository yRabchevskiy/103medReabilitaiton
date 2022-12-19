import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent {
  open: boolean = false;
  onClick() {
    this.open = !this.open;
  }
}
