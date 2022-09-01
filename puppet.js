const puppeteer = require('puppeteer');
require('dotenv').config();

const scrapeData = async (username) => {
  try {
    const browser = await puppeteer.launch( {headless: true });
    const page = await browser.newPage();

    await page.goto(process.env.URL);


    //login
    await page.waitForSelector('input');
    await page.type('input', process.env.USERNAME);
    await page.type('[type=password]', process.env.PASSWORD)
    await page.click('[type=button]');
    await page.waitForTimeout(5000);

    //navigate to orders page
    await page.waitForSelector('.forceCommunityThemeNavTrigger')
    await page.click('.forceCommunityThemeNavTrigger');
    await page.waitForSelector('[id="1"]');
    await page.click('[id="1"]');

    //navigate to printable page
    await page.goto(process.env.PRINT_URL);
    await page.waitForTimeout(10000);
    await page.screenshot({path: 'printable.png'});





    await browser.close();
  } catch (error) {
    console.error(error);
  }
}

scrapeData();