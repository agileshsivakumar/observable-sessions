import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlertService } from './alert/_services/alert.service';
import { AlertComponent } from './alert/alert.component';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, AlertComponent],
      providers: [AlertService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should push alert', () => {
    spyOn(app.alertService, 'push');
    app.pushAlert('success');

    expect(app.alertService.push).toHaveBeenCalledWith({
      message: 'Test Alert',
      type: 'success'
    });
  });
});
