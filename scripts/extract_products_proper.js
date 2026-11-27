const fs = require('fs');
const content = fs.readFileSync('src/data/libasProducts.ts', 'utf8');

// Use typescript or simple eval-safe extraction
const cleaned = content
  .replace(/import\s+[^;]+;/g, '')
  .replace(/export\s+const\s+LIBAS_PRODUCTS\s*:\s*LibasProduct\[\]\s*=\s*/, 'const LIBAS_PRODUCTS = ')
  .concat('\nmodule.exports = LIBAS_PRODUCTS;');

fs.writeFileSync('scripts/temp_eval.js', cleaned);
const products = require('./temp_eval.js');
console.log('Real products extracted:', products.length);
products.forEach(p => console.log(p.id, '|', p.category, '|', p.subCategory, '|', p.name, '| Rs', p.price));
fs.writeFileSync('scripts/all_libas_products.json', JSON.stringify(products, null, 2));
