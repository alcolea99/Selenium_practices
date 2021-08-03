const {Builder, By} = require("selenium-webdriver");

const driver= new Builder().forBrowser("firefox").build();


async function dropForm(){
    try {//Alcolea
        await driver.get("http://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        const select1= await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"));
        await select1.click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();

        await select1.click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="2: 'opel'"]`)).click();

        const select3= await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button"));
        await select3.click();
        await driver.findElement(By.xpath("//nb-option[@value='3']")).click();

        const select4= await driver.findElement(By.xpath("//select[@formcontrolname='select4']/button"));
        await select4.click();
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']/option[@value='audi']")).click();
        await driver.findElement(By.xpath("//button[@id='submit'")).click();
        
    } catch (error) {
        console.log(error);
    }   
}
dropForm();











// await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("Alcolea");
// await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("Esta practica es mia!");
// await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
// await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label::span")).click();
// await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label::span")).click();


// await driver.findElement(By.css("#description")).sendKeys("Description debe tener 20 letras");
//         await (await driver.findElement(By.css("div:nth-child(2) > label >span.custom-control-indicador"))).click();

// async function openWebsites(){
//     try {
//         await driver.get("http://yahoo.com");
//         await driver.get("http://google.com");
//     } catch (error) {
//         console.log(error);
//     }   
// }

// openWebsites();





















// const {Builder} = require("selenium-webdriver");
// const firefox= require("selenium-webdriver/firefox");
// const proxy = require("selenium-webdriver/proxy");
// const options = new firefox.Options();

// const proxyServer= "77.68.29.157:80"

// options.setProfile("./SeleniumAlcolea");

// const driver= new Builder()
// .forBrowser("firefox")
// .setFirefoxOptions(options)
// .setProxy(proxy.manual({
//     http: proxyServer,
//     https: proxyServer
// }))
// .build();


// driver.get("http://google.com");



// 95.17.32.236 
// options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads");
// options.setPreference("browser.download.folderList", 2);
// options.setPreference("browser.helperApps.neverAsk.saveToDisk", "aplication/x-csv");