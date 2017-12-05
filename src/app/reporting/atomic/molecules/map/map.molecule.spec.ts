import {TestBed} from "@angular/core/testing";
import {async} from "q";
import {MapComponent} from "./map.molecule";
import {ReportComponent} from "../report/report.molecule";

describe('ReportComponent', () => {
  let component: MapComponent;

  function componentInstance() {
    return TestBed.createComponent(MapComponent).debugElement.componentInstance;
  }

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
            MapComponent
          ]
        }
      ).compileComponents();
      component = componentInstance();
    }
  ));

  it('should create the molecule', () => {
    expect(component).toBeTruthy();
  });

  it('should have a paragraph text', () => {
    expect(component.comment.length).toBeGreaterThan(3);
  });
});
