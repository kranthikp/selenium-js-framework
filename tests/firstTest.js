const { Builder, By, Key } = require("selenium-webdriver");

async function example() {
  //launch browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to google
  await driver.get("https://google.com");

  //search selenium
  await driver.findElement(By.name("q")).sendKeys("Learn Selenium", Key.RETURN);

  //close the browser
  // await driver.quit();
}
example();
