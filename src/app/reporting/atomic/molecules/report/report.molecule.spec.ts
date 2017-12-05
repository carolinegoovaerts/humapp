import {async} from 'q';
import {TestBed} from '@angular/core/testing';
import {ReportComponent} from './report.molecule';

describe('ReportComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
            ReportComponent
          ]
        }
      ).compileComponents();
    }
  ));

  it('should create the molecule', () => {
    const fixture = TestBed.createComponent(ReportComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
