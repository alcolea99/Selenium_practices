const {Builder, By} = require("selenium-webdriver");

const driver= new Builder().forBrowser("firefox").build();

async function fileUpload(){
    try { //Alcolea
        await driver.get("http://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname+"\\imagen3.jfif");
        await driver.findElement(By.id("submit")).click();
    } catch (error) {
        console.log(error);
    }
}

fileUpload();