import { NightBiteAppPage } from './app.po';

describe('night-bite-app App', () => {
  let page: NightBiteAppPage;

  beforeEach(() => {
    page = new NightBiteAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
