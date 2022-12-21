import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPatient } from 'src/app/Models/patient.model';
import { Gender } from 'src/app/Models/user.model';

@Component({
  selector: 'app-create-patient-form',
  templateUrl: './create-patient-form.component.html',
  styleUrls: ['./create-patient-form.component.scss']
})
export class CreatePatientFormComponent {
  patientForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    rank: new FormControl('', [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl(Gender.Male, [Validators.required]),
    phone: new FormControl('', Validators.required),
    visits: new FormArray([
      new FormGroup({
        date: new FormControl(null, [Validators.required]),
        diagnosis: new FormControl('', [Validators.required]),
        treatment: new FormControl(''),
        description: new FormControl(''),
      })
    ])
  });

  visits = this.patientForm.get('visits') as FormArray;
  constructor() { }
  addVisit() {
    const group = new FormGroup({
      date: new FormControl(null, [Validators.required]),
      diagnosis: new FormControl('', [Validators.required]),
      treatment: new FormControl(''),
      description: new FormControl(''),
    });
    this.visits.push(group);
  }

  removeVisit(index: number) {
    this.visits.removeAt(index);
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
