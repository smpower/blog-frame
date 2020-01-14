import { browser, logging } from 'protractor';
import { ToolbarComponent } from './toolbar.po';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;

  beforeEach(() => {
    component = new ToolbarComponent();
    component.navigateTo();
  });

  it('should display and click Home link', () => {
    expect(component.getHomeTitle().text).toEqual('Home');
    component.getHomeTitle().target.click();
    expect(browser.getTitle()).toEqual('Blog Frame - Home');
  });

  it('should display and click Welcome link', () => {
    expect(component.getWelcomeTitle().text).toEqual('Welcome');
    component.getWelcomeTitle().target.click();
    expect(browser.getTitle()).toEqual('Blog Frame - Welcome');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
