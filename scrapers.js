const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [e1] = await page.$x('//*[@id="landingImage"]');
  const src = await e1.getProperty('src');
  const Image = await src.jsonValue();

  const [e2] = await page.$x('//*[@id="productTitle"]');
  const txt = await e2.getProperty('textContent');
  const Title = await txt.jsonValue();

  const [e3] = await page.$x('//*[@id="priceblock_ourprice"]');
  const amount = await e3.getProperty('textContent');
  const Price = await amount.jsonValue();

  console.log({Image, Title, Price});

  browser.close();
}

scrapeProduct('https://www.amazon.com.br/dp/B085W8XNSP/ref=QA33ASIN_en_CA_3?pf_rd_r=SKN2AE3FRVH359ZZAJC0&pf_rd_p=666a341a-09df-4a36-b846-bc167637c2b0&pf_rd_m=A1ZZFT5FULY4LN&pf_rd_s=merchandised-search-4&pf_rd_t=&pf_rd_i=17882365011');
