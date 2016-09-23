import { StagemonCallstackVisualiserPage } from './app.po';

describe('stagemon-callstack-visualiser App', function() {
  let page: StagemonCallstackVisualiserPage;

  beforeEach(() => {
    page = new StagemonCallstackVisualiserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
