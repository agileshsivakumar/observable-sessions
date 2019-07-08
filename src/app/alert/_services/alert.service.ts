import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert } from '../_models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<Alert>();

  push(alert: Alert) {
    this.alertSubject.next(alert);
  }

  get(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }
}
