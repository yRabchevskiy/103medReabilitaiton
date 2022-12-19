import { Component, OnInit } from '@angular/core';
import { onSetupAppTheme } from 'src/assets/theme';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: []
})
export class AppComponent implements OnInit {
  ngOnInit() {
    onSetupAppTheme()
  }
}
