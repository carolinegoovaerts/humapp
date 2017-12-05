import {TestBed} from '@angular/core/testing';
import {async} from 'q';
import {ReportingMapComponent} from './reporting-map.organism';

describe('ReportingMapComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportingMapComponent],
    }).compileComponents();
  }));

  it('should create the organism', () => {
    const fixture = TestBed.createComponent(ReportingMapComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have a paragraph text', () => {
    const fixture = TestBed.createComponent(ReportingMapComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.intro).toBeDefined();
  });
});
