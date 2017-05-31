import { RefresherPage } from './app.po';

describe('refresher App', () => {
  let page: RefresherPage;

  beforeEach(() => {
    page = new RefresherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
