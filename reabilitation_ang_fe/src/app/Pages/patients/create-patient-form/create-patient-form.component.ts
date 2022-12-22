import { ApiService } from './../../../Api/api.service';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { differenceInDays, formatISO } from 'date-fns';
import { IPatient } from 'src/app/Models/patient.model';
import { Gender } from 'src/app/Models/user.model';

@Component({
  selector: 'app-create-patient-form',
  templateUrl: './create-patient-form.component.html',
  styleUrls: ['./create-patient-form.component.scss']
})
export class CreatePatientFormComponent {
  maxDate: string = formatISO(new Date(), { representation: 'date' });
  formStep: number = 0;
  patientForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    rank: new FormControl('', [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    birthday: new FormControl(null, [Validators.required, this.maxDateValidation()]),
    email: new FormControl('', [Validators.email]),
    gender: new FormControl(Gender.Male, [Validators.required]),
    phone: new FormControl('', Validators.required),
    visits: new FormArray([
      new FormGroup({
        date: new FormControl(formatISO(new Date(), { representation: 'date' }), [Validators.required]),
        diagnosis: new FormControl('', [Validators.required]),
        treatment: new FormControl(''),
        description: new FormControl(''),
      })
    ])
  });

  visits = this.patientForm.get('visits') as FormArray;
  constructor(private apiService: ApiService) { }
  addVisit() {
    const group = new FormGroup({
      date: new FormControl(formatISO(new Date(), { representation: 'date' }), [Validators.required]),
      diagnosis: new FormControl('', [Validators.required]),
      treatment: new FormControl(''),
      description: new FormControl(''),
    });
    this.visits.push(group);
  }

  removeVisit(index: number) {
    this.visits.removeAt(index);
  }

  onGoNext() {
    this.formStep += 1; 
  }
  onGoPrev() {
    this.formStep -= 1; 
  }
  onSubmit(form: FormGroup) {
    if (!form.valid) return;
    debugger
    this.apiService.savePatient(form.value).subscribe(res => console.log(res));
  }

  maxDateValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const result = differenceInDays(
        new Date(),
        new Date(control.value)
      );
      return result < 0 ? { date: { value: control.value } } : null;
    };
  }
}
