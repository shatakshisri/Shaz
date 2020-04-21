import { browser, by, element } from "protractor";

export class AppPage {
  public navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public getTitleText() {
    return element(by.css("app-root")).getText() as Promise<string>;
  }
}
