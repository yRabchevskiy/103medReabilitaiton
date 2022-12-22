import { IUser } from 'src/app/Models/user.model';
import { ApiService } from './../../Api/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IBseApiResponse } from 'src/app/Api/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: IUser[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((res: IBseApiResponse<IUser[]>) => {
      this.users = res.data;
    });
  }
}
