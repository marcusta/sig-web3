const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const BASE_URL = 'https://www.swedenindoorgolf.se';
const ALT_BASE_URL = 'https://swedenindoorgolf.se';
const OUTPUT_DIR = path.join(__dirname, 'downloaded_site');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

const visited = new Set();
const queue = [BASE_URL];

async function downloadPage(url) {
  if (visited.has(url)) return;
  visited.add(url);

  console.log(`Downloading: ${url}`);

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
      }
    });

    const contentType = response.headers['content-type'];
    if (!contentType || !contentType.includes('text/html')) {
      // If it's an asset (image/css/pdf), just save it
      await saveAsset(url, response.data);
      return;
    }

    const $ = cheerio.load(response.data);

    // Save current page
    saveHtml(url, response.data);

    // Find links
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href) {
        const absoluteUrl = resolveUrl(url, href);
        if (absoluteUrl && (absoluteUrl.startsWith(BASE_URL) || absoluteUrl.startsWith(ALT_BASE_URL)) && !visited.has(absoluteUrl)) {
          queue.push(absoluteUrl);
        }
      }
    });

  } catch (error) {
    console.error(`Failed to download ${url}: ${error.message}`);
  }
}

function resolveUrl(base, relative) {
  try {
    return new URL(relative, base).href;
  } catch (e) {
    return null;
  }
}

function getLocalPath(url) {
  const parsed = new URL(url);
  let pathname = parsed.pathname;

  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  } else if (!path.extname(pathname)) {
    pathname += '/index.html';
  }

  // Handle query params? Ignore for now

  const filePath = path.join(OUTPUT_DIR, pathname);
  return filePath;
}

function saveHtml(url, content) {
  const filePath = getLocalPath(url);
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
}

async function saveAsset(url, data) {
  // For now, let's just handle HTML pages as priority
  // Implementing full asset scraper is complex without a library like website-scraper
}

async function run() {
  while (queue.length > 0) {
    const url = queue.shift();
    await downloadPage(url);
  }
  console.log('Download complete.');
}

run();
