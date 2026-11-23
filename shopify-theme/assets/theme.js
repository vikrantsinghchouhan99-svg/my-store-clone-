/**
 * Libas Editorial Commerce - Shopify Theme JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
  // --- Cart Drawer Logic ---
  const cartDrawer = document.getElementById('CartDrawer');
  const cartDrawerOverlay = document.getElementById('CartDrawerOverlay');
  const cartTriggers = document.querySelectorAll('[data-cart-drawer-trigger]');
  const cartCloseBtns = document.querySelectorAll('[data-cart-drawer-close]');

  function openCartDrawer() {
    if (cartDrawer && cartDrawerOverlay) {
      cartDrawer.classList.add('active');
      cartDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && cartDrawerOverlay) {
      cartDrawer.classList.remove('active');
      cartDrawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  cartTriggers.forEach((btn) => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  }));

  cartCloseBtns.forEach((btn) => btn.addEventListener('click', closeCartDrawer));
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);

  // --- Quick View Modal ---
  const quickViewModal = document.getElementById('QuickViewModal');
  const quickViewClose = document.querySelectorAll('[data-quickview-close]');
  const quickViewButtons = document.querySelectorAll('[data-quick-view]');

  quickViewButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const title = this.getAttribute('data-title') || 'Festive Ethnic Outfit';
      const price = this.getAttribute('data-price') || '₹2,999';
      const originalPrice = this.getAttribute('data-original-price') || '₹5,999';
      const img = this.getAttribute('data-image') || '';

      const titleEl = document.getElementById('qv-title');
      const priceEl = document.getElementById('qv-price');
      const origPriceEl = document.getElementById('qv-original-price');
      const imgEl = document.getElementById('qv-image');

      if (titleEl) titleEl.textContent = title;
      if (priceEl) priceEl.textContent = price;
      if (origPriceEl) origPriceEl.textContent = originalPrice;
      if (imgEl && img) imgEl.src = img;

      if (quickViewModal) {
        quickViewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  quickViewClose.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (quickViewModal) {
        quickViewModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // --- Checkout Modal ---
  const checkoutModal = document.getElementById('CheckoutModal');
  const checkoutTriggers = document.querySelectorAll('[data-checkout-trigger]');
  const checkoutClose = document.querySelectorAll('[data-checkout-close]');

  checkoutTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeCartDrawer();
      if (checkoutModal) {
        checkoutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  checkoutClose.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (checkoutModal) {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // --- Brute Force Protection on Account Modal ---
  let failedLoginAttempts = 0;
  let isLockedOut = false;
  let lockoutTimer = null;
  const loginForm = document.getElementById('LoginForm');
  const authError = document.getElementById('AuthError');
  const lockoutMsg = document.getElementById('LockoutMsg');
  const lockoutSeconds = document.getElementById('LockoutSeconds');
  const loginBtn = document.getElementById('LoginBtn');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      if (isLockedOut) {
        e.preventDefault();
        return;
      }

      const email = document.getElementById('LoginEmail')?.value;
      const pass = document.getElementById('LoginPassword')?.value;

      // Demo/simulation of brute force validation
      if (pass !== 'libas123') {
        e.preventDefault();
        failedLoginAttempts++;
        if (failedLoginAttempts >= 3) {
          isLockedOut = true;
          let remaining = 30;
          if (authError) authError.style.display = 'none';
          if (lockoutMsg) lockoutMsg.style.display = 'block';
          if (lockoutSeconds) lockoutSeconds.textContent = remaining;
          if (loginBtn) loginBtn.disabled = true;

          lockoutTimer = setInterval(() => {
            remaining--;
            if (lockoutSeconds) lockoutSeconds.textContent = remaining;
            if (remaining <= 0) {
              clearInterval(lockoutTimer);
              isLockedOut = false;
              failedLoginAttempts = 0;
              if (lockoutMsg) lockoutMsg.style.display = 'none';
              if (loginBtn) loginBtn.disabled = false;
            }
          }, 1000);
        } else {
          if (authError) {
            authError.textContent = `Invalid password. Attempt ${failedLoginAttempts} of 3 before temporary lockout.`;
            authError.style.display = 'block';
          }
        }
      }
    });
  }

  // --- Account Modal Open/Close ---
  const authModal = document.getElementById('AuthModal');
  const authTriggers = document.querySelectorAll('[data-auth-trigger]');
  const authClose = document.querySelectorAll('[data-auth-close]');

  authTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (authModal) {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  authClose.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (authModal) {
        authModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // --- Pincode Checker on Product Page ---
  const pincodeForm = document.getElementById('PincodeForm');
  const pincodeInput = document.getElementById('PincodeInput');
  const pincodeResult = document.getElementById('PincodeResult');

  if (pincodeForm && pincodeInput && pincodeResult) {
    pincodeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const code = pincodeInput.value.trim();
      if (code.length === 6) {
        const isMetro = ['11', '40', '56', '50', '60', '70'].some((p) => code.startsWith(p));
        pincodeResult.innerHTML = `
          <div style="margin-top: 0.5rem; padding: 0.5rem 0.75rem; background: #EBFDF2; border: 1px solid #A6F4C5; border-radius: 0.5rem; color: #027A48; font-size: 0.75rem;">
            ✓ Delivery available to <strong>${code}</strong> in ${isMetro ? '1-2 Days (Metro Express)' : '3-4 Days'}. Cash on Delivery (COD) eligible!
          </div>
        `;
      }
    });
  }
});
