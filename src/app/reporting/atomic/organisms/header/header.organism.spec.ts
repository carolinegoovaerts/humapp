import {TestBed} from '@angular/core/testing';
import {async} from 'q';
import {HeaderComponent} from './header.organism';

describe('HeaderComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  it('should create the organism', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Hum App'`, async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toBeDefined();
  }));
});
