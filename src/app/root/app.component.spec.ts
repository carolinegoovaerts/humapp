import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ReportingTemplate} from '../reporting/atomic/templates/reporting.template';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const promise = TestBed.configureTestingModule({
      // @Pipe/@Directive/@Component
      declarations: [
        AppComponent,
        ReportingTemplate
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Hum App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hum App');
  }));
});
