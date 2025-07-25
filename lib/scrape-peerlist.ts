import puppeteer from "puppeteer";
import { insertProfile } from "./actions/data";

const usernames = [
  'harishij',
  'raobhaskar0222',
  'bhavishya02',
  'srkrishnan',
  'adityakmr7',
  'siddheshnakade',
  'shivani_',
  'sureshch004',
  'vatsalagarwall',
  'amoghnagaraj',
  'raobhaskar0222',
  'mansinahar2020',
  'abhassen44',
  'parthkapoordev',
  'j4yke',
  'abhishek1350',
  'kodwings',
  'mraxays',
  'rakibulism',
  'himanshuhere',
  'nileshhaldar98',
  'ajinkya',
  'amaansyed27',
  'shubhambhattog',
  'sunandanatrajan',
  'vipulbadwaik',
  'vaishnavisubash',
  'akashgunsola',
  'advaith17',
  'krishnasairaj',
  'samthing',
  'theanshulsingh',
  'sumitk999',
  'adityaoberai',
  'guillaumeduhan',
  'abhigg',
  'planet_domi',
  'mjdhamelya',
  'sunny',
  'srishti_singh',
  'manuarora',
  'sudhanshuxsingh',
  'pranjalmishra',
  'csarmiento',
  'arikchakma',
  'tushardesai',
  'jiang',
  'gkotte',
  'omshree',
  'kaouxd', 
  'undergrid',
  'harryjosh242',
  'temi_lolu',
  'jamie',
  'param302',
  'aditem',
  'gauravgogia',
  'shaurya99',
  'vandana_',
  'igorblink',
  'aasheesh',
  'thrive',
  'skreepao',
  'arsh_13',
  'ayushmangarg',
  'jedipixels',
  'itsrajnandinit',
  'bhaveshrawat',
  'raj_savaliya',
];

export const scrapeProfile = async (username: any) => {
  let browser;
  try {
    browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();

    const url = `https://peerlist.io/${username}`;

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    await page.waitForSelector('h1.font-semibold.text-lg', { timeout: 15000 });

    const data = await page.evaluate(() => {
      const getText = (selector: any) => document.querySelector(selector)?.innerText || '';
 
      const profilephoto = document.querySelector('img.rounded-full.w-16.h-16.bg-center.bg-no-repeat')?.getAttribute('src') || ''
      const name = getText('h1.font-semibold.text-lg');
      const bio = getText('h2.text-gray-1k');

      // Tags shown under profile
      const tagElements = Array.from(
        document.querySelectorAll('div.flex.flex-wrap > *')
      );
      const profileTags = tagElements
        .map((el) => (el as HTMLElement).innerText.trim())
        .filter(Boolean);
    
      const followers = profileTags[0];
      const joined = profileTags[1];

      // Extract real URLs from <a> tags only
      const links = tagElements
        .filter((el) => el.querySelector('a'))
        .map((el) => (el.querySelector('a') as HTMLAnchorElement)?.href)
        .filter(Boolean);

      // Skill tags inside flex-shrink buttons
      const skills = Array.from(document.querySelectorAll('div.flex-shrink-0 button'))
        .map((el) => (el as HTMLElement).innerText.trim())
        .filter(Boolean);
        
      return {
        profilephoto,
        name,
        bio,
        followers,
        joined,
        links,
        skills,
      };
    });

    return data;
  } catch (error: any) {
    console.error('Error scraping:', error.message);
    return null;
  } finally {
    if (browser) await browser.close();
  }
};

export const run = async () => {
  for (const username of usernames) {
    const alldata = await scrapeProfile(username);
    
    if (!alldata) {
      console.error(`❌ No data found for ${username}`);
      continue;
    }

    console.log(`✅ Scraped data for ${username}:`);

    insertProfile({ data: alldata, username });
  }
};