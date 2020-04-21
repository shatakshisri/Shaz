import { browser, by, element, logging } from "protractor";
import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
  it("Should navigate to login page", () => {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:4200");
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/");
  });
  it("login component", () => {
    const username = element(by.name("username"));
    const password = element(by.name("password"));
    username.sendKeys("Shaz97");
    browser.sleep(1000);
    password.sendKeys("admin123");
    const button = element(by.name("lSubmit"));
    button.click();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toContain("dashboard");
  });
  it("Should open orders", () => {
    browser.sleep(1000);
    const icon = element(by.name("orders"));
    icon.click();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toContain("orders");
  });
  it("Should go back to dashboard", () => {
    browser.sleep(1000);
    const icon = element(by.name("back"));
    icon.click();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toContain("dashboard");
  });
  it("Should logout", () => {
    browser.sleep(1000);
    const icon = element(by.name("logout"));
    icon.click();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/");
  });

});
