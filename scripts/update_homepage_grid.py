import json

def update_homepage_grid():
    with open('scripts/all_libas_products.json', 'r', encoding='utf-8') as f:
        products = json.load(f)

    # Select 16 top products across diverse categories
    selected = []
    # 4 Suits
    selected.extend([p for p in products if p['category'] == 'Suits'][:4])
    # 3 Kurtas
    selected.extend([p for p in products if p['category'] == 'Kurtas'][:3])
    # 3 Sarees
    selected.extend([p for p in products if p['category'] == 'Sarees'][:3])
    # 3 Dresses / Loungewear
    selected.extend([p for p in products if p['category'] in ['Dresses', 'Loungewear']][:3])
    # 3 Plus-Size
    selected.extend([p for p in products if p['category'] == 'Plus-Size'][:3])

    cards_html = []
    for p in selected:
        cat = p['category']
        title = p['name']
        price = f"₹{p['price']:,}"
        orig_price = f"₹{p['originalPrice']:,}"
        img = p['images'][0]
        discount = f"{p['discountPercentage']}% OFF"
        card = f'''        <!-- Product {p['id']} -->
        <div class="libas-card" data-cat="{cat}">
          <div class="libas-card-img-wrap">
            <img src="{img}" alt="{title}" loading="lazy">
            <span class="libas-discount-badge">{discount}</span>
          </div>
          <div class="libas-card-body">
            <div class="libas-card-title">{title}</div>
            <div class="libas-price-row">
              <span class="libas-price-now">{price}</span>
              <span class="libas-price-old">{orig_price}</span>
            </div>
            <button class="libas-add-btn" onclick="addToBag('{title}')">Add to Bag</button>
          </div>
        </div>'''
        cards_html.append(card)

    new_grid_html = '\n\n'.join(cards_html)

    with open('COMPLETE_HOMEPAGE_CODE.html', 'r', encoding='utf-8') as f:
        content = f.read()

    import re
    # Replace content of #homeProductGrid
    pattern = r'(<div class="libas-product-grid" id="homeProductGrid">)[\s\S]*?(</div>\s*</div>\s*</section>)'
    replacement = r'\1\n' + new_grid_html + r'\n      \2'
    
    updated_content = re.sub(pattern, lambda m: m.group(1) + '\n' + new_grid_html + '\n      ' + m.group(2), content)

    with open('COMPLETE_HOMEPAGE_CODE.html', 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print(f"Updated COMPLETE_HOMEPAGE_CODE.html with {len(selected)} rich products")

if __name__ == '__main__':
    update_homepage_grid()
