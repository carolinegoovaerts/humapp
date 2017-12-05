import {TestBed} from '@angular/core/testing';
import {async} from 'q';
import {ReportingComponent} from './reporting.template';
import {HeaderComponent} from "../organisms/header/header.organism";
import {ReportingOnMapComponent} from "../organisms/reporting-map/reporting-map.organism";

describe('ReportingComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReportingComponent,
        HeaderComponent,
        ReportingOnMapComponent
      ],
    }).compileComponents();
  }));

  it('should create the template', () => {
    const fixture = TestBed.createComponent(ReportingComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
