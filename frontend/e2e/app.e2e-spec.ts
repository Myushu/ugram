import { UgramPage } from './app.po';

describe('ugram App', function() {
  let page: UgramPage;

  beforeEach(() => {
    page = new UgramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
