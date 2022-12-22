import { ComponentsModule } from 'src/app/Components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from '../patients/patients.component';
import { CreatePatientFormComponent } from './create-patient-form/create-patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    PatientsComponent,
    CreatePatientFormComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputMaskModule
  ]
})
export class PatientsModule { }
