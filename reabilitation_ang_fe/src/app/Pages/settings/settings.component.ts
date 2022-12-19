import { Component, OnInit } from '@angular/core';
import { ReabilitationKeys } from 'src/app/utils/localStorage';
import { APP_THEME, Themes, onApplyAppTheme } from 'src/assets/theme';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  keys = Object.keys;
  themes = APP_THEME;
  selectedTheme: string = '';
  constructor() { }

  ngOnInit() {
    this.setSelectedTheme()
  }

  setSelectedTheme() {
    this.selectedTheme = localStorage.getItem(ReabilitationKeys.THEME) || Themes.LIGHT;
  }
  onThemeChange(value: string) {
    this.selectedTheme = value;
    onApplyAppTheme(value);
  }
}
