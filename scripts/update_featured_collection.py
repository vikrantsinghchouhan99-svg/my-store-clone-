import json

with open('scripts/all_libas_products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# Pick 16 products for trending featured collection
selected = []
selected.extend([p for p in products if p['category'] == 'Suits'][:4])
selected.extend([p for p in products if p['category'] == 'Kurtas'][:3])
selected.extend([p for p in products if p['category'] == 'Sarees'][:3])
selected.extend([p for p in products if p['category'] in ['Dresses', 'Loungewear']][:3])
selected.extend([p for p in products if p['category'] == 'Plus-Size'][:3])

cards_html = []
for p in selected:
    cat = p['category']
    title = p['name'].replace("'", "\\'")
    price = f"₹{p['price']:,}"
    orig_price = f"₹{p['originalPrice']:,}"
    img = p['images'][0]
    cards_html.append(f"""      <div data-trend-category="{cat}">
        {{% render 'product-card',
          title: '{title}',
          price: '{price}',
          original_price: '{orig_price}',
          image: '{img}'
        %}}
      </div>""")

new_grid = "\n".join(cards_html)

with open('shopify-theme/sections/featured-collection.liquid', 'r', encoding='utf-8') as f:
    content = f.read()

import re
pattern = r'(<div id="trendProductsGrid" class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">)[\s\S]*?(</div>\s*</div>\s*</section>)'
new_content = re.sub(pattern, lambda m: m.group(1) + '\n' + new_grid + '\n    ' + m.group(2), content, count=1)

with open('shopify-theme/sections/featured-collection.liquid', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated featured-collection.liquid with {len(selected)} products")
