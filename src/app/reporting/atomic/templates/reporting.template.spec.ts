import {TestBed} from '@angular/core/testing';
import {async} from 'q';
import {ReportingComponent} from './reporting.template';

describe('ReportingComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportingComponent],
    }).compileComponents();
  }));

  it('should create the template', () => {
    const fixture = TestBed.createComponent(ReportingComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
