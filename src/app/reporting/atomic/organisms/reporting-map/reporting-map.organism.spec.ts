import {TestBed} from '@angular/core/testing';
import {async} from 'q';
import {ReportingMapComponent} from './reporting-map.organism';
import {MapComponent} from '../../molecules/map/map.molecule';
import {SignUpComponent} from '../../molecules/signup/signup.molecule';
import {ReportComponent} from '../../molecules/report/report.molecule';

describe('ReportingMapComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReportingMapComponent,
        MapComponent,
        ReportComponent,
        SignUpComponent
      ],
    }).compileComponents();
  }));

  it('should create the organism', () => {
    const fixture = TestBed.createComponent(ReportingMapComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
