import {HomePage} from './app.po';

describe('Hum App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display title', () => {
    HomePage.navigateTo();
    expect(HomePage.getTitleText()).toEqual('Hum App');
  });

  it('should contain reporting section', () => {
    HomePage.navigateTo();
    expect(HomePage.getReportingSection().isPresent()).toBeTruthy();
  });
});
