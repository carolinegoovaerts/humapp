import {TestBed} from '@angular/core/testing';
import {async} from 'q';
import {ReportingTemplate} from './reporting.template';

describe('ReportingTemplate', () => {

  beforeEach(async(() => {
    const promise = TestBed.configureTestingModule({
      declarations: [ReportingTemplate],
    }).compileComponents();
  }));

  it('should create the template', () => {
    const fixture = TestBed.createComponent(ReportingTemplate);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
