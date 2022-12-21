import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() style: Object | undefined = undefined;
  @Input() disabled: boolean = false;
  @Input() label: string | undefined = undefined;
  @Output() onClick = new EventEmitter<string>()
  
  doClick(event: any): void {
    if (this.disabled) return;
    this.onClick.emit(event);
  }
}
