import { browser, by, element } from 'protractor';

export class ToolbarComponent {
  HomeLinkElement = element(by.css('.spacer .nav-link.home'));
  WelcomeLinkElement = element(by.css('.spacer .nav-link.welcome'));

  navigateTo() {
    return browser.get(`${browser.baseUrl}`) as Promise<any>;
  }

  getHomeTitle() {
    return {
      target: this.HomeLinkElement,
      text: this.HomeLinkElement.getText() as Promise<any>,
    };
  }

  getWelcomeTitle() {
    return {
      target: this.WelcomeLinkElement,
      text: this.WelcomeLinkElement.getText() as Promise<any>,
    };
  }
}
