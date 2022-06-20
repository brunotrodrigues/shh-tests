//RUN AVAILABLE PAGES

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
        let login_btn = await driver.findElement(By.className('link router-link-exact-active router-link-active'))
        await login_btn.click();

        // email box
        await driver.sleep(500) 
        let email_box = await driver.findElement(By.id('email'));
        await email_box.sendKeys('admin@shh.pt');
        
        // password box
        await driver.sleep(500)  
        let password_box = await driver.findElement(By.id('password'));
        await password_box.sendKeys('Esmad_2122');

        // enterLogin btn
        await driver.sleep(500)  
        let enterLogin_btn = await driver.findElement(By.xpath('/html/body/div/nav/div[5]/dialog/div/form/input'));
        await enterLogin_btn.click();

        // alert btn
        await driver.sleep(500)
        let SweatAlertOK = await driver.findElement(By.xpath("/html/body/div[2]/div/div[6]/button[1]"));
        await SweatAlertOK.click();  
      	
        //offer_help btn
        await driver.sleep(500) 
        let offer_btn = await driver.findElement(By.css("#thirdDiv > a:nth-child(1)"));
        await offer_btn.click();

        //explore btn
        await driver.sleep(500) 
        let explore_btn = await driver.findElement(By.css("#thirdDiv > a:nth-child(2)"));
        await explore_btn.click();

        //message btn
        await driver.sleep(500) 
        let message_btn = await driver.findElement(By.css("#thirdDiv > a:nth-child(3)"));
        await message_btn.click();

        // admin btn 
        await driver.sleep(500) 
        let admin_btn = await driver.findElement(By.css("#fourthDiv > a:nth-child(1)"));
        await admin_btn.click();

        //edit_profile btn
        await driver.sleep(500) 
        let editProfile_btn = await driver.findElement(By.css("#fourthDiv > a:nth-child(2)"));
        await editProfile_btn.click();
        
        //home btn
        await driver.sleep(500) 
        let home_btn = await driver.findElement(By.css("#logo"));
        await home_btn.click();

        //offer2_help btn
        await driver.sleep(500) 
        let offer2_btn = await driver.findElement(By.css("#app > div > div.container4 > div > div.routerContainer > a"));
        await offer2_btn.click();

    } catch (error) {
      console.log(error)
    }
})();
  