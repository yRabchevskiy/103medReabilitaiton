import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    NavPanelComponent,
    NavLinkComponent,
    SpinnerComponent,
    PageHeaderComponent,
    ThemeItemComponent,
    IconButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, LayoutComponent, NavPanelComponent, IconButtonComponent,
    NavLinkComponent, SpinnerComponent, PageHeaderComponent, ThemeItemComponent,
  ]
})
export class ComponentsModule { }
