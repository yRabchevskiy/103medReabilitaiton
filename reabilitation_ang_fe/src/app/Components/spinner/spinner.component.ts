import { Component } from '@angular/core';
import { LoadingService } from 'src/app/Api/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  constructor(public loader: LoadingService) {}
}
