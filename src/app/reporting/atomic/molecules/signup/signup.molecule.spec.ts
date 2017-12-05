import {async} from "q";
import {TestBed} from "@angular/core/testing";
import {SignUpComponent} from "./signup.molecule";

describe('SignUpComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent]
    }).compileComponents();
  }));

  it('should create the molecule', () => {
    const fixture = TestBed.createComponent(SignUpComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
