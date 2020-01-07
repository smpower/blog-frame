import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/welcome`) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
