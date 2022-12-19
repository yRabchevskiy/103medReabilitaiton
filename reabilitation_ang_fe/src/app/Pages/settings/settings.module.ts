import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from '../settings/settings.component';
import { ThemeItemComponent } from 'src/app/Components/theme-item/theme-item.component';


@NgModule({
  declarations: [
    SettingsComponent,
    ThemeItemComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
  ]
})
export class SettingsModule { }
