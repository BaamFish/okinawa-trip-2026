import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const base='/okinawa-trip-2026/';
const html=fs.readFileSync('dist/index.html','utf8');
assert.ok(!html.includes('/src/main.jsx'),'Do not deploy the development entry.');
for(const [,ref] of html.matchAll(/(?:src|href)="([^"]+)"/g)){if(ref.startsWith('https:'))continue;const file=ref.startsWith(base)?ref.slice(base.length):ref.replace(/^\.\//,'');if(ref.includes('/assets/'))assert.ok(ref.startsWith(base));assert.ok(fs.existsSync(path.join('dist',file)),`Missing ${ref}`)}
const data=JSON.parse(fs.readFileSync('src/data/itinerary.json','utf8'));
const sw=fs.readFileSync('dist/sw.js','utf8');
for(const day of data.days)for(const item of day.items){assert.ok(fs.existsSync(`dist/images/${item.image}`));assert.ok(sw.includes(`images/${item.image}`))}
assert.ok(sw.includes('images/kouri.webp'));
const manifest=JSON.parse(fs.readFileSync('dist/manifest.webmanifest','utf8'));
for(const icon of manifest.icons)assert.ok(fs.existsSync(`dist/${icon.src}`));
console.log('Verified production entry, /okinawa-trip-2026/ assets, itinerary images, manifest and offline precache.');
