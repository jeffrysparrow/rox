const puppeteer = require('puppeteer');
require('dotenv').config();

const scrapeData = async (username) => {
  try {
    const browser = await puppeteer.launch( {headless: true });
    const page = await browser.newPage();

    await page.goto(process.env.URL);


    //login form
    await page.waitForTimeout(3000);
    await page.screenshot({path: '1.png'});
    await page.type('input', process.env.USERNAME);


    await page.type('[type=password]', process.env.PASSWORD)

    await page.screenshot({path: '2.png'});

    await browser.close();
  } catch (error) {
    console.error(error);
  }
}

scrapeData();