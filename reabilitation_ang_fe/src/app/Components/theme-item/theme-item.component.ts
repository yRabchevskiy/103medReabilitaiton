import { APP_THEME, IThemeValue } from 'src/assets/theme';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.scss']
})
export class ThemeItemComponent {
  keys = Object.keys;
  theme: IThemeValue | undefined;
  _name: string = '';
  get name(): string {
    return this._name;
  }
  @Input('name') set name(value: string) {
    this._name = value;
    this.theme = APP_THEME[value as keyof typeof APP_THEME];
  }
  @Input() selected: boolean = false;
  @Output() onSelectChange = new EventEmitter<string>()
  onClick(event: any): void {
    if (this.selected) return;
    this.onSelectChange.emit(this._name);
  }
}
