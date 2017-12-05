import {TestBed} from '@angular/core/testing';
import {async} from 'q';
import {ReportingOnMapComponent} from './reporting-map.organism';

describe('ReportingOnMapComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportingOnMapComponent],
    }).compileComponents();
  }));

  it('should create the organism', () => {
    const fixture = TestBed.createComponent(ReportingOnMapComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have a paragraph text', () => {
    const fixture = TestBed.createComponent(ReportingOnMapComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.intro).toBeDefined();
  });
});
