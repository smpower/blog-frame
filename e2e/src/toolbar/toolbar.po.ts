import { browser, by, element } from 'protractor';

export class ToolbarComponent {
  
  navigateTo() {
    return browser.get(`${browser.baseUrl}`) as Promise<any>;
  }
  
  HomeLinkElement = element(by.css('.spacer .nav-link.home'));
  getHomeTitle() {
    return {
      target: this.HomeLinkElement,
      text: this.HomeLinkElement.getText() as Promise<any>
    };
  }
  
  WelcomeLinkElement = element(by.css('.spacer .nav-link.welcome'));
  getWelcomeTitle() {
    return {
      target: this.WelcomeLinkElement,
      text: this.WelcomeLinkElement.getText() as Promise<any>
    };
  }
}
