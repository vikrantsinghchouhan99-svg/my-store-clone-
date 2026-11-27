const fs = require('fs');
const content = fs.readFileSync('src/data/libasProducts.ts', 'utf8');
const lines = content.split('\n');
const products = [];
let current = null;

for (const line of lines) {
  const idMatch = line.match(/id:\s*'([^']+)'/);
  if (idMatch) {
    if (current) products.push(current);
    current = { id: idMatch[1] };
    continue;
  }
  if (!current) continue;
  const nameMatch = line.match(/name:\s*'([^']+)'/);
  if (nameMatch) current.name = nameMatch[1];
  const catMatch = line.match(/category:\s*'([^']+)'/);
  if (catMatch) current.category = catMatch[1];
  const subCatMatch = line.match(/subCategory:\s*'([^']+)'/);
  if (subCatMatch) current.subCategory = subCatMatch[1];
  const priceMatch = line.match(/price:\s*([0-9]+)/);
  if (priceMatch) current.price = parseInt(priceMatch[1]);
  const origPriceMatch = line.match(/originalPrice:\s*([0-9]+)/);
  if (origPriceMatch) current.originalPrice = parseInt(origPriceMatch[1]);
  const imgMatch = line.match(/'(https:\/\/images\.unsplash\.com\/[^']+)'/);
  if (imgMatch && !current.image) current.image = imgMatch[1];
  const extraLoveMatch = line.match(/isExtraLove:\s*(true|false)/);
  if (extraLoveMatch) current.isExtraLove = extraLoveMatch[1] === 'true';
}
if (current) products.push(current);

console.log('Total products:', products.length);
products.forEach(p => console.log(p.id, '|', p.category, '|', p.subCategory, '|', p.name, '| Rs', p.price));
fs.writeFileSync('scripts/extracted_products.json', JSON.stringify(products, null, 2));
