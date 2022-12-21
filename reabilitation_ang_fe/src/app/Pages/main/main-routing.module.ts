import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
      { path: 'patients', loadChildren: () => import('../patients/patients.module').then(m => m.PatientsModule) },
      { path: 'settings', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
