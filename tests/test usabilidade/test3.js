//DO A SIGN UP

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

        //signup btn
        await driver.sleep(500)
        let signup_btn = await driver.findElement(By.css('#fourthDiv > a:nth-child(3)'))
        await signup_btn.click();
        
        // firstname box 
        await driver.sleep(500)
        let firstname_box = await driver.findElement(By.id('firstName'));
        await firstname_box.sendKeys('teste');
        
        // lastname box 
        await driver.sleep(500)
        let lastname_box = await driver.findElement(By.id('lastName'));
        await lastname_box.sendKeys('teste');

        //username box
        await driver.sleep(500)
        let username_box = await driver.findElement(By.id('username'));
        await username_box.sendKeys('teste12312313123');
      
        // numberStudent box 
        await driver.sleep(500)
        let numberStudent_box = await driver.findElement(By.id('number'));
        await numberStudent_box.sendKeys('00000000');
        
        // course box 
        await driver.sleep(500)
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/div[5]/select/option[3]")).click();
              
        // year box 
        await driver.sleep(500)
        await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/div[6]/select/option[1]")).click();  

        // birthdate box
        await driver.sleep(500) 
        let birthdate_box = await driver.findElement(By.id('birthDate'));
        await birthdate_box.sendKeys('20012000');
      
        // email box 
        await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[9]/input')).sendKeys('teste12312312@teste.pt');
        
        // photo box 
        let photo_box = await driver.findElement(By.id('photo'));
        await photo_box.sendKeys('photo');

        // password box
        await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[11]/input')).sendKeys('12345678');

        // confimPassword box  
        await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[12]/input')).sendKeys('12345678');

        // enterSignup btn 
        await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[14]/a')).click();

    } catch (error) {
      console.log(error)
    }
})();
  