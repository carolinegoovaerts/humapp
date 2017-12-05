import {browser, by, element} from 'protractor';

export class HomePage {
  static navigateTo() {
    return browser.get('/');
  }

  static getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  static getReportingSection() {
    return element(by.css('app-root #reporting'));
  }
}
