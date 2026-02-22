#!/usr/bin/env node
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIST = path.join(__dirname, 'dist');
const SRC = path.join(__dirname, 'src');
const CONTENT = path.join(__dirname, 'content');
const PUBLIC = path.join(__dirname, 'public');
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
const env = nunjucks.configure(path.join(SRC, 'templates'), {
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
if (fs.existsSync(PUBLIC)) {
  copyDir(PUBLIC, DIST);
}

// Copy JS
fs.copyFileSync(
  path.join(SRC, 'js', 'main.js'),
  path.join(DIST, 'main.js')
);

console.log(`\nBuild complete! Output in ${DIST}`);
