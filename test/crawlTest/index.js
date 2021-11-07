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
    
    // 원정대 레벨
    let levelInfoExpedition = Document('#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info > div.level-info__expedition').find('span:nth-child(2)').text();
    console.log(levelInfoExpedition);

    // 전투 레벨
    let levelInfoItem = Document('#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info > div.level-info__item').find('span:nth-child(2)').text();;
    console.log(levelInfoItem);

    // 장착 아이템 레벨
    let itemLevel = Document('#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__expedition').find('span:nth-child(2)').text();
    console.log(itemLevel);

    // 달성 아이템 레벨
    let itemInfoExpedition = Document('#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__item').find('span:nth-child(2)').text();
    console.log(itemInfoExpedition);
    
    // 소속 서버
    Document('#expand-character-list').each((index, element) => {
        let serverName = Document(element).find('strong').text();
        console.log(serverName);
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