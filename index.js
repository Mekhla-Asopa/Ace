//import { Builder, By, Key, until } from "selenium-webdriver";

const {Builder, By, Key, until} = require("selenium-webdriver");
async function example(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://qa.aceinvoice.com/sign_in");
    await driver.findElement(By.name("email")).sendKeys("sam@example.com");
    await driver.findElement(By.name("password")).sendKeys("welcome", Key.ENTER );

}
example();
     
