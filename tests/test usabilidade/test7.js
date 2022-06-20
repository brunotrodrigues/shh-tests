//CREATE A POST

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
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/nav/div[4]/a[4]')).click();     
      
        // email box 
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/nav/div[5]/dialog/div/form/div[1]/input')).sendKeys('admin@shh.pt');

        // password box
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/nav/div[5]/dialog/div/form/div[2]/input')).sendKeys('Esmad_2122');

        // enterSignup btn 
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/nav/div[5]/dialog/div/form/input')).click();

        // alert btn
        await driver.sleep(2000)
        let SweatAlertOK = await driver.findElement(By.xpath("/html/body/div[2]/div/div[6]/button[1]"));
        await SweatAlertOK.click();  

        // offerHelp btn
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/nav/div[3]/a[1]')).click();
        
        // category btn 
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/div/div[2]/div/label[2]')).click();

        // smallDesc box
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/div/div[3]/textarea')).sendKeys('este é  um post de video');

        // bigDesc box
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/div/div[4]/textarea')).sendKeys('este é  um post de video GRANDE');

        // faq box
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/div/div[5]/textarea')).sendKeys('Perguntas e respostas');

        // photo box
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/div/div[6]/input')).sendKeys('https://giphy.com/explore/funny-meme');

        // category btn 
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/div/div/div[7]/a')).click();

        // alert btn
        await driver.sleep(2000)
        let SweatAlertOK2 = await driver.findElement(By.xpath("/html/body/div[2]/div/div[6]/button[1]"));
        await SweatAlertOK2.click();  

    } catch (error) {
      console.log(error)
    }
})();
 