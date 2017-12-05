import {async} from "q";
import {TestBed} from "@angular/core/testing";
import {SignUpComponent} from "./signup.molecule";

describe('SignUpComponent', () => {
  let component: SignUpComponent;

  function componentInstance() {
    return TestBed.createComponent(SignUpComponent).debugElement.componentInstance;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent]
    }).compileComponents();
    component = componentInstance();
  }));

  it('should create the molecule', () => {
    expect(component).toBeTruthy();
  });

  it('should contain have as text sign up', () => {
    expect(component.comment.length).toBeGreaterThan(3);
  })
});
