import {browser, by, element} from 'protractor';

export class HomePage {
  static navigateTo() {
    return browser.get('/');
  }

  static getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  static getReportingMapSection() {
    return element(by.css('app-root .reporting-map'));
  }

  static getReportSection() {
    return element(by.css('app-root .report'));
  }

  static getSignUpSection() {
    return element(by.css('app-root .sign-up'));
  }
}
