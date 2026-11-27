import os

def update_homepage_html():
    html_path = 'COMPLETE_HOMEPAGE_CODE.html'
    with open(html_path, 'r', encoding='utf-8') as f:
        code = f.read()

    # Mobile Drawer & Responsiveness CSS
    mobile_css = """
  /* Mobile Menu Hamburger Button */
  .libas-hamburger-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--libas-text);
    padding: 0.35rem;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    .libas-hamburger-btn { display: none; }
  }

  /* Slide-Out Mobile Navigation Drawer */
  .libas-mobile-drawer {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: none;
  }
  .libas-mobile-drawer.active {
    display: block;
  }
  .libas-mobile-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
  .libas-mobile-menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 85%;
    max-width: 320px;
    background: #FFFFFF;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    animation: drawerSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    -webkit-overflow-scrolling: touch;
  }
  @keyframes drawerSlide {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  .libas-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--libas-border);
    background: var(--libas-surface);
  }
  .libas-drawer-close {
    background: transparent;
    border: none;
    color: var(--libas-muted);
    font-size: 1.5rem;
    cursor: pointer;
    line-height: 1;
    padding: 0.25rem;
  }
  .libas-drawer-links {
    padding: 1rem 1.25rem;
    flex: 1;
    overflow-y: auto;
  }
  .libas-drawer-section-title {
    font-size: 10px;
    font-family: monospace;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--libas-plum);
    margin-bottom: 0.5rem;
  }
  .libas-drawer-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--libas-surface-gray);
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--libas-text);
    text-decoration: none;
  }
  .libas-drawer-item:hover {
    color: var(--libas-plum);
  }
  .libas-drawer-care {
    padding-top: 1rem;
    border-top: 1px solid var(--libas-border);
    margin-top: 1rem;
  }
  .libas-drawer-care a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
    font-size: 0.8125rem;
    color: #4D4D4D;
    text-decoration: none;
  }
  .libas-drawer-footer {
    padding: 1rem 1.25rem;
    background: var(--libas-surface);
    border-top: 1px solid var(--libas-border);
    font-size: 0.75rem;
  }

  /* Mobile Grid & Typography Touch Polish */
  @media (max-width: 639px) {
    .libas-hero-title {
      font-size: 2rem !important;
      line-height: 1.2 !important;
    }
    .libas-product-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 0.625rem !important;
    }
    .libas-card-body {
      padding: 0.5rem !important;
    }
    .libas-card-title {
      font-size: 0.75rem !important;
    }
    .libas-price-now {
      font-size: 0.8125rem !important;
    }
    .libas-add-btn {
      padding: 0.4rem 0.25rem !important;
      font-size: 10px !important;
    }
    .libas-banner-box {
      min-height: 240px !important;
      padding: 1.5rem 1rem !important;
    }
    .libas-banner-content h3 {
      font-size: 1.35rem !important;
    }
    .libas-circles-scroll {
      gap: 0.875rem !important;
    }
    .libas-circle-img {
      width: 4rem !important;
      height: 4rem !important;
    }
    .libas-circle-name {
      font-size: 10px !important;
    }
  }
"""

    old_logo = '<a href="/" class="libas-logo font-brand">LIBAS</a>'
    new_logo = """<div style="display: flex; align-items: center; gap: 0.5rem;">
          <button type="button" class="libas-hamburger-btn" onclick="openLibasMobileDrawer()" aria-label="Open menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <a href="/" class="libas-logo font-brand">LIBAS</a>
        </div>"""

    drawer_html = """
  <!-- Mobile Navigation Drawer -->
  <div id="libasMobileDrawer" class="libas-mobile-drawer">
    <div class="libas-mobile-backdrop" onclick="closeLibasMobileDrawer()"></div>
    <div class="libas-mobile-menu">
      <div class="libas-drawer-header">
        <span class="libas-logo font-brand" style="font-size: 1.5rem;">LIBAS</span>
        <button type="button" class="libas-drawer-close" onclick="closeLibasMobileDrawer()" aria-label="Close">✕</button>
      </div>

      <div class="libas-drawer-links">
        <div class="libas-drawer-section-title">COLLECTIONS</div>
        <a href="/collections/suits" class="libas-drawer-item" onclick="closeLibasMobileDrawer()">
          <span>👗 Suits & Sets</span>
          <span style="font-size: 10px; color: var(--libas-plum); font-family: monospace;">From ₹1,899</span>
        </a>
        <a href="/collections/kurtas" class="libas-drawer-item" onclick="closeLibasMobileDrawer()">
          <span>👚 Kurtas & Kurtis</span>
          <span style="font-size: 10px; color: var(--libas-plum); font-family: monospace;">From ₹899</span>
        </a>
        <a href="/collections/sarees" class="libas-drawer-item" onclick="closeLibasMobileDrawer()">
          <span>🥻 Sarees</span>
          <span style="font-size: 10px; color: var(--libas-plum); font-family: monospace;">From ₹2,199</span>
        </a>
        <a href="/collections/dresses" class="libas-drawer-item" onclick="closeLibasMobileDrawer()">
          <span>💃 Ethnic Dresses</span>
          <span style="font-size: 10px; color: var(--libas-plum); font-family: monospace;">From ₹1,699</span>
        </a>
        <a href="/collections/loungewear" class="libas-drawer-item" onclick="closeLibasMobileDrawer()">
          <span>👘 Co-ords & Lounge</span>
          <span style="font-size: 10px; color: var(--libas-plum); font-family: monospace;">From ₹1,299</span>
        </a>
        <a href="/collections/plus-size" class="libas-drawer-item" style="color: var(--libas-plum);" onclick="closeLibasMobileDrawer()">
          <span>✨ ExtraLove (3XL-6XL)</span>
          <span style="font-size: 9px; background: rgba(113,0,106,0.1); padding: 2px 6px; border-radius: 999px;">CURVE</span>
        </a>
        <a href="/collections/sale" class="libas-drawer-item" style="color: var(--libas-sale);" onclick="closeLibasMobileDrawer()">
          <span>🔥 Festive Sale</span>
          <span style="font-size: 9px; background: #fee2e2; padding: 2px 6px; border-radius: 999px; color: var(--libas-sale);">UP TO 60%</span>
        </a>

        <div class="libas-drawer-care">
          <div class="libas-drawer-section-title">CUSTOMER SERVICE</div>
          <a href="/pages/track-order" onclick="closeLibasMobileDrawer()">📦 Track My Order</a>
          <a href="/pages/returns" onclick="closeLibasMobileDrawer()">🔄 15-Day Doorstep Returns</a>
          <a href="/pages/shipping-policy" onclick="closeLibasMobileDrawer()">🚚 Shipping & Delivery SLA</a>
          <a href="/pages/stores" onclick="closeLibasMobileDrawer()">📍 Flagship Boutiques</a>
          <a href="/pages/about" onclick="closeLibasMobileDrawer()">📖 About Libas & Craft Heritage</a>
          <a href="/pages/contact" onclick="closeLibasMobileDrawer()">📞 Contact Us & FAQs</a>
        </div>
      </div>

      <div class="libas-drawer-footer">
        <div style="display: flex; justify-content: space-between; font-weight: 700; margin-bottom: 0.5rem;">
          <span>Currency</span>
          <span style="color: var(--libas-plum); font-family: monospace;">₹ INR</span>
        </div>
        <div style="font-size: 11px; color: #737373;">
          Helpline: <a href="tel:+919899990772" style="color: var(--libas-plum); font-weight: 700;">+91 98999 90772</a>
        </div>
      </div>
    </div>
  </div>
"""

    drawer_js = """
  function openLibasMobileDrawer() {
    var d = document.getElementById('libasMobileDrawer');
    if (d) {
      d.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeLibasMobileDrawer() {
    var d = document.getElementById('libasMobileDrawer');
    if (d) {
      d.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
"""

    if '</style>' in code and 'libas-mobile-drawer' not in code:
        code = code.replace('</style>', mobile_css + '\n</style>')
    if old_logo in code:
        code = code.replace(old_logo, new_logo)
    if '</header>' in code and 'libasMobileDrawer' not in code:
        code = code.replace('</header>', '</header>\n' + drawer_html)
    if '</script>' in code and 'openLibasMobileDrawer' not in code:
        code = code.replace('</script>', drawer_js + '\n</script>')

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(code)

    print(f"COMPLETE_HOMEPAGE_CODE.html updated successfully ({len(code)} bytes)")

if __name__ == '__main__':
    update_homepage_html()
