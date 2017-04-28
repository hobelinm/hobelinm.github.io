import { BelinAppPage } from './app.po';

describe('belin-app App', () => {
  let page: BelinAppPage;

  beforeEach(() => {
    page = new BelinAppPage();
  });

  it('should display message saying "Hugo Belin: Work in progress!"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hugo Belin: Work in progress!');
  });
});
