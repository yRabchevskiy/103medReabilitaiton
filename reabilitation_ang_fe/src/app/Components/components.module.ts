import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    NavPanelComponent,
    NavLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, LayoutComponent, NavPanelComponent, NavLinkComponent]
})
export class ComponentsModule { }
