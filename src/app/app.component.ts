import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert/_services/alert.service';
import { AlertType } from './alert/_models/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private alertService: AlertService) {}

  pushAlert(alertType: AlertType) {
    this.alertService.push({ message: 'Test Alert', type: alertType });
  }
}
