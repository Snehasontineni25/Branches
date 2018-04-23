import { GitbranchesPage } from './app.po';

describe('gitbranches App', function() {
  let page: GitbranchesPage;

  beforeEach(() => {
    page = new GitbranchesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
