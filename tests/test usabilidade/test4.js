//DO A SIGN IN WITHOUT AN ACCOUNT

const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('chromedriver.exe');

(async function openChromeTest() {
    try {
        let driver = await new Builder()
                    .setChromeOptions(service)
                    .forBrowser('chrome')
                    .build();

        await driver.get('http://localhost:8080/'); 

        await driver.manage().window().maximize();

        //login btn
        await driver.sleep(500)
        await driver.findElement(By.xpath('/html/body/div/nav/div[4]/a[4]')).click();      
      
        // email box 
        await driver.sleep(500)
        await driver.findElement(By.xpath('/html/body/div/nav/div[5]/dialog/div/form/div[1]/input')).sendKeys('teste@shh.pt');

        // password box
        await driver.sleep(500)
        await driver.findElement(By.xpath('/html/body/div/nav/div[5]/dialog/div/form/div[2]/input')).sendKeys('Esmad_2122');

        // enterSignup btn 
        await driver.sleep(500)
        await driver.findElement(By.xpath('/html/body/div/nav/div[5]/dialog/div/form/input')).click();

    } catch (error) {
      console.log(error)
    }
})();
  