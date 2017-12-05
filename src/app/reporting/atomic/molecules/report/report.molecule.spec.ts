import {async} from 'q';
import {TestBed} from '@angular/core/testing';
import {ReportComponent} from './report.molecule';

describe('ReportComponent', () => {
  let component: ReportComponent;

  function componentInstance() {
    return TestBed.createComponent(ReportComponent).debugElement.componentInstance;
  }

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
            ReportComponent
          ]
        }
      ).compileComponents();
    component = componentInstance();
    }
  ));

  it('should create the molecule', () => {
    expect(component).toBeTruthy();
  });

  it('should have comment', () => {
    expect(component.comment.length).toBeGreaterThan(0);
  });
});
