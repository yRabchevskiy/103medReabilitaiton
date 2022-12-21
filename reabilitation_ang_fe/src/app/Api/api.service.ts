import { Injectable } from '@angular/core';
import { BaseApiService } from './baseApi.service';
import { IUser } from '../Models/user.model';
import { IPatient } from '../Models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private baseApiService: BaseApiService) { }

  getUsers() {
    return this.baseApiService.doGet<IUser[]>('/users');
  }

  getPatients<T>() {
    return this.baseApiService.doGet<IPatient[]>('/patients');
  }
}
