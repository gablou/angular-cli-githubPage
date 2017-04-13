import { AngularCliGithubPagePage } from './app.po';

describe('angular-cli-github-page App', () => {
  let page: AngularCliGithubPagePage;

  beforeEach(() => {
    page = new AngularCliGithubPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
