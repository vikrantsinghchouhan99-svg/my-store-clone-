import json

with open('scripts/all_libas_products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

def get_product_card_liquid(p):
    title = p['name'].replace("'", "\\'")
    price = f"₹{p['price']:,}"
    orig_price = f"₹{p['originalPrice']:,}"
    img = p['images'][0]
    return f"""      {{% render 'product-card',
        title: '{title}',
        price: '{price}',
        original_price: '{orig_price}',
        image: '{img}'
      %}}"""

# 1. Update category-suits.liquid (10 Suits)
suits = [p for p in products if p['category'] == 'Suits']
suits_cards = "\n".join(get_product_card_liquid(p) for p in suits)
suits_content = f"""<section id="suits" class="py-14 bg-white border-b border-[#E6E6E6]">
  <div class="container">
    
    <!-- Section Header -->
    <div class="flex flex-col sm:flex-row items-baseline justify-between mb-8 border-b border-[#E6E6E6] pb-4 gap-4">
      <div>
        <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold block">
          CATEGORY • SUITS & SETS
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#252525] mt-1">
          Anarkali, Sharara & Palazzo Suit Sets
        </h2>
        <p class="text-xs text-[#737373] mt-1">
          From magnificent wedding Anarkalis to breathable everyday cotton palazzos, explore our hallmark festive suit sets.
        </p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#71006A]">Showing {len(suits)} Hallmark Ensembles</span>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
{suits_cards}
    </div>
  </div>
</section>

{{% schema %}}
{{
  "name": "Category Suits",
  "settings": []
}}
{{% endschema %}}
"""
with open('shopify-theme/sections/category-suits.liquid', 'w', encoding='utf-8') as f:
    f.write(suits_content)

# 2. Update category-kurtas.liquid (9 Kurtas)
kurtas = [p for p in products if p['category'] == 'Kurtas']
kurtas_cards = "\n".join(get_product_card_liquid(p) for p in kurtas)
kurtas_content = f"""<section id="kurtas" class="py-14 bg-[#FAF7F9] border-b border-[#E6E6E6]">
  <div class="container">
    
    <!-- Section Header -->
    <div class="flex flex-col sm:flex-row items-baseline justify-between mb-8 border-b border-[#E6E6E6] pb-4 gap-4">
      <div>
        <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold block">
          CATEGORY • KURTAS & KURTIS
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#252525] mt-1">
          Artisan Kurtas & Daily Tunics
        </h2>
        <p class="text-xs text-[#737373] mt-1">
          Hand block prints, woven Chanderi silks, and breathable everyday cotton kurtis.
        </p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#71006A]">Showing {len(kurtas)} Artisan Kurtas</span>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
{kurtas_cards}
    </div>
  </div>
</section>

{{% schema %}}
{{
  "name": "Category Kurtas",
  "settings": []
}}
{{% endschema %}}
"""
with open('shopify-theme/sections/category-kurtas.liquid', 'w', encoding='utf-8') as f:
    f.write(kurtas_content)

# 3. Update category-sarees.liquid (9 Sarees)
sarees = [p for p in products if p['category'] == 'Sarees']
sarees_cards = "\n".join(get_product_card_liquid(p) for p in sarees)
sarees_content = f"""<section id="sarees" class="py-14 bg-white border-b border-[#E6E6E6]">
  <div class="container">
    
    <!-- Section Header -->
    <div class="flex flex-col sm:flex-row items-baseline justify-between mb-8 border-b border-[#E6E6E6] pb-4 gap-4">
      <div>
        <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold block">
          CATEGORY • SAREES
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#252525] mt-1">
          Designer Sarees & 1-Minute Drapes
        </h2>
        <p class="text-xs text-[#737373] mt-1">
          Sheer tissue organza, pre-pleated ready-to-wear, and heirloom Banarasi zari weaves.
        </p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#71006A]">Showing {len(sarees)} Curated Drapes</span>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
{sarees_cards}
    </div>
  </div>
</section>

{{% schema %}}
{{
  "name": "Category Sarees",
  "settings": []
}}
{{% endschema %}}
"""
with open('shopify-theme/sections/category-sarees.liquid', 'w', encoding='utf-8') as f:
    f.write(sarees_content)

# 4. Update category-dresses.liquid (8 Dresses)
dresses = [p for p in products if p['category'] == 'Dresses']
dresses_cards = "\n".join(get_product_card_liquid(p) for p in dresses)
dresses_content = f"""<section id="dresses" class="py-14 bg-[#FAF7F9] border-b border-[#E6E6E6]">
  <div class="container">
    
    <!-- Section Header -->
    <div class="flex flex-col sm:flex-row items-baseline justify-between mb-8 border-b border-[#E6E6E6] pb-4 gap-4">
      <div>
        <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold block">
          CATEGORY • ETHNIC DRESSES
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#252525] mt-1">
          Festive Maxi Dresses & Angrakha Gowns
        </h2>
        <p class="text-xs text-[#737373] mt-1">
          Contemporary Indian flared gowns, cape dresses, and tiered floral silhouettes.
        </p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#71006A]">Showing {len(dresses)} Festive Gowns</span>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
{dresses_cards}
    </div>
  </div>
</section>

{{% schema %}}
{{
  "name": "Category Dresses",
  "settings": []
}}
{{% endschema %}}
"""
with open('shopify-theme/sections/category-dresses.liquid', 'w', encoding='utf-8') as f:
    f.write(dresses_content)

# 5. Update category-loungewear.liquid (8 Loungewear/Coords)
lounge = [p for p in products if p['category'] == 'Loungewear']
lounge_cards = "\n".join(get_product_card_liquid(p) for p in lounge)
lounge_content = f"""<section id="loungewear" class="py-14 bg-white border-b border-[#E6E6E6]">
  <div class="container">
    
    <!-- Section Header -->
    <div class="flex flex-col sm:flex-row items-baseline justify-between mb-8 border-b border-[#E6E6E6] pb-4 gap-4">
      <div>
        <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold block">
          CATEGORY • CO-ORDS & LOUNGEWEAR
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#252525] mt-1">
          Silk Kaftan Sets & Cotton Co-ords
        </h2>
        <p class="text-xs text-[#737373] mt-1">
          Fluid modal satins, printed kaftans, and effortless weekend coordinate ensembles.
        </p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#71006A]">Showing {len(lounge)} Relaxed Ensembles</span>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
{lounge_cards}
    </div>
  </div>
</section>

{{% schema %}}
{{
  "name": "Category Loungewear",
  "settings": []
}}
{{% endschema %}}
"""
with open('shopify-theme/sections/category-loungewear.liquid', 'w', encoding='utf-8') as f:
    f.write(lounge_content)

print("Updated category-suits, category-kurtas, category-sarees, category-dresses, category-loungewear liquid files!")
