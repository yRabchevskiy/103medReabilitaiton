import { ApiService } from 'src/app/Api/api.service';
import { IPatient } from './../../Models/patient.model';
import { Component } from '@angular/core';
import { IBseApiResponse } from 'src/app/Api/models';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {
  patients: IPatient[] = [];
  showCreatePatientPanel: boolean = false;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getPatients().subscribe((res: IBseApiResponse<IPatient[]>) => {
      this.patients = res.data;
    });
  }

  onTooglePatientPanel() {
    this.showCreatePatientPanel = !this.showCreatePatientPanel;
  }
}
