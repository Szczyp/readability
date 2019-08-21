#!/urs/bin/env node

const fs = require('fs');
const JSDOM = require('jsdom').JSDOM;
const Readability = require('readability');

const html = fs.readFileSync(0, 'utf-8');
const doc = new JSDOM(html);
const reader = new Readability(doc.window.document);
const article = reader.parse();
const json = JSON.stringify(article);

console.log(json);
