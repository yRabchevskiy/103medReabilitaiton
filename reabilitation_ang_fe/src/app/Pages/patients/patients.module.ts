import { ComponentsModule } from 'src/app/Components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from '../patients/patients.component';
import { CreatePatientFormComponent } from './create-patient-form/create-patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PatientsComponent,
    CreatePatientFormComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PatientsModule { }
