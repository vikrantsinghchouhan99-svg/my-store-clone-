import json

with open('scripts/all_libas_products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

def get_product_card_liquid(p):
    title = p['name'].replace("'", "\\'")
    price = f"₹{p['price']:,}"
    orig_price = f"₹{p['originalPrice']:,}"
    img = p['images'][0]
    return f"""        {{% render 'product-card', title: '{title}', price: '{price}', original_price: '{orig_price}', image: '{img}' %}}"""

suits_cards = "\n".join(get_product_card_liquid(p) for p in products if p['category'] == 'Suits')
kurtas_cards = "\n".join(get_product_card_liquid(p) for p in products if p['category'] == 'Kurtas')
sarees_cards = "\n".join(get_product_card_liquid(p) for p in products if p['category'] == 'Sarees')
dresses_cards = "\n".join(get_product_card_liquid(p) for p in products if p['category'] == 'Dresses')
lounge_cards = "\n".join(get_product_card_liquid(p) for p in products if p['category'] == 'Loungewear')
plus_cards = "\n".join(get_product_card_liquid(p) for p in products if p['category'] == 'Plus-Size')
sale_cards = "\n".join(get_product_card_liquid(p) for p in products if p['category'] == 'Sale')

with open('shopify-theme/sections/main-404.liquid', 'r', encoding='utf-8') as f:
    content = f.read()

import re

def replace_grid(section_id, new_cards, text):
    pattern = rf'(<div id="{section_id}"[\s\S]*?<div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">)[\s\S]*?(</div>\s*</div>\s*</div>)'
    return re.sub(pattern, lambda m: m.group(1) + '\n' + new_cards + '\n      ' + m.group(2), text, count=1)

content = replace_grid('view-suits', suits_cards, content)
content = replace_grid('view-kurtas', kurtas_cards, content)
content = replace_grid('view-sarees', sarees_cards, content)
content = replace_grid('view-dresses', dresses_cards, content)
content = replace_grid('view-loungewear', lounge_cards, content)
content = replace_grid('view-plus-size', plus_cards, content)
content = replace_grid('view-sale', sale_cards, content)

with open('shopify-theme/sections/main-404.liquid', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated shopify-theme/sections/main-404.liquid with full product cards for all 7 categories!")
