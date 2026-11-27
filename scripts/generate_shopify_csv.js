const fs = require('fs');

const products = JSON.parse(fs.readFileSync('scripts/all_libas_products.json', 'utf8'));

const headers = [
  'Handle',
  'Title',
  'Body (HTML)',
  'Vendor',
  'Product Category',
  'Type',
  'Tags',
  'Published',
  'Option1 Name',
  'Option1 Value',
  'Variant SKU',
  'Variant Grams',
  'Variant Inventory Tracker',
  'Variant Inventory Qty',
  'Variant Inventory Policy',
  'Variant Fulfillment Service',
  'Variant Price',
  'Variant Compare At Price',
  'Variant Requires Shipping',
  'Variant Taxable',
  'Image Src',
  'Image Position',
  'Image Alt Text',
  'Status'
];

function escapeCsv(val) {
  if (val === undefined || val === null) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

const rows = [headers.map(escapeCsv).join(',')];

products.forEach(p => {
  const handle = p.slug || p.id;
  const title = p.name;
  const body = `<p>${p.description || p.tagline || ''}</p><p><strong>Fabric:</strong> ${p.fabric || 'Pure Luxury Blend'}</p><p><strong>Occasion:</strong> ${p.occasion || 'Festive'}</p>`;
  const vendor = 'Libas';
  const category = 'Apparel & Accessories > Clothing > Traditional & Ceremonial Clothing';
  const type = p.category;
  const tags = `${p.category}, ${p.subCategory || ''}, Festive, Libas Editorial`.trim();
  const price = (p.price).toFixed(2);
  const compareAtPrice = (p.originalPrice).toFixed(2);
  const sizes = p.sizes || ['S', 'M', 'L', 'XL'];

  sizes.forEach((s, idx) => {
    const isFirstVariant = idx === 0;
    const row = [
      handle,
      isFirstVariant ? title : '',
      isFirstVariant ? body : '',
      isFirstVariant ? vendor : '',
      isFirstVariant ? category : '',
      isFirstVariant ? type : '',
      isFirstVariant ? tags : '',
      'TRUE',
      'Size',
      s,
      `${p.id.toUpperCase()}-${s}`,
      '500',
      'shopify',
      '20',
      'deny',
      'manual',
      price,
      compareAtPrice,
      'TRUE',
      'TRUE',
      isFirstVariant && p.images && p.images[0] ? p.images[0] : (p.images && p.images[idx] ? p.images[idx] : ''),
      isFirstVariant ? '1' : (idx < (p.images ? p.images.length : 0) ? String(idx + 1) : ''),
      isFirstVariant ? title : '',
      'active'
    ];
    rows.push(row.map(escapeCsv).join(','));
  });
});

const csvOutput = rows.join('\n');
fs.writeFileSync('shopify_products_import.csv', csvOutput, 'utf8');
console.log('Successfully generated shopify_products_import.csv! Rows:', rows.length);
