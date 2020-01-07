import { WelcomePage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: WelcomePage;

  beforeEach(() => {
    page = new WelcomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('blog-frame app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
