const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

async function start() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    try {
        await page.goto('https://lostark.game.onstove.com/Profile/Character/바나나');
    } catch(e) {
        console.log(e);
    }

    await sleep(5);

    const Document = cheerio.load(await page.content());
    
    Document('#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__expedition').each((index, element) => {
        let itemLevel = Document(element).find('span:nth-child(2)').text();
        console.log(itemLevel);
    });

    await browser.close();
}

function sleep(sec) {
    sec = sec * 1000;
    return new Promise((resolve) => {
        setTimeout(resolve, sec);
    });
}

start();