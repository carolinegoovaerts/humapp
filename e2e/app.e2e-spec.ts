import { HomePage } from './app.po';

describe('Hum App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hum App');
  });
});
