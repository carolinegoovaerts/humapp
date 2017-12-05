import {TestBed} from '@angular/core/testing';
import {async} from 'q';
import {ReportingComponent} from './reporting.template';
import {HeaderComponent} from '../organisms/header/header.organism';
import {ReportingMapComponent} from '../organisms/reporting-map/reporting-map.organism';
import {ReportComponent} from '../molecules/report/report.molecule';

describe('ReportingComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReportingComponent,
        HeaderComponent,
        ReportingMapComponent,
        ReportComponent
      ],
    }).compileComponents();
  }));

  it('should create the template', () => {
    const fixture = TestBed.createComponent(ReportingComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
