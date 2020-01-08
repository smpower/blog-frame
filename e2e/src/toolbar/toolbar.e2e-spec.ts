import { browser, logging } from 'protractor';
import { ToolbarComponent } from './toolbar.po';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;

  beforeEach(() => {
    component = new ToolbarComponent;
    component.navigateTo();
  });

  it('should click Home link', () => {
    component.getHomeTitle().target.click();
    expect(component.getHomeTitle().text).toEqual('Home');
  });

  it('should click Welcome link', () => {
    component.getWelcomeTitle().target.click();
    expect(component.getWelcomeTitle().text).toEqual('Welcome');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
})
