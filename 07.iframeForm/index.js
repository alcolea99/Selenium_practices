const {Builder, By, Key} = require("selenium-webdriver");

const driver= new Builder().forBrowser("firefox").build();

async function iframeForm(){
    try { //Alcolea
        await driver.get("http://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        await driver.switchTo().frame(0);
        await driver.findElement(By.xpath("//input[@aria-labelledby='i1']"))
            .sendKeys("Sergio Alcolea");
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(
            Key.chord(
                Key.ARROW_DOWN,
                Key.ARROW_DOWN,
                Key.ARROW_DOWN,
                Key.ARROW_DOWN
            )
            ).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "08")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "10")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "1991")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "Quiero acabar ya el curso")).perform();
        //await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    } catch (error) {
        console.log(error);
    }
}
iframeForm();