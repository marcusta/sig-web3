#!/usr/bin/env node
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const args = process.argv.slice(2);
const WATCH = args.includes('--watch');
const SERVE = args.includes('--serve');
const PORT = 4001;

const DIST = path.join(__dirname, 'dist');
const SRC = path.join(__dirname, 'src');
const CONTENT = path.join(__dirname, 'content');
const PUBLIC = path.join(__dirname, 'public');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  const start = Date.now();

  // Clean and create dist
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Load all JSON content files
  const content = {};
  for (const file of fs.readdirSync(CONTENT)) {
    if (file.endsWith('.json')) {
      const key = path.basename(file, '.json');
      content[key] = JSON.parse(fs.readFileSync(path.join(CONTENT, file), 'utf8'));
    }
  }

  // Configure Nunjucks
  nunjucks.configure(path.join(SRC, 'templates'), {
    autoescape: true,
    noCache: true,
  });

  // Compute relative root path from output file depth
  function rootPathFor(outputFile) {
    const depth = outputFile.split('/').length - 1;
    return depth === 0 ? '.' : '..';
  }

  // Global variables available in all templates
  const globals = {
    year: new Date().getFullYear(),
    ...content,
  };

  // Define pages to render
  const pages = [
    { template: 'pages/index.njk', output: 'index.html' },
    { template: 'pages/prislista.njk', output: 'prislista/index.html' },
    { template: 'pages/oppettider.njk', output: 'oppettider/index.html' },
    { template: 'pages/faq.njk', output: 'faq/index.html' },
    { template: 'pages/tavlingar.njk', output: 'tavlingar/index.html' },
    { template: 'pages/om-oss.njk', output: 'om-oss/index.html' },
    { template: 'pages/kontakt.njk', output: 'kontakt/index.html' },
    { template: 'pages/golfshop.njk', output: 'golfshop/index.html' },
    { template: 'pages/support.njk', output: 'support/index.html' },
    { template: 'pages/hjalp.njk', output: 'hjalp/index.html' },
    { template: 'pages/integritetspolicy.njk', output: 'integritetspolicy/index.html' },
    { template: 'pages/404.njk', output: '404.html' },
  ];

  // Render pages
  for (const page of pages) {
    const html = nunjucks.render(page.template, { ...globals, rootPath: rootPathFor(page.output) });
    const outputPath = path.join(DIST, page.output);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html);
    console.log(`  Built ${page.output}`);
  }

  // Build CSS with Tailwind
  console.log('\nBuilding CSS...');
  const tailwindInput = path.join(SRC, 'css', 'input.css');
  const tailwindOutput = path.join(DIST, 'styles.css');
  execSync(
    `npx @tailwindcss/cli -i ${tailwindInput} -o ${tailwindOutput} --minify`,
    { stdio: 'inherit' }
  );

  // Copy static assets
  console.log('\nCopying static assets...');
  if (fs.existsSync(PUBLIC)) {
    copyDir(PUBLIC, DIST);
  }

  // Copy JS
  fs.copyFileSync(
    path.join(SRC, 'js', 'main.js'),
    path.join(DIST, 'main.js')
  );

  console.log(`\nBuild complete in ${Date.now() - start}ms! Output in ${DIST}`);
}

// Initial build
build();

// Dev server
if (SERVE) {
  const MIME = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
  };

  const server = http.createServer((req, res) => {
    let url = req.url.split('?')[0];

    // Try exact file, then /index.html, then 404
    let filePath = path.join(DIST, url);
    if (!path.extname(filePath)) {
      if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      } else if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      const notFound = path.join(DIST, '404.html');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : 'Not found');
      return;
    }

    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  });

  server.listen(PORT, () => {
    console.log(`\nDev server running at http://localhost:${PORT}`);
  });
}

// File watcher
if (WATCH) {
  let debounce = null;
  const rebuild = (eventType, filename) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      console.log(`\nFile changed: ${filename || 'unknown'} — rebuilding...`);
      try {
        build();
      } catch (err) {
        console.error('Build error:', err.message);
      }
    }, 200);
  };

  fs.watch(path.join(SRC, 'templates'), { recursive: true }, rebuild);
  fs.watch(path.join(SRC, 'css'), { recursive: true }, rebuild);
  fs.watch(path.join(SRC, 'js'), { recursive: true }, rebuild);
  fs.watch(CONTENT, { recursive: true }, rebuild);
  console.log('Watching for changes in src/ and content/...');
}
