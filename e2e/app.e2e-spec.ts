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

  it('should contain reporting on map', () => {
    HomePage.navigateTo();
    expect(HomePage.getReportingOnMap().isPresent()).toBeTruthy();
  });
});
