import {HomePage} from './app.po';
import {ElementFinder} from 'protractor';

describe('Hum App', () => {
  function assertPresent(element: ElementFinder) {
    expect(element.isPresent()).toBeTruthy().then();
  }

  it('should display title', () => {
    HomePage.navigateTo();
    expect(HomePage.getTitleText()).toEqual('Hum App').then();
  });

  it('should contain the report section', () => {
    HomePage.navigateTo();
    assertPresent(HomePage.getReportSection());
  });

  it('should contain the sign up section', () => {
    HomePage.navigateTo();
    assertPresent(HomePage.getSignUpSection());
  });

  it('should contain the map section', () => {
    HomePage.navigateTo();
    assertPresent(HomePage.getMapSection());
  });
});
