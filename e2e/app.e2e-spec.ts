import { OpusPage } from './app.po';

describe('opus App', function() {
  let page: OpusPage;

  beforeEach(() => {
    page = new OpusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
