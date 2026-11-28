/**
 * Libas Editorial Commerce - Master Theme Engine & Client Router
 * 100% Standalone & Resilient Architecture for Shopify Online Store 2.0
 */

// --- 1. Authentic Libas Product Catalog ---
const LIBAS_CATALOG = [
  {
    "id": "lb-suit-1",
    "slug": "purple-zari-embroidered-silk-anarkali-suit-set",
    "name": "Purple Zari Embroidered Silk Anarkali Suit Set",
    "tagline": "Flared Chanderi Silk Anarkali with churidar & banarasi dupatta",
    "price": 3499,
    "originalPrice": 6999,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Anarkali Suits",
    "rating": 4.9,
    "reviewsCount": 382,
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Royal Plum",
        "hex": "#71006A"
      },
      {
        "name": "Rani Magenta",
        "hex": "#A1005E"
      },
      {
        "name": "Peacock Teal",
        "hex": "#005F73"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Chanderi Silk Blend",
    "occasion": "Wedding",
    "pattern": "Intricate Zari Embroidery",
    "washCare": "Dry Clean Only",
    "description": "Elevate your festive grandeur in this rich plum purple Anarkali suit set, adorned with resplendent gold zari embroidery across the yoke and borders. Accompanied by a coordinated solid bottom and a rich brocade woven dupatta.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 24
  },
  {
    "id": "lb-suit-2",
    "slug": "mustard-yellow-gotta-patti-sharara-suit-set",
    "name": "Mustard Gotta Patti Georgette Sharara Suit Set",
    "tagline": "Handcrafted gotta patti accents with flared tiered sharara",
    "price": 2799,
    "originalPrice": 5599,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Sharara Suits",
    "rating": 4.8,
    "reviewsCount": 215,
    "images": [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Mustard Gold",
        "hex": "#E5A93C"
      },
      {
        "name": "Coral Rose",
        "hex": "#EE6C4D"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Poly Georgette with Butter Crepe Lining",
    "occasion": "Festive",
    "pattern": "Traditional Rajasthani Gotta Patti",
    "washCare": "Dry Clean Recommended",
    "description": "A head-turning mustard ensemble showcasing luminous gota patti lace work on the kurti hemline and flared sharara pants. Includes a sheer chiffon dupatta with matching borders.",
    "isBestSeller": true,
    "isNew": true,
    "stock": 18
  },
  {
    "id": "lb-suit-3",
    "slug": "blush-pink-floral-pure-cotton-palazzo-suit-set",
    "name": "Blush Floral Pure Cotton Straight Kurta & Palazzo Set",
    "tagline": "Breathable 60s cambric cotton with tonal mulmul dupatta",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Palazzo Suits",
    "rating": 4.7,
    "reviewsCount": 164,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Blush Pink",
        "hex": "#FF8C91"
      },
      {
        "name": "Mint Sage",
        "hex": "#84A98C"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Pure Cambric Cotton",
    "occasion": "Daily Wear",
    "pattern": "Botanical Sanganeri Block Print",
    "washCare": "Gentle Machine Wash",
    "description": "Crafted from whisper-soft pure cotton, this refreshing blush pink straight suit set is tailored for effortless day-to-evening style. Paired with wide-leg palazzos and a lightweight mulmul dupatta.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 42
  },
  {
    "id": "lb-suit-4",
    "slug": "emerald-green-embroidered-velvet-winter-suit-set",
    "name": "Emerald Green Embroidered Velvet Suit Set",
    "tagline": "Heavy micro-velvet straight suit with digital organza dupatta",
    "price": 4499,
    "originalPrice": 8999,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Straight Suits",
    "rating": 4.9,
    "reviewsCount": 98,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Emerald Green",
        "hex": "#1B4332"
      },
      {
        "name": "Midnight Navy",
        "hex": "#0B132B"
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "9000 Micro Velvet",
    "occasion": "Wedding",
    "pattern": "Resham & Tilla Threadwork",
    "washCare": "Dry Clean Only",
    "description": "Indulge in royal sophistication with our jewel-toned emerald green velvet suit set. Intricate golden Kashmiri tilla embroidery graces the neckline, cuffs, and hem for grand winter soirees.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 15
  },
  {
    "id": "lb-suit-5",
    "slug": "wine-chanderi-silk-foil-print-anarkali-suit",
    "name": "Wine Chanderi Silk Foil Print Anarkali Set",
    "tagline": "28-Kali grand flare with golden foil motifs & zari border",
    "price": 3199,
    "originalPrice": 6399,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Anarkali Suits",
    "rating": 4.8,
    "reviewsCount": 240,
    "images": [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Deep Wine",
        "hex": "#581845"
      },
      {
        "name": "Dark Magenta",
        "hex": "#800020"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Chanderi Silk Blend",
    "occasion": "Festive",
    "pattern": "Metallic Gold Foil Motif",
    "washCare": "Dry Clean Only",
    "description": "A magnificent 28-kali flared Anarkali silhouette in deep celebratory wine. Decorated with delicate Mughal floral foil art and finished with an organza scalloped border dupatta.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 30
  },
  {
    "id": "lb-suit-6",
    "slug": "navy-blue-embroidered-straight-kurta-pant-suit",
    "name": "Navy Blue Woven Yoke Straight Kurta Suit",
    "tagline": "Pure chanderi cotton blend with cigarette trousers",
    "price": 2499,
    "originalPrice": 4999,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Straight Suits",
    "rating": 4.7,
    "reviewsCount": 188,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Royal Navy",
        "hex": "#1D2D50"
      },
      {
        "name": "Indigo",
        "hex": "#243B6B"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Woven Cotton Silk",
    "occasion": "Office Wear",
    "pattern": "Subtle Zari Thread Highlights",
    "washCare": "Hand Wash Separately",
    "description": "Tailored for refined elegance, this deep navy straight suit combines a structured fit with lightweight drape. Perfect for corporate festive celebrations and evening gatherings.",
    "isBestSeller": false,
    "isNew": false,
    "stock": 25
  },
  {
    "id": "lb-suit-7",
    "slug": "rust-georgette-flared-sharara-suit-set",
    "name": "Rust Georgette Flared Sharara Set with Dupatta",
    "tagline": "Tiered ruffle sharara with mirrorwork embroidered kurti",
    "price": 2699,
    "originalPrice": 5399,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Sharara Suits",
    "rating": 4.8,
    "reviewsCount": 142,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Terracotta Rust",
        "hex": "#C84B31"
      },
      {
        "name": "Warm Ochre",
        "hex": "#D9822B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Georgette with Shantoon Lining",
    "occasion": "Festive",
    "pattern": "Faux Mirror & Threadwork",
    "washCare": "Dry Clean Recommended",
    "description": "Boasting a rich terracotta hue, this flared sharara set features fine foil mirrorwork on the yoke, paired with tiered flared sharara pants and a lightweight matching dupatta.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 20
  },
  {
    "id": "lb-suit-8",
    "slug": "maroon-festive-silk-blend-anarkali-suit",
    "name": "Maroon Festive Silk Blend Anarkali Set",
    "tagline": "Floor length royal bridal flare with zari jacquard dupatta",
    "price": 3799,
    "originalPrice": 7599,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Anarkali Suits",
    "rating": 4.9,
    "reviewsCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Imperial Maroon",
        "hex": "#4A0E17"
      },
      {
        "name": "Ruby Crimson",
        "hex": "#7B1113"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Art Silk with Jacquard Weave",
    "occasion": "Wedding",
    "pattern": "Banarasi Jacquard & Zari Booti",
    "washCare": "Dry Clean Only",
    "description": "An imperial maroon bridal Anarkali crafted from rich art silk. Includes an intricately woven Banarasi jacquard dupatta, making it a stellar selection for wedding receptions.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 22
  },
  {
    "id": "lb-suit-9",
    "slug": "pastel-green-chikankari-cotton-suit-set",
    "name": "Pistachio Green Lucknowi Chikankari Suit Set",
    "tagline": "Pure mulmul cotton with handmade shadow work embroidery",
    "price": 2299,
    "originalPrice": 4599,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Palazzo Suits",
    "rating": 4.8,
    "reviewsCount": 178,
    "images": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Pistachio Green",
        "hex": "#93C572"
      },
      {
        "name": "Ivory Cream",
        "hex": "#FFFFF0"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Mulmul Cotton",
    "occasion": "Daily Wear",
    "pattern": "Handcrafted Lucknowi Chikankari",
    "washCare": "Gentle Hand Wash",
    "description": "Featuring delicate white thread shadow work inspired by Lucknow artisans, this pastel pistachio green cotton suit offers unmatched summer comfort and poetic grace.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 28
  },
  {
    "id": "lb-suit-10",
    "slug": "royal-teal-velvet-embroidered-suit-set",
    "name": "Royal Peacock Teal Velvet Embroidered Suit",
    "tagline": "Heavily embellished neckline with contrast organza dupatta",
    "price": 4299,
    "originalPrice": 8599,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Straight Suits",
    "rating": 4.9,
    "reviewsCount": 134,
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Peacock Teal",
        "hex": "#005F73"
      },
      {
        "name": "Deep Petrol",
        "hex": "#0A3641"
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Premium Micro Velvet",
    "occasion": "Wedding",
    "pattern": "Zardozi & Sequins Highlights",
    "washCare": "Dry Clean Only",
    "description": "Radiate celestial poise in this plush peacock teal velvet straight suit, detailed with shimmering zardozi needlework and paired with a contrasting blush organza dupatta.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 16
  },
  {
    "id": "lb-kurta-1",
    "slug": "wine-chanderi-silk-foil-print-straight-kurta",
    "name": "Wine Chanderi Silk Foil Print Straight Kurta",
    "tagline": "Mandarin collar straight fit kurta with three-quarter sleeves",
    "price": 1299,
    "originalPrice": 2599,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Straight Cut Kurtas",
    "rating": 4.8,
    "reviewsCount": 287,
    "images": [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Burgundy Wine",
        "hex": "#581845"
      },
      {
        "name": "Maroon Gold",
        "hex": "#7B1113"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Chanderi Silk Blend",
    "occasion": "Festive",
    "pattern": "Metallic Gold Floral Foil",
    "washCare": "Dry Clean Recommended",
    "description": "Richly pigmented wine straight kurta accented with metallic gold floral foil printing and delicate button work. Pairs seamlessly with beige cigarette pants or gold skirts.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 35
  },
  {
    "id": "lb-kurta-2",
    "slug": "indigo-blue-ajrakh-handblock-pure-cotton-kurta",
    "name": "Indigo Blue Ajrakh Handblock Pure Cotton Kurta",
    "tagline": "Authentic Kutch natural dye block print with side slits",
    "price": 1099,
    "originalPrice": 2199,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Straight Cut Kurtas",
    "rating": 4.9,
    "reviewsCount": 194,
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Natural Indigo",
        "hex": "#1F3A52"
      },
      {
        "name": "Madder Red",
        "hex": "#8B263E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Handloom Cotton",
    "occasion": "Daily Wear",
    "pattern": "Traditional Ajrakh Geometric Print",
    "washCare": "Hand Wash Separately with Cold Water",
    "description": "Hand-dyed using time-honored artisanal indigo resist-printing, this breezy straight cotton kurta delivers cool comfort and rustic aesthetic charm for everyday styling.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 50
  },
  {
    "id": "lb-kurta-3",
    "slug": "peach-embroidered-cotton-peplum-tunic-kurti",
    "name": "Peach Embroidered Cotton Peplum Tunic Kurti",
    "tagline": "Flared short kurti with delicate threadwork & gathered waist",
    "price": 899,
    "originalPrice": 1799,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Short Tunics",
    "rating": 4.6,
    "reviewsCount": 145,
    "images": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Warm Peach",
        "hex": "#F4A261"
      },
      {
        "name": "Off White",
        "hex": "#FAF0CA"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Pure Slub Cotton",
    "occasion": "Daily Wear",
    "pattern": "Floral Thread Yoke",
    "washCare": "Machine Wash Cold",
    "description": "A delightful short peplum tunic kurti featuring subtle yoke embroidery and gathered tiers. Pair with relaxed denim jeans or cropped palazzos for chic college and brunch wear.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 40
  },
  {
    "id": "lb-kurta-4",
    "slug": "teal-green-woven-yoke-cotton-straight-kurta",
    "name": "Teal Green Woven Yoke Cotton Straight Kurta",
    "tagline": "Ikat weave front panel with classic boat neck",
    "price": 1199,
    "originalPrice": 2399,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Straight Cut Kurtas",
    "rating": 4.7,
    "reviewsCount": 162,
    "images": [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Teal Cyan",
        "hex": "#13678A"
      },
      {
        "name": "Forest Green",
        "hex": "#012030"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "South Cotton with Ikat Yoke",
    "occasion": "Office Wear",
    "pattern": "Woven Geometric Ikat",
    "washCare": "Gentle Hand Wash",
    "description": "Structured in breathable South cotton, this teal kurta boasts a distinctive Pochampally Ikat inspired yoke. Ideal for modern workplace dressing with comfort.",
    "isBestSeller": false,
    "isNew": false,
    "stock": 32
  },
  {
    "id": "lb-kurta-5",
    "slug": "yellow-floral-printed-flared-a-line-kurti",
    "name": "Yellow Floral Printed Flared A-Line Kurti",
    "tagline": "Flowing panelled silhouette with flared hemline",
    "price": 999,
    "originalPrice": 1999,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "A-Line & Flared",
    "rating": 4.8,
    "reviewsCount": 210,
    "images": [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Sunny Yellow",
        "hex": "#F4D06F"
      },
      {
        "name": "Marigold Orange",
        "hex": "#FF8811"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Rayon Cotton Blend",
    "occasion": "Festive",
    "pattern": "Jaipuri Floral Print",
    "washCare": "Gentle Machine Wash",
    "description": "Infuse sunny radiance into daytime festivities with this panelled A-line kurti. Crafted in featherlight rayon cotton with traditional Jaipuri floral prints.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 48
  },
  {
    "id": "lb-kurta-6",
    "slug": "lavender-woven-chanderi-festive-kurti",
    "name": "Lavender Woven Chanderi Festive Kurti",
    "tagline": "Sheer zari booti weave with inner cotton lining",
    "price": 1399,
    "originalPrice": 2799,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Straight Cut Kurtas",
    "rating": 4.9,
    "reviewsCount": 175,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Pastel Lavender",
        "hex": "#B39DDB"
      },
      {
        "name": "Lilac Mist",
        "hex": "#CE93D8"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Chanderi Silk with Mulmul Lining",
    "occasion": "Festive",
    "pattern": "Woven Silver Zari Motifs",
    "washCare": "Dry Clean Recommended",
    "description": "A soft pastel lavender creation woven with luminous silver zari motifs. Elegant keyhole neck detailing makes it a charming evening celebration choice.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 26
  },
  {
    "id": "lb-kurta-7",
    "slug": "ruby-red-chikankari-embroidered-long-kurta",
    "name": "Ruby Red Chikankari Embroidered Long Kurta",
    "tagline": "Intricate floral jaal work across entire front panel",
    "price": 1499,
    "originalPrice": 2999,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Straight Cut Kurtas",
    "rating": 4.8,
    "reviewsCount": 260,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Ruby Red",
        "hex": "#9B111E"
      },
      {
        "name": "Cherry Crimson",
        "hex": "#C2185B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Georgette with Soft Cotton Slip",
    "occasion": "Festive",
    "pattern": "Allover Lucknowi Chikankari",
    "washCare": "Hand Wash Separately",
    "description": "Rich in romantic drama, this crimson red georgette long kurta boasts intricate white and tonal thread embroidery. Included with a matching inner slip.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 38
  },
  {
    "id": "lb-kurta-8",
    "slug": "olive-green-cotton-slub-daily-tunic",
    "name": "Olive Green Cotton Slub Daily Tunic Kurti",
    "tagline": "Relaxed comfort fit with contrast wooden button accents",
    "price": 849,
    "originalPrice": 1699,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Short Tunics",
    "rating": 4.6,
    "reviewsCount": 118,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Olive Green",
        "hex": "#556B2F"
      },
      {
        "name": "Khaki Sage",
        "hex": "#6B8E23"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Cotton Slub",
    "occasion": "Daily Wear",
    "pattern": "Solid Slub Texture with Trim",
    "washCare": "Machine Wash Cold",
    "description": "Modern minimalism meets Indian comfort in this earthy olive tunic. Designed with rolled sleeves and rustic wooden button embellishments.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 45
  },
  {
    "id": "lb-kurta-9",
    "slug": "black-golden-foil-print-angrakha-kurta",
    "name": "Black & Gold Festive Angrakha Flared Kurta",
    "tagline": "Overlap tie-up neckline with side tassel latkans",
    "price": 1399,
    "originalPrice": 2799,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "A-Line & Flared",
    "rating": 4.9,
    "reviewsCount": 204,
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Antique Gold",
        "hex": "#D4AF37"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Cotton Silk Blend",
    "occasion": "Party",
    "pattern": "Foil Printed Mughal Paisley",
    "washCare": "Dry Clean Recommended",
    "description": "Timeless royal black Angrakha silhouette highlighted with glimmering gold foil paisleys and handmade dori latkans on the side seam.",
    "isBestSeller": true,
    "isNew": true,
    "stock": 29
  },
  {
    "id": "lb-saree-1",
    "slug": "burgundy-zari-woven-sheer-organza-saree",
    "name": "Burgundy Zari Woven Sheer Organza Saree",
    "tagline": "Ultralight gossamer organza with floral zari border & blouse piece",
    "price": 2699,
    "originalPrice": 5399,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Organza Sarees",
    "rating": 4.9,
    "reviewsCount": 218,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Burgundy Wine",
        "hex": "#6A0572"
      },
      {
        "name": "Antique Copper",
        "hex": "#B87333"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Pure Tissue Organza",
    "occasion": "Festive",
    "pattern": "Scalloped Zari Embroidered Border",
    "washCare": "Dry Clean Only",
    "description": "An ethereal burgundy sheer organza saree woven with reflective metallic zari florets. Featuring dramatic cut-work scalloped borders and an unstitched heavy brocade blouse piece.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 19
  },
  {
    "id": "lb-saree-2",
    "slug": "ready-to-wear-pleated-georgette-1-minute-saree",
    "name": "1-Minute Ready-to-Wear Pleated Georgette Saree",
    "tagline": "Pre-stitched waist pleats with hook closure & designer belt",
    "price": 2199,
    "originalPrice": 4399,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Ready-to-Wear",
    "rating": 4.8,
    "reviewsCount": 312,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Crimson Scarlet",
        "hex": "#BA181B"
      },
      {
        "name": "Emerald Jewel",
        "hex": "#2D6A4F"
      }
    ],
    "sizes": [
      "Free Size (Waist 28 - 42)"
    ],
    "fabric": "Crush Micro Georgette",
    "occasion": "Party",
    "pattern": "Solid Micro-Pleating with Embellished Belt",
    "washCare": "Dry Clean Recommended",
    "description": "Drape like a diva in sixty seconds flat! This pre-draped crimson saree features engineered accordion pleats, an adjustable hook waistband, and an embellished zari waistbelt.",
    "isBestSeller": true,
    "isNew": true,
    "stock": 35
  },
  {
    "id": "lb-saree-3",
    "slug": "banarasi-kathan-silk-woven-zari-saree",
    "name": "Royal Banarasi Kathan Silk Zari Saree",
    "tagline": "Grand bridal pallu with traditional kadhwa floral jaal",
    "price": 3999,
    "originalPrice": 7999,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Banarasi Sarees",
    "rating": 4.9,
    "reviewsCount": 265,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Bridal Red",
        "hex": "#900C3F"
      },
      {
        "name": "Golden Ochre",
        "hex": "#FFC300"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Kathan Silk Blend",
    "occasion": "Wedding",
    "pattern": "Intricate Kadhwa Zari Weave",
    "washCare": "Dry Clean Only",
    "description": "An authentic heirloom Banarasi masterpiece rendered in regal bridal red. Intricately woven with heavy gold zari threads across the sprawling pallu.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 14
  },
  {
    "id": "lb-saree-4",
    "slug": "pastel-mint-floral-chiffon-saree",
    "name": "Pastel Mint Floral Printed Sheer Chiffon Saree",
    "tagline": "Weightless drape with delicate pearl scalloped border",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Chiffon Sarees",
    "rating": 4.7,
    "reviewsCount": 180,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Pastel Mint",
        "hex": "#C8E6C9"
      },
      {
        "name": "Blush Rose",
        "hex": "#F8BBD0"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Pure Lightweight Chiffon",
    "occasion": "Daily Wear",
    "pattern": "English Watercolor Florals",
    "washCare": "Dry Clean Recommended",
    "description": "Flowing with delicate feminine charm, this mint green chiffon saree features hand-painted watercolor roses and hand-stitched pearl borders. Comes with an unstitched silk blouse.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 30
  },
  {
    "id": "lb-saree-5",
    "slug": "royal-blue-zari-woven-kanjivaram-silk-saree",
    "name": "Royal Blue Zari Woven Kanjivaram Silk Saree",
    "tagline": "South Indian temple border with contrast magenta pallu",
    "price": 4299,
    "originalPrice": 8599,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Banarasi Sarees",
    "rating": 4.9,
    "reviewsCount": 190,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Royal Cobalt",
        "hex": "#002366"
      },
      {
        "name": "Rani Magenta",
        "hex": "#C2185B"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Kanjivaram Art Silk",
    "occasion": "Wedding",
    "pattern": "Traditional Mayil (Peacock) Motifs",
    "washCare": "Dry Clean Only",
    "description": "Exuding majestic South Indian bridal elegance, this royal blue saree pairs a wide contrast magenta temple border with gold zari woven peacock and chakra motifs.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 17
  },
  {
    "id": "lb-saree-6",
    "slug": "mustard-yellow-organza-mirror-work-saree",
    "name": "Mustard Yellow Organza Mirror Work Saree",
    "tagline": "Hand embroidered real glass mirrors with cutwork pallu",
    "price": 2899,
    "originalPrice": 5799,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Organza Sarees",
    "rating": 4.8,
    "reviewsCount": 155,
    "images": [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Haldi Yellow",
        "hex": "#F4B41A"
      },
      {
        "name": "Sunset Orange",
        "hex": "#E05A47"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Glass Organza",
    "occasion": "Festive",
    "pattern": "Mirror Embroidery & Gota Patti",
    "washCare": "Dry Clean Only",
    "description": "The quintessential Haldi celebration saree! Crisp mustard organza highlighted with sparkling real glass mirror embroidery that catches the light from every angle.",
    "isBestSeller": true,
    "isNew": true,
    "stock": 25
  },
  {
    "id": "lb-saree-7",
    "slug": "black-georgette-ruffle-tier-cocktail-saree",
    "name": "Midnight Black Tiered Ruffle Cocktail Saree",
    "tagline": "Modern pre-pleated drape with sequin border details",
    "price": 2499,
    "originalPrice": 4999,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Ready-to-Wear",
    "rating": 4.8,
    "reviewsCount": 240,
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#1C1C1C"
      },
      {
        "name": "Silver Shimmer",
        "hex": "#C0C0C0"
      }
    ],
    "sizes": [
      "Free Size (Waist 26 - 40)"
    ],
    "fabric": "Georgette with Poly Shimmer",
    "occasion": "Party",
    "pattern": "Triple Tier Ruffle Borders",
    "washCare": "Dry Clean Only",
    "description": "Make a bold Bollywood-style entrance at evening cocktail parties with this dramatic triple-tiered black ruffle saree. Includes an unstitched sequin-studded designer blouse.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 31
  },
  {
    "id": "lb-saree-8",
    "slug": "blush-pink-tissue-silk-festive-saree",
    "name": "Blush Pink Luminous Tissue Silk Saree",
    "tagline": "Metallic rose gold sheen with delicate thread tassels",
    "price": 2999,
    "originalPrice": 5999,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Organza Sarees",
    "rating": 4.9,
    "reviewsCount": 168,
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Rose Gold",
        "hex": "#B76E79"
      },
      {
        "name": "Blush Coral",
        "hex": "#F4A6A0"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Pure Metallic Tissue Silk",
    "occasion": "Wedding",
    "pattern": "Minimalist Zari Sheen with Handcrafted Tassels",
    "washCare": "Dry Clean Only",
    "description": "Understated luxury at its peak. This luminous blush tissue silk saree radiates a captivating rose-gold shimmer, finished with handmade latkans on the pallu.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 18
  },
  {
    "id": "lb-saree-9",
    "slug": "chanderi-cotton-printed-daily-saree",
    "name": "Indigo Chanderi Cotton Handblock Print Saree",
    "tagline": "Lightweight breathable drape with contrast zari patti",
    "price": 1499,
    "originalPrice": 2999,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Chiffon Sarees",
    "rating": 4.7,
    "reviewsCount": 130,
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#283593"
      },
      {
        "name": "Ecru White",
        "hex": "#F5F5DC"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Chanderi Cotton Blend",
    "occasion": "Office Wear",
    "pattern": "Traditional Dabu Handblock Print",
    "washCare": "Hand Wash Separately",
    "description": "A refined everyday wardrobe essential, this Chanderi cotton saree marries heritage Dabu block printing with a thin woven gold zari border.",
    "isBestSeller": false,
    "isNew": false,
    "stock": 40
  },
  {
    "id": "lb-dress-1",
    "slug": "flared-angrakha-tier-festive-maxi-dress",
    "name": "Maroon Flared Angrakha Festive Maxi Gown",
    "tagline": "Voluminous tiered silhouette with gota lace accents",
    "price": 2499,
    "originalPrice": 4999,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Ethnic Gowns",
    "rating": 4.8,
    "reviewsCount": 189,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Deep Maroon",
        "hex": "#7A0026"
      },
      {
        "name": "Gold Metallic",
        "hex": "#D4AF37"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Rayon Crepe with Shantoon Lining",
    "occasion": "Festive",
    "pattern": "Angrakha Overlap with Gota Trims",
    "washCare": "Hand Wash Separately",
    "description": "Twirl in festive elegance with this full-length tiered ethnic gown. Features an authentic Angrakha crossover front, gold thread laces, and side dori with bell tassels.",
    "isBestSeller": true,
    "isNew": true,
    "stock": 28
  },
  {
    "id": "lb-dress-2",
    "slug": "emerald-green-embroidered-georgette-gown",
    "name": "Emerald Green Embroidered Georgette Gown",
    "tagline": "Floor length ballroom flare with sequined bodice & belt",
    "price": 2999,
    "originalPrice": 5999,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Ethnic Gowns",
    "rating": 4.9,
    "reviewsCount": 210,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Emerald Green",
        "hex": "#1B4332"
      },
      {
        "name": "Teal Forest",
        "hex": "#0D2818"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Flowing Georgette with Satin Lining",
    "occasion": "Wedding",
    "pattern": "Floral Sequin Needlework",
    "washCare": "Dry Clean Only",
    "description": "A fairytale festive gown showcasing an extensively embellished sequin yoke and 6-meter circular flare. Comes with a matching embellished waist cincher.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 19
  },
  {
    "id": "lb-dress-3",
    "slug": "mustard-floral-printed-tier-cotton-dress",
    "name": "Mustard Floral Tiered Pure Cotton Maxi Dress",
    "tagline": "Breathable summer silhouette with balloon sleeves",
    "price": 1699,
    "originalPrice": 3399,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Tiered Maxi Dresses",
    "rating": 4.7,
    "reviewsCount": 142,
    "images": [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Warm Mustard",
        "hex": "#E5A93C"
      },
      {
        "name": "Burnt Orange",
        "hex": "#DD6B20"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Breathable Cotton",
    "occasion": "Daily Wear",
    "pattern": "Botanical Floral Woodblock Print",
    "washCare": "Machine Wash Cold",
    "description": "Feel free and spirited in this tiered bohemian cotton dress. Featuring billowy three-quarter elasticated sleeves and functional pockets for all-day ease.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 35
  },
  {
    "id": "lb-dress-4",
    "slug": "blush-pink-chikankari-embroidered-dress",
    "name": "Blush Pink Chikankari Pure Mulmul Dress",
    "tagline": "Ankle length handcrafted gown with cotton slip",
    "price": 2199,
    "originalPrice": 4399,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Ethnic Gowns",
    "rating": 4.8,
    "reviewsCount": 165,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Blush Pink",
        "hex": "#FAD2E1"
      },
      {
        "name": "Pearl White",
        "hex": "#F0EFEB"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Pure Mulmul Cotton",
    "occasion": "Festive",
    "pattern": "Handmade Chikankari Shadow Work",
    "washCare": "Gentle Hand Wash",
    "description": "Crafted from whisper-light mulmul, this romantic blush dress is ornamented with timeless Lucknowi chikankari floral jaal, exuding effortless elegance.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 27
  },
  {
    "id": "lb-dress-5",
    "slug": "purple-zari-foil-print-festive-gown",
    "name": "Plum Purple Zari Foil Print Anarkali Gown",
    "tagline": "Heavy flared silhouette with gold tassel belt",
    "price": 2799,
    "originalPrice": 5599,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Ethnic Gowns",
    "rating": 4.9,
    "reviewsCount": 230,
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Plum Purple",
        "hex": "#71006A"
      },
      {
        "name": "Mauve Berry",
        "hex": "#8E44AD"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Chanderi Silk with Lining",
    "occasion": "Party",
    "pattern": "Mughal Jaal Foil Art",
    "washCare": "Dry Clean Recommended",
    "description": "Draped in majestic plum purple, this grand Anarkali maxi dress is covered in delicate gold foil floral bootas with an opulent brocade border.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 24
  },
  {
    "id": "lb-dress-6",
    "slug": "indigo-blue-printed-fit-and-flare-midi-dress",
    "name": "Indigo Ajrakh Printed Fit & Flare Midi Dress",
    "tagline": "V-neck silhouette with button placket & fabric belt",
    "price": 1499,
    "originalPrice": 2999,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Tiered Maxi Dresses",
    "rating": 4.7,
    "reviewsCount": 115,
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Deep Indigo",
        "hex": "#1A237E"
      },
      {
        "name": "Chalk White",
        "hex": "#ECEFF1"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Khadi Cotton",
    "occasion": "Daily Wear",
    "pattern": "Ajrakh Geometric Block Print",
    "washCare": "Hand Wash Cold",
    "description": "A structured fusion midi dress combining clean Western tailoring with authentic Gujarat Ajrakh prints. Features a tie-up belt to flatter every curve.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 33
  },
  {
    "id": "lb-dress-7",
    "slug": "wine-chiffon-cape-sleeves-evening-gown",
    "name": "Wine Chiffon Cape Sleeves Evening Gown",
    "tagline": "Sheer attached cape with hand-worked cutdana neckline",
    "price": 3199,
    "originalPrice": 6399,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Ethnic Gowns",
    "rating": 4.9,
    "reviewsCount": 170,
    "images": [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Royal Wine",
        "hex": "#4A154B"
      },
      {
        "name": "Garnet Rose",
        "hex": "#6C1D45"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Imported Chiffon & Silk Crepe",
    "occasion": "Party",
    "pattern": "Cutdana & Sequin Neck Embellishment",
    "washCare": "Dry Clean Only",
    "description": "Command the spotlight in this royal wine evening gown featuring fluid cape sleeves that drape gracefully over the shoulders.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 16
  },
  {
    "id": "lb-dress-8",
    "slug": "white-gold-zari-woven-anarkali-gown",
    "name": "Ivory & Gold Zari Woven Anarkali Gown",
    "tagline": "Pure chanderi festive gown with regal Banarasi border",
    "price": 2899,
    "originalPrice": 5799,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Ethnic Gowns",
    "rating": 4.8,
    "reviewsCount": 195,
    "images": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Ivory Cream",
        "hex": "#FFFFF0"
      },
      {
        "name": "Zari Gold",
        "hex": "#D4AF37"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Chanderi Silk with Cotton Lining",
    "occasion": "Wedding",
    "pattern": "Metallic Gold Weave",
    "washCare": "Dry Clean Only",
    "description": "Timeless purity meets royal opulence. This ivory white Anarkali dress features an expansive skirt bordered with traditional Banarasi gold zari floral weaves.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 21
  },
  {
    "id": "lb-lounge-1",
    "slug": "printed-silk-blend-kaftan-lounge-set",
    "name": "Printed Silk Blend Kaftan Lounge Set",
    "tagline": "Drawstring cinch waist kaftan with matching straight pants",
    "price": 1799,
    "originalPrice": 3599,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Kaftan Sets",
    "rating": 4.8,
    "reviewsCount": 176,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Plum Bloom",
        "hex": "#71006A"
      },
      {
        "name": "Turquoise Mist",
        "hex": "#2EC4B6"
      }
    ],
    "sizes": [
      "Free Size (Fits XS - XXL)"
    ],
    "fabric": "Silky Modal Satin",
    "occasion": "Daily Wear",
    "pattern": "Abstract Bohemian Paisley",
    "washCare": "Gentle Machine Wash",
    "description": "Luxuriously smooth modal satin kaftan set adorned with a comfortable drawstring waist and matching breezy straight trousers for opulent home and resort lounging.",
    "isBestSeller": true,
    "isNew": true,
    "stock": 30
  },
  {
    "id": "lb-lounge-2",
    "slug": "pastel-cotton-coord-tunic-and-palazzo-set",
    "name": "Pastel Pink Cotton Co-ord Set with Pockets",
    "tagline": "Mandarin collar boxy tunic with wide leg culotte pants",
    "price": 1499,
    "originalPrice": 2999,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Co-ord Sets",
    "rating": 4.7,
    "reviewsCount": 145,
    "images": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Blush Rose",
        "hex": "#FF8C91"
      },
      {
        "name": "Earthy Taupe",
        "hex": "#B7B7A4"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "100% Slub Cotton",
    "occasion": "Daily Wear",
    "pattern": "Solid Minimalist Textured Weave",
    "washCare": "Machine Wash",
    "description": "Effortless airport and weekend style. Pure textured cotton co-ord set with a boxy mandarin shirt tunic and wide culotte pants with functional deep pockets.",
    "isBestSeller": false,
    "isNew": false,
    "stock": 40
  },
  {
    "id": "lb-lounge-3",
    "slug": "emerald-green-satin-silk-kaftan-set",
    "name": "Emerald Green Festive Satin Kaftan Set",
    "tagline": "Embellished neckline border with relaxed fluid drape",
    "price": 2199,
    "originalPrice": 4399,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Kaftan Sets",
    "rating": 4.9,
    "reviewsCount": 198,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Jewel Emerald",
        "hex": "#1B4332"
      },
      {
        "name": "Bottle Green",
        "hex": "#0D2818"
      }
    ],
    "sizes": [
      "Free Size (Fits XS - XXL)"
    ],
    "fabric": "Heavy Poly Satin Silk",
    "occasion": "Party",
    "pattern": "Zari & Crystal Neckline Trim",
    "washCare": "Dry Clean Recommended",
    "description": "Richly lustrous emerald green satin kaftan trimmed with glittering hand-worked crystals at the V-neck. Includes coordinating relaxed satin trousers.",
    "isBestSeller": true,
    "isNew": true,
    "stock": 22
  },
  {
    "id": "lb-lounge-4",
    "slug": "mustard-floral-block-print-pyjama-lounge-set",
    "name": "Mustard Yellow Cotton Pyjama Lounge Set",
    "tagline": "Classic notched collar shirt with elasticated drawcord pyjama",
    "price": 1299,
    "originalPrice": 2599,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Co-ord Sets",
    "rating": 4.8,
    "reviewsCount": 215,
    "images": [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Marigold Gold",
        "hex": "#E5A93C"
      },
      {
        "name": "Cream Ivory",
        "hex": "#FDF0D5"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Cambric Cotton",
    "occasion": "Daily Wear",
    "pattern": "Handblock Floral Jaal",
    "washCare": "Machine Wash Warm",
    "description": "Ultra-cozy pure cotton nightwear and loungewear set. Tailored with contrast piping along the collar, cuffs, and hem for bedtime luxury.",
    "isBestSeller": false,
    "isNew": false,
    "stock": 45
  },
  {
    "id": "lb-lounge-5",
    "slug": "navy-blue-blazer-kurti-coord-set",
    "name": "Navy Blue Blazer Kurti & Trouser Co-ord Set",
    "tagline": "Tailored ethnic blazer top with cigarette trousers",
    "price": 2299,
    "originalPrice": 4599,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Co-ord Sets",
    "rating": 4.8,
    "reviewsCount": 160,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#1D2D50"
      },
      {
        "name": "Slate Steel",
        "hex": "#2E4057"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Cotton Linen Slub",
    "occasion": "Office Wear",
    "pattern": "Modern Minimalist Solid",
    "washCare": "Gentle Machine Wash",
    "description": "The power dressing upgrade for modern women. An ethnic notched collar blazer tunic paired with matching cigarette trousers in breathable cotton linen.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 25
  },
  {
    "id": "lb-lounge-6",
    "slug": "wine-modal-silk-printed-kaftan-dress",
    "name": "Wine Modal Silk Printed Long Kaftan Set",
    "tagline": "Ankle length fluid drape with tassel drawstrings",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Kaftan Sets",
    "rating": 4.9,
    "reviewsCount": 184,
    "images": [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Rich Wine",
        "hex": "#581845"
      },
      {
        "name": "Berry Plum",
        "hex": "#71006A"
      }
    ],
    "sizes": [
      "Free Size (Fits XS - XXL)"
    ],
    "fabric": "Modal Silk Blend",
    "occasion": "Festive",
    "pattern": "Moroccan Geometric Print",
    "washCare": "Gentle Hand Wash",
    "description": "Draped in rich jewel-toned wine modal silk, this long kaftan set offers effortless grandeur for Diwali card parties and relaxed family celebrations.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 28
  },
  {
    "id": "lb-lounge-7",
    "slug": "sage-green-chikankari-cotton-lounge-set",
    "name": "Sage Green Chikankari Cotton Lounge Co-ord",
    "tagline": "Handcrafted yoke kurti with breezy palazzo pants",
    "price": 1999,
    "originalPrice": 3999,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Co-ord Sets",
    "rating": 4.8,
    "reviewsCount": 150,
    "images": [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Sage Mint",
        "hex": "#84A98C"
      },
      {
        "name": "Pale Olive",
        "hex": "#A3B18A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Mulmul Cotton",
    "occasion": "Daily Wear",
    "pattern": "Subtle Thread Chikankari",
    "washCare": "Gentle Hand Wash",
    "description": "Breathable, pure, and artisanal. This sage green co-ord pairs an easy silhouette with delicate white thread embroidery for serene everyday living.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 32
  },
  {
    "id": "lb-lounge-8",
    "slug": "rust-orange-tie-dye-crepe-coord-set",
    "name": "Rust Orange Shibori Tie-Dye Co-ord Set",
    "tagline": "Asymmetrical tunic with straight ankle pants",
    "price": 1699,
    "originalPrice": 3399,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Co-ord Sets",
    "rating": 4.7,
    "reviewsCount": 122,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Rust Orange",
        "hex": "#C84B31"
      },
      {
        "name": "Golden Honey",
        "hex": "#E28743"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Lightweight Poly Crepe",
    "occasion": "Daily Wear",
    "pattern": "Hand Shibori Resist Pattern",
    "washCare": "Machine Wash Cold",
    "description": "Artisan shibori resist dyeing in vibrant terracotta and rust hues gives this asymmetrical hemline tunic and pant set a chic modern ethnic edge.",
    "isBestSeller": false,
    "isNew": true,
    "stock": 26
  },
  {
    "id": "lb-plus-1",
    "slug": "extralove-mustard-flared-anarkali-suit-set",
    "name": "ExtraLove Mustard Flared Anarkali Suit Set (3XL-6XL)",
    "tagline": "Engineered for curves with comfort stretch lining & flared kali",
    "price": 3199,
    "originalPrice": 6399,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Plus-Size Suits",
    "rating": 4.9,
    "reviewsCount": 278,
    "images": [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Festive Mustard",
        "hex": "#E5A93C"
      },
      {
        "name": "Maroon Crimson",
        "hex": "#7B1113"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "Georgette with Butter Crepe Stretch Lining",
    "occasion": "Festive",
    "pattern": "Gotta Patti & Zari Borders",
    "washCare": "Dry Clean Recommended",
    "description": "Part of our hallmark ExtraLove collection tailored specifically for curvaceous women from sizes 3XL to 6XL. Features deep armhole comfort, stretch waistline pants, and a sweeping flare.",
    "isBestSeller": true,
    "isNew": false,
    "isExtraLove": true,
    "stock": 35
  },
  {
    "id": "lb-plus-2",
    "slug": "extralove-plum-pure-cotton-straight-kurta-set",
    "name": "ExtraLove Plum Cotton Straight Kurta Set (3XL-6XL)",
    "tagline": "Pure breathable cambric cotton with roomy comfort fit palazzos",
    "price": 1999,
    "originalPrice": 3999,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Plus-Size Suits",
    "rating": 4.9,
    "reviewsCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Royal Plum",
        "hex": "#71006A"
      },
      {
        "name": "Blush Mauve",
        "hex": "#A1005E"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "100% Pure Cambric Cotton",
    "occasion": "Daily Wear",
    "pattern": "Intricate Yoke Threadwork",
    "washCare": "Machine Wash Gentle",
    "description": "No compromises on silhouette or comfort. This pure cotton plum straight kurta set features an elongated V-neckline to elongate the frame, paired with elasticated palazzos.",
    "isBestSeller": true,
    "isNew": true,
    "isExtraLove": true,
    "stock": 42
  },
  {
    "id": "lb-plus-3",
    "slug": "extralove-emerald-green-velvet-festive-suit",
    "name": "ExtraLove Emerald Green Velvet Winter Suit (3XL-6XL)",
    "tagline": "Plush royal velvet with Kashmiri tilla embroidery",
    "price": 4499,
    "originalPrice": 8999,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Plus-Size Suits",
    "rating": 4.9,
    "reviewsCount": 165,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Emerald Green",
        "hex": "#1B4332"
      },
      {
        "name": "Midnight Navy",
        "hex": "#0B132B"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "Micro Velvet 9000",
    "occasion": "Wedding",
    "pattern": "Golden Tilla Threadwork",
    "washCare": "Dry Clean Only",
    "description": "Luxurious winter wedding ensemble tailored to flatter fuller silhouettes with structured elegance. Features delicate Kashmiri needlework on yoke and sleeve cuffs.",
    "isBestSeller": false,
    "isNew": true,
    "isExtraLove": true,
    "stock": 18
  },
  {
    "id": "lb-plus-4",
    "slug": "extralove-navy-blue-ajrakh-cotton-kurti",
    "name": "ExtraLove Navy Blue Ajrakh Cotton Kurti (3XL-6XL)",
    "tagline": "A-line flared kurti in breathable handblock cotton",
    "price": 1199,
    "originalPrice": 2399,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Plus-Size Kurtas",
    "rating": 4.8,
    "reviewsCount": 190,
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Indigo Navy",
        "hex": "#1A237E"
      },
      {
        "name": "Rust Red",
        "hex": "#8B263E"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "100% Khadi Cotton",
    "occasion": "Daily Wear",
    "pattern": "Ajrakh Geometric Block",
    "washCare": "Hand Wash Cold",
    "description": "Crafted from cooling, artisanal handblock cotton, this A-line kurti is cut with generous side ease to guarantee unhindered all-day mobility.",
    "isBestSeller": false,
    "isNew": false,
    "isExtraLove": true,
    "stock": 38
  },
  {
    "id": "lb-plus-5",
    "slug": "extralove-wine-chanderi-silk-anarkali-set",
    "name": "ExtraLove Wine Chanderi Silk Anarkali Set (3XL-6XL)",
    "tagline": "24-Kali flare with gold foil motifs & sheer organza dupatta",
    "price": 3499,
    "originalPrice": 6999,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Plus-Size Suits",
    "rating": 4.9,
    "reviewsCount": 220,
    "images": [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Deep Wine",
        "hex": "#581845"
      },
      {
        "name": "Ruby Maroon",
        "hex": "#7B1113"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "Chanderi Silk Blend",
    "occasion": "Festive",
    "pattern": "Foil Motif with Zari Border",
    "washCare": "Dry Clean Recommended",
    "description": "Celebrate with unmatched confidence in this magnificent deep wine Anarkali set, meticulously engineered with customized proportions for sizes up to 6XL.",
    "isBestSeller": true,
    "isNew": false,
    "isExtraLove": true,
    "stock": 25
  },
  {
    "id": "lb-plus-6",
    "slug": "extralove-blush-pink-chikankari-straight-suit",
    "name": "ExtraLove Blush Pink Lucknowi Chikankari Set (3XL-6XL)",
    "tagline": "Delicate shadow work embroidery with stretch waistband",
    "price": 2399,
    "originalPrice": 4799,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Plus-Size Suits",
    "rating": 4.8,
    "reviewsCount": 175,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Soft Blush",
        "hex": "#FF8C91"
      },
      {
        "name": "Off White",
        "hex": "#FAF0CA"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "Pure Mulmul Cotton",
    "occasion": "Daily Wear",
    "pattern": "Handcrafted Chikankari Floral Jaal",
    "washCare": "Hand Wash Separately",
    "description": "Subtle romantic charm meets inclusive sizing. Pure mulmul cotton straight kurti and comfort palazzos covered in exquisite Lucknowi threadwork.",
    "isBestSeller": false,
    "isNew": true,
    "isExtraLove": true,
    "stock": 31
  },
  {
    "id": "lb-plus-7",
    "slug": "extralove-teal-green-kaftan-lounge-set",
    "name": "ExtraLove Teal Green Silk Kaftan Set (3XL-6XL)",
    "tagline": "Relaxed cinch waist with easy fit straight trousers",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Plus-Size Loungewear",
    "rating": 4.7,
    "reviewsCount": 140,
    "images": [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Peacock Teal",
        "hex": "#005F73"
      },
      {
        "name": "Emerald Moss",
        "hex": "#1B4332"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "Modal Satin Silk",
    "occasion": "Party",
    "pattern": "Bohemian Geometric Foil Trim",
    "washCare": "Gentle Machine Wash",
    "description": "The ultimate party and lounge luxury for curvy ladies. Silky modal satin kaftan silhouette with adjustable drawstring waist cinching.",
    "isBestSeller": false,
    "isNew": true,
    "isExtraLove": true,
    "stock": 26
  },
  {
    "id": "lb-plus-8",
    "slug": "extralove-ruby-red-georgette-sharara-suit",
    "name": "ExtraLove Ruby Red Georgette Sharara Set (3XL-6XL)",
    "tagline": "Tiered ruffle sharara with comfortable elasticated waistband",
    "price": 2899,
    "originalPrice": 5799,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Plus-Size Suits",
    "rating": 4.9,
    "reviewsCount": 245,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Ruby Red",
        "hex": "#9B111E"
      },
      {
        "name": "Gold Gota",
        "hex": "#FFD700"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "Poly Georgette with Shantoon Lining",
    "occasion": "Wedding",
    "pattern": "Rajasthani Gota Patti & Mirror Accents",
    "washCare": "Dry Clean Only",
    "description": "Celebrate like royalty in this dramatic ruby red sharara ensemble, engineered with extra flare and thigh comfort for sizes 3XL through 6XL.",
    "isBestSeller": true,
    "isNew": false,
    "isExtraLove": true,
    "stock": 29
  },
  {
    "id": "lb-sale-1",
    "slug": "sale-mustard-gotta-patti-sharara-set",
    "name": "Festive Deal: Mustard Gotta Patti Sharara Set",
    "tagline": "Seasonal flash price \u2022 Flat 50% discount",
    "price": 2799,
    "originalPrice": 5599,
    "discountPercentage": 50,
    "category": "Sale",
    "subCategory": "Sale Suits",
    "rating": 4.8,
    "reviewsCount": 215,
    "images": [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Mustard Gold",
        "hex": "#E5A93C"
      },
      {
        "name": "Coral Rose",
        "hex": "#EE6C4D"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Poly Georgette",
    "occasion": "Festive",
    "pattern": "Traditional Gotta Patti",
    "washCare": "Dry Clean Recommended",
    "description": "Flash Festive Offer! Luminous gota patti lace work on flared sharara pants at flat 50% seasonal discount. Limited inventory.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 18
  },
  {
    "id": "lb-sale-2",
    "slug": "sale-purple-zari-silk-anarkali-suit",
    "name": "Festive Deal: Purple Zari Silk Anarkali Suit Set",
    "tagline": "Grand celebratory couture at direct workshop pricing",
    "price": 3499,
    "originalPrice": 6999,
    "discountPercentage": 50,
    "category": "Sale",
    "subCategory": "Sale Suits",
    "rating": 4.9,
    "reviewsCount": 382,
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Royal Plum",
        "hex": "#71006A"
      },
      {
        "name": "Rani Pink",
        "hex": "#A1005E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Chanderi Silk Blend",
    "occasion": "Wedding",
    "pattern": "Intricate Zari Embroidery",
    "washCare": "Dry Clean Only",
    "description": "Our #1 Bestselling purple Anarkali suit set now at an irresistible flat 50% discount for the festive edit.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 24
  },
  {
    "id": "lb-sale-3",
    "slug": "sale-burgundy-organza-saree",
    "name": "Festive Deal: Burgundy Zari Woven Organza Saree",
    "tagline": "Gossamer tissue organza with heavy brocade blouse",
    "price": 2499,
    "originalPrice": 5399,
    "discountPercentage": 54,
    "category": "Sale",
    "subCategory": "Sale Sarees",
    "rating": 4.9,
    "reviewsCount": 218,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Burgundy Wine",
        "hex": "#6A0572"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Pure Tissue Organza",
    "occasion": "Festive",
    "pattern": "Scalloped Zari Embroidered Border",
    "washCare": "Dry Clean Only",
    "description": "54% OFF! Ultralight sheer organza in deep celebratory burgundy wine. Includes rich designer blouse piece.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 15
  },
  {
    "id": "lb-sale-4",
    "slug": "sale-peach-peplum-cotton-kurti",
    "name": "Festive Deal: Peach Peplum Tunic Kurti",
    "tagline": "Pure slub cotton kurti under \u20b9900",
    "price": 799,
    "originalPrice": 1799,
    "discountPercentage": 56,
    "category": "Sale",
    "subCategory": "Sale Kurtas",
    "rating": 4.6,
    "reviewsCount": 145,
    "images": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Warm Peach",
        "hex": "#F4A261"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Pure Slub Cotton",
    "occasion": "Daily Wear",
    "pattern": "Floral Thread Yoke",
    "washCare": "Machine Wash Cold",
    "description": "56% OFF Mega Deal! Flared peplum short tunic in pure cotton with delicate yoke needlework.",
    "isBestSeller": false,
    "isNew": false,
    "stock": 35
  },
  {
    "id": "lb-sale-5",
    "slug": "sale-wine-chanderi-straight-kurta",
    "name": "Festive Deal: Wine Foil Print Silk Kurta",
    "tagline": "Bestselling Chanderi silk kurti at half price",
    "price": 1199,
    "originalPrice": 2599,
    "discountPercentage": 54,
    "category": "Sale",
    "subCategory": "Sale Kurtas",
    "rating": 4.8,
    "reviewsCount": 287,
    "images": [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Burgundy Wine",
        "hex": "#581845"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Chanderi Silk Blend",
    "occasion": "Festive",
    "pattern": "Metallic Gold Floral Foil",
    "washCare": "Dry Clean Recommended",
    "description": "Special Festive Sale price for our timeless wine Chanderi silk straight kurta. Pair with gold cigarette pants.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 28
  },
  {
    "id": "lb-sale-6",
    "slug": "sale-ready-to-wear-georgette-saree",
    "name": "Festive Deal: 1-Minute Ready-to-Wear Georgette Saree",
    "tagline": "Pre-pleated instant drape with designer waistbelt",
    "price": 1999,
    "originalPrice": 4399,
    "discountPercentage": 55,
    "category": "Sale",
    "subCategory": "Sale Sarees",
    "rating": 4.8,
    "reviewsCount": 312,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Crimson Scarlet",
        "hex": "#BA181B"
      }
    ],
    "sizes": [
      "Free Size (Waist 28 - 42)"
    ],
    "fabric": "Crush Micro Georgette",
    "occasion": "Party",
    "pattern": "Solid Micro-Pleating with Embellished Belt",
    "washCare": "Dry Clean Recommended",
    "description": "Flat 55% OFF! Wear your saree in 60 seconds with pre-stitched pleats and hook waistband.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 25
  },
  {
    "id": "lb-sale-7",
    "slug": "sale-blush-cotton-palazzo-suit",
    "name": "Festive Deal: Blush Cotton Straight Kurta & Palazzo Set",
    "tagline": "Pure 60s cambric cotton with mulmul dupatta",
    "price": 1699,
    "originalPrice": 3799,
    "discountPercentage": 55,
    "category": "Sale",
    "subCategory": "Sale Suits",
    "rating": 4.7,
    "reviewsCount": 164,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Blush Pink",
        "hex": "#FF8C91"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Pure Cambric Cotton",
    "occasion": "Daily Wear",
    "pattern": "Sanganeri Block Print",
    "washCare": "Gentle Machine Wash",
    "description": "55% OFF Festive Flash Price! Breathable pure cambric cotton 3-piece suit set.",
    "isBestSeller": false,
    "isNew": false,
    "stock": 36
  },
  {
    "id": "lb-sale-8",
    "slug": "sale-flared-angrakha-maxi-dress",
    "name": "Festive Deal: Maroon Flared Angrakha Maxi Gown",
    "tagline": "Tiered ethnic gown with gota borders",
    "price": 2199,
    "originalPrice": 4999,
    "discountPercentage": 56,
    "category": "Sale",
    "subCategory": "Sale Dresses",
    "rating": 4.8,
    "reviewsCount": 189,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Deep Maroon",
        "hex": "#7A0026"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Rayon Crepe with Shantoon Lining",
    "occasion": "Festive",
    "pattern": "Angrakha Overlap with Gota Trims",
    "washCare": "Hand Wash Separately",
    "description": "56% OFF! Dramatic full length ethnic gown with voluminous flare and handmade dori tassels.",
    "isBestSeller": true,
    "isNew": false,
    "stock": 20
  }
];

// --- 2. State & Storage (Cart & Wishlist) ---
function getLocalCart() {
  try {
    return JSON.parse(localStorage.getItem('libas_cart') || '[]');
  } catch(e) { return []; }
}

function saveLocalCart(cart) {
  localStorage.setItem('libas_cart', JSON.stringify(cart));
  updateCartUI();
}

function getLocalWishlist() {
  try {
    return JSON.parse(localStorage.getItem('libas_wishlist') || '[]');
  } catch(e) { return []; }
}

function toggleLocalWishlist(id) {
  let list = getLocalWishlist();
  if (list.includes(id)) {
    list = list.filter(item => item !== id);
  } else {
    list.push(id);
  }
  localStorage.setItem('libas_wishlist', JSON.stringify(list));
  updateWishlistUI();
}

function updateCartUI() {
  const cart = getLocalCart();
  const badges = document.querySelectorAll('[data-cart-badge], .site-header .bg-white.text-\\[\\#71006A\\]');
  const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  badges.forEach(b => b.textContent = count);

  // Render items inside Cart Drawer
  const itemsContainer = document.getElementById('CartDrawerItems');
  const subtotalEl = document.getElementById('CartDrawerSubtotal');
  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="py-16 text-center space-y-3">
          <div class="w-14 h-14 rounded-full bg-[#FAF7F9] text-[#71006A] flex items-center justify-center mx-auto text-2xl">🛍️</div>
          <p class="text-xs font-bold text-[#252525]">Your Shopping Bag is empty</p>
          <p class="text-[11px] text-[#737373]">Discover our festive suit sets and kurtas.</p>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '₹0';
    } else {
      let subtotal = 0;
      itemsContainer.innerHTML = cart.map((item, idx) => {
        subtotal += item.price * (item.quantity || 1);
        return `
          <div class="flex gap-3 p-3 bg-[#FAF7F9] rounded-xl border border-[#E6E6E6] items-center relative">
            <div class="w-14 h-18 rounded-lg overflow-hidden bg-white shrink-0 aspect-[3/4]">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-bold text-[#252525] truncate">${item.title}</h4>
              <p class="text-[10px] text-[#737373]">Size: ${item.size || 'M'} • Qty: ${item.quantity || 1}</p>
              <span class="text-xs font-bold text-[#71006A] mt-0.5 block">₹${(item.price * (item.quantity || 1)).toLocaleString('en-IN')}</span>
            </div>
            <button onclick="removeCartItem(${idx})" class="text-[#737373] hover:text-[#D92D20] text-xs p-1 bg-transparent border-none cursor-pointer">✕</button>
          </div>
        `;
      }).join('');
      if (subtotalEl) subtotalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');
    }
  }
}

window.removeCartItem = function(idx) {
  let cart = getLocalCart();
  cart.splice(idx, 1);
  saveLocalCart(cart);
};

window.addToCartItem = function(id, size) {
  const prod = LIBAS_CATALOG.find(p => p.id === id) || LIBAS_CATALOG[0];
  let cart = getLocalCart();
  const existing = cart.find(c => c.id === prod.id && c.size === (size || 'M'));
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: prod.id,
      title: prod.name,
      price: prod.price,
      image: prod.images[0],
      size: size || 'M',
      quantity: 1
    });
  }
  saveLocalCart(cart);
  openCartDrawer();
};

function updateWishlistUI() {
  const wishlist = getLocalWishlist();
  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    const id = btn.getAttribute('data-wishlist-id');
    if (wishlist.includes(id)) {
      btn.classList.add('text-[#71006A]');
      btn.innerHTML = '❤️';
    } else {
      btn.classList.remove('text-[#71006A]');
      btn.innerHTML = '🤍';
    }
  });
}

// --- 3. Modal Controllers ---
function openCartDrawer() {
  const cartDrawer = document.getElementById('CartDrawer');
  const cartDrawerOverlay = document.getElementById('CartDrawerOverlay');
  if (cartDrawer && cartDrawerOverlay) {
    cartDrawer.classList.add('active');
    cartDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateCartUI();
  }
}

function closeCartDrawer() {
  const cartDrawer = document.getElementById('CartDrawer');
  const cartDrawerOverlay = document.getElementById('CartDrawerOverlay');
  if (cartDrawer && cartDrawerOverlay) {
    cartDrawer.classList.remove('active');
    cartDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openQuickView(id) {
  const prod = LIBAS_CATALOG.find(p => p.id === id) || LIBAS_CATALOG[0];
  const quickViewModal = document.getElementById('QuickViewModal');
  if (!quickViewModal) return;

  const titleEl = document.getElementById('qv-title');
  const priceEl = document.getElementById('qv-price');
  const origPriceEl = document.getElementById('qv-original-price');
  const imgEl = document.getElementById('qv-image');
  const addBtn = document.getElementById('qv-add-btn');

  if (titleEl) titleEl.textContent = prod.name;
  if (priceEl) priceEl.textContent = '₹' + prod.price.toLocaleString('en-IN');
  if (origPriceEl) origPriceEl.textContent = '₹' + prod.originalPrice.toLocaleString('en-IN');
  if (imgEl) imgEl.src = prod.images[0];
  if (addBtn) {
    addBtn.onclick = function() {
      addToCartItem(prod.id, 'M');
      quickViewModal.classList.remove('active');
      document.body.style.overflow = '';
    };
  }

  quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const quickViewModal = document.getElementById('QuickViewModal');
  if (quickViewModal) {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- 4. Product Card Template Helper ---
function renderProductCardHTML(prod) {
  const isWish = getLocalWishlist().includes(prod.id);
  return `
    <div class="product-card group rounded-xl overflow-hidden bg-white border border-[#E6E6E6] hover:border-[#71006A] transition-all">
      <div class="product-card-image relative aspect-[3/4] bg-[#F5F5F5] rounded-xl overflow-hidden">
        <a href="/products/${prod.slug || prod.id}" onclick="event.preventDefault(); navigateTo('/products/${prod.slug || prod.id}');">
          <img
            src="${prod.images[0]}"
            alt="${prod.name}"
            loading="lazy"
            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          >
        </a>

        <span class="product-badge absolute top-2 left-2 bg-[#71006A] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          ${prod.discountPercentage || 50}% OFF
        </span>

        <button
          type="button"
          data-wishlist-id="${prod.id}"
          onclick="toggleLocalWishlist('${prod.id}')"
          class="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-xs border-none cursor-pointer shadow-xs z-10"
        >
          ${isWish ? '❤️' : '🤍'}
        </button>

        <button
          type="button"
          onclick="openQuickView('${prod.id}')"
          class="quick-view-btn"
        >
          Quick View
        </button>
      </div>

      <div class="p-3 text-left space-y-1">
        <span class="text-[9px] font-mono uppercase text-[#71006A] font-extrabold tracking-wider block">
          ${prod.subCategory || 'LIBAS FESTIVE'}
        </span>
        <h3 class="text-xs font-semibold text-[#252525] line-clamp-1 group-hover:text-[#71006A] transition-colors">
          <a href="/products/${prod.slug || prod.id}" onclick="event.preventDefault(); navigateTo('/products/${prod.slug || prod.id}');">${prod.name}</a>
        </h3>
        <div class="flex items-baseline gap-2 pt-0.5">
          <span class="text-xs font-bold text-[#71006A]">₹${prod.price.toLocaleString('en-IN')}</span>
          <span class="text-[10px] text-[#999999] line-through">₹${prod.originalPrice.toLocaleString('en-IN')}</span>
          <span class="text-[10px] text-emerald-700 font-bold">${prod.discountPercentage || 50}% off</span>
        </div>
        <button
          type="button"
          onclick="addToCartItem('${prod.id}', 'M')"
          class="w-full mt-2 py-1.5 rounded bg-[#FAF7F9] hover:bg-[#71006A] hover:text-white text-[#71006A] text-[10px] font-bold uppercase tracking-wider transition-colors border border-[#E6E6E6] cursor-pointer"
        >
          + Add to Bag
        </button>
      </div>
    </div>
  `;
}

// --- 5. Page Views Generator (Full Next.js Clones) ---

// --- 2.5 Search Engine & Predictive Autocomplete Logic ---
const TRENDING_SEARCHES = [
  'Anarkali Suits',
  'Organza Sarees',
  'Cotton Kurtis',
  'Sharara Sets',
  'ExtraLove 3XL-6XL',
  'Festive Sale Deals',
  'Velvet Kurta',
  'Silk Dupatta'
];

function getSearchHistory() {
  try {
    const raw = localStorage.getItem('libas_search_history');
    if (!raw) return ['Anarkali Suits', 'Cotton Kurti', 'Festive Sarees'];
    return JSON.parse(raw);
  } catch (e) {
    return ['Anarkali Suits', 'Cotton Kurti', 'Festive Sarees'];
  }
}

function addSearchHistory(term) {
  if (!term || !term.trim()) return;
  const clean = term.trim();
  let history = getSearchHistory().filter(item => item.toLowerCase() !== clean.toLowerCase());
  history.unshift(clean);
  if (history.length > 8) history = history.slice(0, 8);
  try {
    localStorage.setItem('libas_search_history', JSON.stringify(history));
  } catch (e) {}
}

function removeSearchHistory(term) {
  let history = getSearchHistory().filter(item => item !== term);
  try {
    localStorage.setItem('libas_search_history', JSON.stringify(history));
  } catch (e) {}
}

function clearAllSearchHistory() {
  try {
    localStorage.removeItem('libas_search_history');
  } catch (e) {}
}

function searchCatalogProducts(query) {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  const tokens = q.split(/\s+/).filter(Boolean);

  return LIBAS_CATALOG.filter(p => {
    const searchTarget = [
      p.name,
      p.category,
      p.subCategory || '',
      p.fabric || '',
      p.occasion || '',
      p.pattern || '',
      p.description || '',
      (p.colors || []).map(c => c.name).join(' ')
    ].join(' ').toLowerCase();

    if (searchTarget.includes(q)) return true;

    return tokens.every(tok => {
      if ((tok === 'suit' || tok === 'suits') && searchTarget.includes('suit')) return true;
      if ((tok === 'kurta' || tok === 'kurti' || tok === 'kurtas') && searchTarget.includes('kurta')) return true;
      if ((tok === 'saree' || tok === 'sari' || tok === 'sarees') && searchTarget.includes('saree')) return true;
      if ((tok === 'dress' || tok === 'dresses' || tok === 'gown') && (searchTarget.includes('dress') || searchTarget.includes('gown'))) return true;
      if ((tok === 'plus' || tok === 'curvy' || tok === 'extralove') && (p.isExtraLove || searchTarget.includes('plus'))) return true;
      if ((tok === 'sale' || tok === 'discount' || tok === 'offer') && (p.discountPercentage >= 50 || p.isBestSeller)) return true;
      return searchTarget.includes(tok);
    });
  });
}

function renderSearchDropdownHTML(query) {
  const q = (query || '').trim();
  const history = getSearchHistory();

  if (!q) {
    return `
      <div class="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
        ${history.length > 0 ? `
          <div>
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-[#F5F5F5]">
              <div class="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                <svg class="w-3.5 h-3.5 text-[#71006A]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>Recent Searches</span>
              </div>
              <button type="button" class="text-[10px] font-bold text-[#71006A] hover:underline bg-transparent border-none cursor-pointer" onclick="handleClearAllHistory(event)">Clear All</button>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${history.map(item => `
                <div class="inline-flex items-center gap-1 px-3 py-1 bg-[#FAF7F9] hover:bg-[#F3EBF1] border border-[#E6E6E6] rounded-full text-xs text-[#252525] group cursor-pointer transition-colors" onclick="triggerSearchTerm('${item.replace(/'/g, "\\'")}')">
                  <span>${item}</span>
                  <button type="button" class="text-[10px] text-[#737373] hover:text-[#D92D20] bg-transparent border-none cursor-pointer p-0 ml-1 leading-none" onclick="handleRemoveHistoryItem(event, '${item.replace(/'/g, "\\'")}')" aria-label="Remove item">✕</button>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div>
          <div class="flex items-center gap-1.5 pb-2 mb-2 border-b border-[#F5F5F5] text-[11px] font-bold uppercase tracking-wider text-[#737373]">
            <span class="text-sm">🔥</span>
            <span>Trending Searches</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${TRENDING_SEARCHES.map(tag => `
              <button type="button" onclick="triggerSearchTerm('${tag.replace(/'/g, "\\'")}')" class="search-tag-chip px-3 py-1 bg-[#FAF7F9] hover:bg-[#71006A] hover:text-white border border-[#E6E6E6] rounded-full text-xs text-[#4D4D4D] transition-colors cursor-pointer">
                ${tag}
              </button>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="text-[10px] font-mono font-bold uppercase tracking-widest text-[#71006A] mb-2">QUICK CATEGORIES</div>
          <div class="grid grid-cols-2 gap-1.5 text-xs">
            <a href="/collections/suits" class="p-2 rounded-lg bg-[#FAF7F9] hover:bg-[#F3EBF1] flex items-center gap-2 text-[#252525] font-bold"><span class="text-base">👗</span> Suits & Sets</a>
            <a href="/collections/kurtas" class="p-2 rounded-lg bg-[#FAF7F9] hover:bg-[#F3EBF1] flex items-center gap-2 text-[#252525] font-bold"><span class="text-base">👚</span> Kurtas & Kurtis</a>
            <a href="/collections/sarees" class="p-2 rounded-lg bg-[#FAF7F9] hover:bg-[#F3EBF1] flex items-center gap-2 text-[#252525] font-bold"><span class="text-base">🥻</span> Sarees</a>
            <a href="/collections/plus-size" class="p-2 rounded-lg bg-[#FAF7F9] hover:bg-[#F3EBF1] flex items-center gap-2 text-[#71006A] font-bold"><span class="text-base">💜</span> ExtraLove (3XL-6XL)</a>
          </div>
        </div>
      </div>
    `;
  }

  const matches = searchCatalogProducts(q);

  if (matches.length === 0) {
    return `
      <div class="p-6 text-center space-y-3">
        <div class="w-12 h-12 rounded-full bg-[#FAF7F9] text-[#71006A] flex items-center justify-center mx-auto text-xl">🔍</div>
        <p class="text-xs font-bold text-[#252525]">No products matching "${q}"</p>
        <p class="text-[11px] text-[#737373]">Try searching for Anarkali, Kurta, Organza, Velvet, or Silk</p>
        <div class="pt-2 flex flex-wrap gap-1.5 justify-center">
          ${TRENDING_SEARCHES.slice(0, 4).map(tag => `
            <button type="button" onclick="triggerSearchTerm('${tag.replace(/'/g, "\\'")}')" class="px-2.5 py-1 bg-[#FAF7F9] hover:bg-[#71006A] hover:text-white border border-[#E6E6E6] rounded-full text-[11px] text-[#4D4D4D] transition-colors cursor-pointer">
              ${tag}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  const topMatches = matches.slice(0, 5);

  return `
    <div class="max-h-[75vh] overflow-y-auto">
      <div class="px-4 py-2.5 bg-[#FAF7F9] border-b border-[#E6E6E6] flex items-center justify-between text-xs">
        <span class="font-bold text-[#252525]">Matching Products (${matches.length})</span>
        <button type="button" onclick="triggerSearchTerm('${q.replace(/'/g, "\\'")}')" class="text-[11px] font-bold text-[#71006A] hover:underline bg-transparent border-none cursor-pointer">
          View All (${matches.length}) →
        </button>
      </div>

      <div class="divide-y divide-[#F5F5F5]">
        ${topMatches.map(prod => `
          <a
            href="/products/${prod.slug || prod.id}"
            onclick="event.preventDefault(); addSearchHistory('${q.replace(/'/g, "\\'")}'); navigateTo('/products/${prod.slug || prod.id}'); document.querySelectorAll('[data-search-dropdown]').forEach(d => d.classList.add('hidden'));"
            class="search-result-item flex items-center gap-3 p-3 hover:bg-[#FAF7F9] transition-colors text-left"
          >
            <div class="w-12 h-16 rounded-md overflow-hidden bg-[#F5F5F5] shrink-0 aspect-[3/4]">
              <img src="${prod.images[0]}" alt="${prod.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <span class="text-[10px] font-mono text-[#71006A] uppercase font-bold block">${prod.category} • ${prod.fabric || ''}</span>
              <h4 class="text-xs font-bold text-[#252525] truncate">${prod.name}</h4>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-xs font-extrabold text-[#71006A]">₹${prod.price.toLocaleString('en-IN')}</span>
                ${prod.originalPrice ? `<span class="text-[10px] text-[#737373] line-through">₹${prod.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                ${prod.discountPercentage ? `<span class="text-[9px] font-bold text-[#D92D20]">${prod.discountPercentage}% OFF</span>` : ''}
              </div>
            </div>
            <span class="text-xs text-[#737373] mr-1">→</span>
          </a>
        `).join('')}
      </div>

      <div class="p-3 bg-[#FAF7F9] border-t border-[#E6E6E6] text-center">
        <button
          type="button"
          onclick="triggerSearchTerm('${q.replace(/'/g, "\\'")}')"
          class="w-full py-2 bg-[#71006A] hover:bg-[#560050] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border-none cursor-pointer shadow-xs"
        >
          See All ${matches.length} Results for "${q}" →
        </button>
      </div>
    </div>
  `;
}

function getSearchPageHTML(query) {
  const q = (query || '').trim();
  const results = q ? searchCatalogProducts(q) : LIBAS_CATALOG;
  const categories = ['All', 'Suits', 'Kurtas', 'Sarees', 'Dresses', 'Loungewear', 'Plus-Size', 'Sale'];

  return `
    <div class="py-10 bg-white min-h-screen">
      <div class="container">
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-xs text-[#737373] mb-6">
          <a href="/" onclick="event.preventDefault(); navigateTo('/');" class="hover:text-[#71006A]">Home</a>
          <span>/</span>
          <span class="text-[#252525] font-bold">Search</span>
        </nav>

        <!-- Search Header -->
        <div class="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            LIBAS PRODUCT DISCOVERY
          </span>
          <h1 class="text-2xl sm:text-4xl font-serif font-bold text-[#252525]">
            ${q ? `Search results for "${q}"` : 'Explore All Festive Styles'}
          </h1>
          <p class="text-xs sm:text-sm text-[#737373]">
            Found <strong class="text-[#71006A] font-bold">${results.length}</strong> styles matching your preferences.
          </p>

          <!-- In-page Search Bar -->
          <form onsubmit="event.preventDefault(); const val = this.querySelector('input').value; navigateTo('/search?q=' + encodeURIComponent(val));" class="max-w-lg mx-auto relative pt-2">
            <input
              type="search"
              value="${q.replace(/"/g, '&quot;')}"
              placeholder="Refine search: Suits, Sarees, Georgette, Anarkali..."
              class="w-full pl-10 pr-24 py-2.5 text-xs bg-[#FAF7F9] border border-[#E6E6E6] rounded-full outline-none focus:border-[#71006A] transition-colors"
            >
            <svg class="w-4 h-4 text-[#737373] absolute left-3.5 top-[19px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
            <button type="submit" class="absolute right-1.5 top-[11px] px-4 py-1.5 bg-[#71006A] text-white rounded-full text-xs font-bold hover:bg-[#560050] transition-colors border-none cursor-pointer">
              Search
            </button>
          </form>

          <!-- Trending Tags under search -->
          <div class="flex flex-wrap items-center justify-center gap-1.5 pt-2">
            <span class="text-[10px] text-[#737373] font-bold uppercase tracking-wider mr-1">Trending:</span>
            ${TRENDING_SEARCHES.slice(0, 5).map(tag => `
              <button type="button" onclick="triggerSearchTerm('${tag.replace(/'/g, "\\'")}')" class="px-2.5 py-1 bg-[#FAF7F9] hover:bg-[#71006A] hover:text-white border border-[#E6E6E6] rounded-full text-[11px] text-[#4D4D4D] transition-colors cursor-pointer">
                ${tag}
              </button>
            `).join('')}
          </div>
        </div>

        ${results.length === 0 ? `
          <!-- Empty State -->
          <div class="max-w-md mx-auto text-center py-16 space-y-4 bg-[#FAF7F9] rounded-2xl border border-[#E6E6E6] p-8">
            <div class="w-16 h-16 rounded-full bg-white text-[#71006A] flex items-center justify-center mx-auto text-3xl shadow-xs">🔍</div>
            <h3 class="text-base font-bold text-[#252525]">No festive styles found matching "${q}"</h3>
            <p class="text-xs text-[#737373]">
              We could not find an exact match. Try checking spelling, using simpler words, or explore our most sought-after festive collections below.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 justify-center">
              <a href="/collections/suits" class="px-4 py-2 rounded-full bg-[#71006A] text-white text-xs font-bold hover:bg-[#560050]">View Suits</a>
              <a href="/collections/kurtas" class="px-4 py-2 rounded-full bg-white border border-[#E6E6E6] text-xs font-bold text-[#252525] hover:border-[#71006A]">View Kurtas</a>
              <a href="/collections/sarees" class="px-4 py-2 rounded-full bg-white border border-[#E6E6E6] text-xs font-bold text-[#252525] hover:border-[#71006A]">View Sarees</a>
            </div>
          </div>
        ` : `
          <!-- Toolbar & Category Filter Pills -->
          <div class="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar" style="scrollbar-width: none;">
            ${categories.map((cat, idx) => `
              <button
                type="button"
                onclick="filterSearchResultCategory('${cat}')"
                class="search-cat-chip ${idx === 0 ? 'active bg-[#71006A] text-white' : 'bg-[#FAF7F9] text-[#252525] border border-[#E6E6E6]'} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap hover:border-[#71006A] transition-colors"
                data-search-cat="${cat}"
              >
                ${cat}
              </button>
            `).join('')}
          </div>

          <div class="flex items-center justify-between pb-4 border-b border-[#E6E6E6] mb-8 text-xs text-[#737373]">
            <div>Showing <strong class="text-[#252525]" id="searchResultCount">${results.length}</strong> styles</div>
            <div class="flex items-center gap-2">
              <span class="hidden sm:inline">⚡ Instant Dispatch & Free Returns</span>
            </div>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" id="search-product-grid">
            ${results.map(p => renderProductCardHTML(p)).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}


function getCollectionPageHTML(category, title, tagline) {
  const filtered = LIBAS_CATALOG.filter(p => {
    if (category === 'All') return true;
    if (category === 'Plus-Size') return p.isExtraLove || p.category === 'Plus-Size' || p.category === 'Plus Size';
    if (category === 'Sale') return p.discountPercentage >= 50 || p.category === 'Sale';
    return p.category.toLowerCase() === category.toLowerCase();
  });

  const subcats = ['All', ...new Set(filtered.map(p => p.subCategory || p.occasion).filter(Boolean))];

  return `
    <div class="py-10 bg-white min-h-screen">
      <div class="container">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">
            LIBAS FESTIVE EDIT • ${category.toUpperCase()}
          </span>
          <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">
            ${title}
          </h1>
          <p class="text-xs sm:text-sm text-[#737373]">
            ${tagline}
          </p>
        </div>

        <!-- Subcategory Filter Chips -->
        <div class="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" style="scrollbar-width: none;">
          ${subcats.map((sc, i) => `
            <button
              type="button"
              onclick="filterSubcat('${sc}')"
              class="subcat-chip ${i === 0 ? 'active bg-[#71006A] text-white' : 'bg-[#FAF7F9] text-[#252525] border'} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
            >
              ${sc}
            </button>
          `).join('')}
        </div>

        <!-- Toolbar -->
        <div class="flex items-center justify-between pb-4 border-b border-[#E6E6E6] mb-8 text-xs text-[#737373]">
          <div>Showing <strong class="text-[#252525]">${filtered.length}</strong> festive silhouettes</div>
          <div class="flex items-center gap-2">
            <span>Free Doorstep Pickup & Exchanges</span>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" id="coll-product-grid">
          ${filtered.map(p => renderProductCardHTML(p)).join('')}
        </div>
      </div>
    </div>
  `;
}

function getProductDetailPageHTML(productOrId) {
  let prod = LIBAS_CATALOG.find(p => p.id === productOrId || p.slug === productOrId);
  if (!prod) prod = LIBAS_CATALOG[0];

  const related = LIBAS_CATALOG.filter(p => p.category === prod.category && p.id !== prod.id).slice(0, 4);

  return `
    <div class="bg-white min-h-screen py-8">
      <div class="container max-w-6xl">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs text-[#737373] pb-6 border-b border-[#E6E6E6] mb-8">
          <a href="/" onclick="event.preventDefault(); navigateTo('/');" class="hover:text-[#71006A]">Home</a>
          <span>›</span>
          <a href="/collections/${prod.category.toLowerCase()}" onclick="event.preventDefault(); navigateTo('/collections/${prod.category.toLowerCase()}');" class="hover:text-[#71006A]">${prod.category}</a>
          <span>›</span>
          <span class="text-[#252525] font-semibold truncate max-w-xs">${prod.name}</span>
        </nav>

        <!-- Product Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <!-- Gallery -->
          <div class="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            <div class="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible shrink-0">
              ${prod.images.map((img, i) => `
                <button onclick="document.getElementById('pdp-main-img').src='${img}'" class="w-16 h-20 rounded-lg overflow-hidden border border-[#E6E6E6] hover:border-[#71006A] p-0.5 bg-white cursor-pointer aspect-[3/4]">
                  <img src="${img}" class="w-full h-full object-cover">
                </button>
              `).join('')}
            </div>
            <div class="flex-1 rounded-2xl overflow-hidden bg-[#F5F5F5] aspect-[3/4] border border-[#E6E6E6]">
              <img id="pdp-main-img" src="${prod.images[0]}" alt="${prod.name}" class="w-full h-full object-cover object-top">
            </div>
          </div>

          <!-- Buy Box -->
          <div class="lg:col-span-5 space-y-6">
            <div class="space-y-1 pb-4 border-b border-[#E6E6E6]">
              <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">${prod.subCategory || 'FESTIVE COUTURE'}</span>
              <h1 class="text-2xl sm:text-3xl font-serif font-bold text-[#252525]">${prod.name}</h1>
              <p class="text-xs text-[#737373]">${prod.tagline || ''}</p>
              <div class="flex items-baseline gap-3 pt-2">
                <span class="text-2xl font-bold text-[#71006A]">₹${prod.price.toLocaleString('en-IN')}</span>
                <span class="text-sm text-[#999999] line-through">₹${prod.originalPrice.toLocaleString('en-IN')}</span>
                <span class="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">${prod.discountPercentage || 50}% OFF</span>
              </div>
            </div>

            <!-- Size Selector -->
            <div class="space-y-2">
              <div class="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#252525]">
                <span>Select Size</span>
                <span class="text-[#71006A] lowercase text-[11px] underline cursor-pointer">Size Guide</span>
              </div>
              <div class="flex flex-wrap gap-2" id="pdp-sizes">
                ${prod.sizes.map((s, idx) => `
                  <button type="button" onclick="selectPdpSize(this, '${s}')" class="size-btn ${idx === 0 ? 'bg-[#71006A] text-white border-[#71006A]' : 'bg-white text-[#252525] border-[#E6E6E6]'} px-4 py-2 rounded-lg border text-xs font-bold cursor-pointer transition-colors">
                    ${s}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3 pt-2">
              <button
                type="button"
                id="pdp-add-bag"
                onclick="addToCartItem('${prod.id}', window.selectedPdpSizeVal || '${prod.sizes[0]}')"
                class="w-full py-3.5 rounded-lg bg-[#71006A] hover:bg-[#560050] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2 border-none cursor-pointer"
              >
                <span>Add to Bag</span>
                <span>•</span>
                <span>Free Delivery</span>
              </button>
              <button
                type="button"
                onclick="addToCartItem('${prod.id}', window.selectedPdpSizeVal || '${prod.sizes[0]}'); openCheckoutModal();"
                class="w-full py-3.5 rounded-lg bg-[#252525] hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors border-none cursor-pointer"
              >
                Buy Now (UPI / COD / Card)
              </button>
            </div>

            <!-- Pincode Estimator -->
            <div class="p-4 rounded-xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-2">
              <h4 class="text-xs font-bold text-[#252525]">Check Delivery & Cash on Delivery (COD)</h4>
              <div class="flex gap-2">
                <input id="pdpPincodeInput" type="text" maxlength="6" placeholder="Enter 6-digit Pincode" class="flex-1 px-3 py-2 rounded-lg bg-white border border-[#E6E6E6] text-xs font-mono outline-none">
                <button type="button" onclick="checkPincodePdp()" class="px-4 py-2 rounded-lg bg-[#252525] text-white text-xs font-bold border-none cursor-pointer">Check</button>
              </div>
              <div id="pdpPincodeResult" class="text-xs text-emerald-700 font-semibold pt-1"></div>
            </div>

            <!-- Highlights -->
            <div class="space-y-2 text-xs text-[#4D4D4D] pt-2 border-t border-[#E6E6E6]">
              <p>✨ <strong>Fabric:</strong> ${prod.fabric || 'Pure Luxury Chanderi Silk Blend'}</p>
              <p>🎯 <strong>Occasion:</strong> ${prod.occasion || 'Festive / Wedding Ceremonies'}</p>
              <p>🔄 <strong>Returns:</strong> 15-day free doorstep exchange</p>
            </div>
          </div>
        </div>

        <!-- Related Outfits -->
        ${related.length > 0 ? `
          <div class="mt-16 pt-8 border-t border-[#E6E6E6]">
            <h3 class="text-xl font-serif font-bold text-[#252525] mb-6">Complete The Festive Look</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              ${related.map(p => renderProductCardHTML(p)).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

window.selectPdpSize = function(btn, size) {
  window.selectedPdpSizeVal = size;
  document.querySelectorAll('#pdp-sizes .size-btn').forEach(b => {
    b.classList.remove('bg-[#71006A]', 'text-white');
    b.classList.add('bg-white', 'text-[#252525]');
  });
  btn.classList.add('bg-[#71006A]', 'text-white');
  btn.classList.remove('bg-white', 'text-[#252525]');
};

window.checkPincodePdp = function() {
  const input = document.getElementById('pdpPincodeInput');
  const res = document.getElementById('pdpPincodeResult');
  if (!input || !res) return;
  if (input.value.trim().length === 6) {
    res.textContent = '✓ Express Delivery in 24-48 Hours to ' + input.value.trim() + '! Free shipping active.';
  } else {
    res.textContent = 'Please enter a valid 6-digit Indian pincode.';
  }
};

window.openCheckoutModal = function() {
  closeCartDrawer();
  const checkoutModal = document.getElementById('CheckoutModal');
  if (checkoutModal) {
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

function getWishlistPageHTML() {
  const wishlist = getLocalWishlist();
  const wishlistedProducts = LIBAS_CATALOG.filter(p => wishlist.includes(p.id));

  return `
    <div class="bg-white min-h-[70vh] py-10">
      <div class="container max-w-6xl">
        <div class="pb-6 border-b border-[#E6E6E6] mb-8 flex flex-col sm:flex-row items-baseline justify-between gap-4">
          <div>
            <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">YOUR SAVED STYLES</span>
            <h1 class="text-2xl sm:text-4xl font-serif font-bold text-[#252525] mt-1">My Wishlist (${wishlistedProducts.length})</h1>
            <p class="text-xs sm:text-sm text-[#737373] mt-1">Items saved here remain available across your sessions.</p>
          </div>
          <a href="/collections/suits" onclick="event.preventDefault(); navigateTo('/collections/suits');" class="btn-primary">
            <span>Explore Collection</span>
            <span>→</span>
          </a>
        </div>

        ${wishlistedProducts.length > 0 ? `
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            ${wishlistedProducts.map(p => renderProductCardHTML(p)).join('')}
          </div>
        ` : `
          <div class="py-20 text-center space-y-4 max-w-sm mx-auto">
            <div class="w-16 h-16 rounded-full bg-[#FAF7F9] text-[#71006A] flex items-center justify-center mx-auto text-3xl">❤️</div>
            <h2 class="text-lg font-bold text-[#252525]">Your Wishlist is Empty</h2>
            <p class="text-xs text-[#737373]">Save your favorite festive Anarkalis, kurtas, and sarees to purchase anytime.</p>
            <a href="/collections/suits" onclick="event.preventDefault(); navigateTo('/collections/suits');" class="btn-primary mt-2">
              Browse Trending Outfits
            </a>
          </div>
        `}
      </div>
    </div>
  `;
}

function getTrackOrderPageHTML() {
  return `
    <div class="bg-white min-h-[70vh] py-12">
      <div class="container max-w-4xl">
        <div class="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">LIVE DISPATCH & LOGISTICS</span>
          <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">Track Your Libas Consignment</h1>
          <p class="text-xs sm:text-sm text-[#737373]">Enter your Order ID (e.g. <strong>LIB-884920</strong>) to check real-time transit status.</p>
        </div>

        <div class="bg-[#FAF7F9] border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 shadow-xs max-w-xl mx-auto mb-10">
          <form onsubmit="event.preventDefault(); document.getElementById('trackTimeline').classList.remove('hidden');" class="space-y-4">
            <div>
              <label class="text-xs font-bold text-[#252525] block mb-1">Order ID *</label>
              <input type="text" required value="LIB-884920" class="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs font-mono uppercase outline-none">
            </div>
            <div>
              <label class="text-xs font-bold text-[#252525] block mb-1">Registered Phone or Email *</label>
              <input type="text" required value="+91 98999 90772" class="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs outline-none">
            </div>
            <button type="submit" class="w-full py-3 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#560050] transition-colors border-none cursor-pointer">
              Track Consignment →
            </button>
          </form>
        </div>

        <div id="trackTimeline" class="bg-white border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div class="flex justify-between items-center pb-4 border-b border-[#E6E6E6]">
            <div>
              <span class="text-[10px] font-mono text-[#71006A] font-bold">SHIPMENT STATUS</span>
              <h3 class="text-lg font-bold text-[#252525]">Order #LIB-884920</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">✓ Out for Delivery</span>
          </div>
          <div class="space-y-4 pl-4 border-l-2 border-[#71006A] ml-2 text-xs">
            <div><strong>Out for Delivery</strong> — BlueDart Express (BD99482103), Expected by 6:00 PM today.</div>
            <div><strong>Sorted at Metro Hub</strong> — Bandra West Delivery Facility (Yesterday, 11:45 PM).</div>
            <div><strong>Dispatched from Atelier</strong> — Jaipur Logistics Center (24 Nov 2026).</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- 6. Master Client-Side Router ---
let homeHTMLCache = null;

function navigateTo(url) {
  window.history.pushState({}, '', url);
  handleRoute(url);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleRoute(path) {
  const main = document.getElementById('MainContent');
  if (!main) return;

  // Cache home HTML on first run
  if (!homeHTMLCache) {
    homeHTMLCache = main.innerHTML;
  }

  const cleanPath = path.toLowerCase().split('?')[0].split('#')[0];
  const searchStr = path.includes('?') ? path.split('?')[1] : '';
  const searchParams = new URLSearchParams(searchStr);
  const filterVal = searchParams.get('filter') || searchParams.get('category');

  // Match Search route
  if (cleanPath.includes('/search') || searchParams.has('q')) {
    const q = searchParams.get('q') || '';
    main.innerHTML = getSearchPageHTML(q);
    return;
  }

  // Match collection routes
  if (cleanPath.includes('/suits') || filterVal === 'suits' || cleanPath.endsWith('/suits')) {
    main.innerHTML = getCollectionPageHTML('Suits', 'Suits & Suit Sets', 'From magnificent wedding Anarkalis to breathable everyday cotton palazzos, explore our hallmark festive suit sets.');
    return;
  }
  if (cleanPath.includes('/kurtas') || filterVal === 'kurtas' || cleanPath.endsWith('/kurtas')) {
    main.innerHTML = getCollectionPageHTML('Kurtas', 'Kurtas & Kurtis', 'Hand-embroidered Chikankari, Jaipuri wooden block prints, and festive A-line silhouettes.');
    return;
  }
  if (cleanPath.includes('/sarees') || filterVal === 'sarees' || cleanPath.endsWith('/sarees')) {
    main.innerHTML = getCollectionPageHTML('Sarees', 'Designer Festive Sarees', 'Breathtaking sheer silk organza, pre-draped 1-minute sarees, and zari woven heirlooms.');
    return;
  }
  if (cleanPath.includes('/dresses') || filterVal === 'dresses' || cleanPath.endsWith('/dresses')) {
    main.innerHTML = getCollectionPageHTML('Dresses', 'Ethnic Dresses & Gowns', 'Contemporary Indian silhouettes, flared Angrakhas, and tiered festive maxi gowns.');
    return;
  }
  if (cleanPath.includes('/loungewear') || cleanPath.includes('/co-ords') || filterVal === 'loungewear') {
    main.innerHTML = getCollectionPageHTML('Loungewear', 'Co-ords & Loungewear', 'Effortless silk blend Kaftans and pure breathable cotton coordinate sets.');
    return;
  }
  if (cleanPath.includes('/plus-size') || cleanPath.includes('/extralove') || filterVal === 'plus-size') {
    main.innerHTML = getCollectionPageHTML('Plus-Size', 'ExtraLove Plus-Size Collection (3XL-6XL)', 'Fashion without size limits. Specially tailored drape and stretch linings for curves.');
    return;
  }
  if (cleanPath.includes('/sale') || filterVal === 'sale') {
    main.innerHTML = getCollectionPageHTML('Sale', 'Festive Sale • Flat 50% to 60% Off', 'Limited edition festive couture styles at seasonal celebration pricing.');
    return;
  }

  // Match Product Detail routes
  if (cleanPath.includes('/product') || cleanPath.includes('/products/')) {
    const slug = cleanPath.split('/products/')[1] || cleanPath.split('/product/')[1] || cleanPath.split('/product')[1];
    main.innerHTML = getProductDetailPageHTML(slug || 'lb-suit-1');
    return;
  }

  // Match Wishlist
  if (cleanPath.includes('/wishlist') || path.includes('#wishlist')) {
    main.innerHTML = getWishlistPageHTML();
    return;
  }

  // Match Track Order
  if (cleanPath.includes('/track-order') || path.includes('#track-order')) {
    main.innerHTML = getTrackOrderPageHTML();
    return;
  }

  // Match Pages
  if (cleanPath.includes('/about')) {
    main.innerHTML = `
      <div class="py-12 bg-white">
        <div class="container max-w-5xl">
          <div class="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">THE ATELIER & CRAFT HERITAGE</span>
            <h1 class="text-3xl sm:text-5xl font-serif font-bold text-[#252525]">Crafting Contemporary Indian Elegance</h1>
            <p class="text-xs sm:text-sm text-[#737373]">Born from a deep reverence for India's rich handloom traditions, Libas bridges ancestral textile heritage with effortless modern silhouettes.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center">
            <div class="md:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-[#F5F5F5] shadow-lg">
              <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover">
            </div>
            <div class="md:col-span-5 space-y-4">
              <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-bold">SINCE 1993</span>
              <h2 class="text-2xl font-serif font-bold text-[#252525]">Every Stitch Tells An Unhurried Story</h2>
              <p class="text-xs text-[#4D4D4D] leading-relaxed">We collaborate with over 2,500 master artisans across Jaipur, Chanderi, Lucknow, and Varanasi. Every motif and gota accent is rendered with slow fashion care.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (cleanPath.includes('/returns')) {
    main.innerHTML = `
      <div class="py-12 bg-white">
        <div class="container max-w-4xl">
          <div class="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">DOORSTEP REVERSE LOGISTICS</span>
            <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#252525]">15-Day Return / Exchange Portal</h1>
            <p class="text-xs sm:text-sm text-[#737373]">Enjoy 100% free doorstep pickups and instant size exchanges or full refunds.</p>
          </div>
          <div class="bg-[#FAF7F9] border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 shadow-xs max-w-xl mx-auto">
            <form onsubmit="event.preventDefault(); alert('Return Request Registered! Our courier will arrive within 24-48 hours.');" class="space-y-4">
              <div><label class="text-xs font-bold block mb-1">Order ID *</label><input type="text" required placeholder="e.g. LIB-884920" class="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs font-mono uppercase outline-none"></div>
              <div><label class="text-xs font-bold block mb-1">Registered Phone or Email *</label><input type="text" required placeholder="user@example.com" class="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs outline-none"></div>
              <div><label class="text-xs font-bold block mb-1">Reason for Return/Exchange</label><select class="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E6E6E6] text-xs outline-none"><option>Exchange for another size</option><option>Color/fabric preference</option><option>Defective garment</option></select></div>
              <button type="submit" class="w-full py-3 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#560050] transition-colors shadow-md border-none cursor-pointer">Schedule Doorstep Pickup</button>
            </form>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (cleanPath.includes('/shipping')) {
    main.innerHTML = `
      <div class="py-12 bg-white">
        <div class="container max-w-4xl space-y-8">
          <div class="text-center max-w-xl mx-auto space-y-2">
            <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">DISPATCH SLA & LOGISTICS</span>
            <h1 class="text-3xl font-serif font-bold text-[#252525]">Shipping & Delivery Policy</h1>
            <p class="text-xs text-[#737373]">100% Free doorstep delivery on all prepaid orders across 27,000+ Indian pincodes.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] text-center space-y-2"><span class="text-3xl block">⚡</span><h4 class="text-sm font-bold text-[#252525]">Metro Express</h4><p class="text-xs text-[#737373]">Delivery in 1-2 business days across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Kolkata.</p></div>
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] text-center space-y-2"><span class="text-3xl block">🚚</span><h4 class="text-sm font-bold text-[#252525]">Rest of India</h4><p class="text-xs text-[#737373]">Delivery within 3-5 business days via BlueDart and Delhivery Express.</p></div>
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] text-center space-y-2"><span class="text-3xl block">🌍</span><h4 class="text-sm font-bold text-[#252525]">International Express</h4><p class="text-xs text-[#737373]">Dispatched via DHL Express to USA, UK, UAE, Canada, and Australia in 4-7 business days.</p></div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (cleanPath.includes('/contact')) {
    main.innerHTML = `
      <div class="py-12 bg-white">
        <div class="container max-w-4xl">
          <div class="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">CONCIERGE & SUPPORT</span>
            <h1 class="text-3xl font-serif font-bold text-[#252525]">Contact Customer Care</h1>
            <p class="text-xs text-[#737373]">Our styling concierge is here to assist you Monday through Saturday, 9am - 7pm IST.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-4">
              <h3 class="text-lg font-serif font-bold text-[#252525]">Direct Assistance</h3>
              <p class="text-xs text-[#4D4D4D]">📞 <strong>Helpline:</strong> +91 98999 90772</p>
              <p class="text-xs text-[#4D4D4D]">✉️ <strong>Email:</strong> care@libas.in</p>
              <p class="text-xs text-[#4D4D4D]">💬 <strong>WhatsApp:</strong> +91 98999 90772</p>
              <p class="text-xs text-[#737373] pt-2">Corporate Atelier: Libas Consumer Products Ltd., Okhla Industrial Area Phase-III, New Delhi 110020.</p>
            </div>
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6]">
              <form onsubmit="event.preventDefault(); alert('Message sent! Our support team will reply within 2 hours.');" class="space-y-3">
                <div><label class="text-xs font-bold block mb-1">Your Name *</label><input type="text" required placeholder="Full Name" class="w-full px-3 py-2 rounded-lg bg-white border border-[#E6E6E6] text-xs outline-none"></div>
                <div><label class="text-xs font-bold block mb-1">Email Address *</label><input type="email" required placeholder="user@example.com" class="w-full px-3 py-2 rounded-lg bg-white border border-[#E6E6E6] text-xs outline-none"></div>
                <div><label class="text-xs font-bold block mb-1">Message *</label><textarea required rows="3" placeholder="How can we assist you?" class="w-full px-3 py-2 rounded-lg bg-white border border-[#E6E6E6] text-xs outline-none"></textarea></div>
                <button type="submit" class="w-full py-2.5 rounded-lg bg-[#71006A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#560050] transition-colors border-none cursor-pointer">Send Inquiry →</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (cleanPath.includes('/faqs')) {
    main.innerHTML = `
      <div class="py-12 bg-white">
        <div class="container max-w-3xl space-y-6">
          <div class="text-center space-y-2 mb-8">
            <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">HELP & GUIDANCE</span>
            <h1 class="text-3xl font-serif font-bold text-[#252525]">Frequently Asked Questions</h1>
          </div>
          <div class="space-y-3 text-xs">
            <div class="p-4 rounded-xl border border-[#E6E6E6] bg-white"><h4 class="font-bold text-[#252525] mb-1">1. What size should I choose?</h4><p class="text-[#737373]">We offer an inclusive size range from XS (34) to ExtraLove 6XL (52). Check our interactive Size Guide on any product page for detailed bust, waist, and hip measurements.</p></div>
            <div class="p-4 rounded-xl border border-[#E6E6E6] bg-white"><h4 class="font-bold text-[#252525] mb-1">2. How long does delivery take?</h4><p class="text-[#737373]">Metro orders are delivered within 1-2 business days. Rest of India takes 3-5 days. All prepaid orders qualify for free delivery.</p></div>
            <div class="p-4 rounded-xl border border-[#E6E6E6] bg-white"><h4 class="font-bold text-[#252525] mb-1">3. What is the return policy?</h4><p class="text-[#737373]">We offer a hassle-free 15-day return and size exchange policy with free doorstep pickup from your address.</p></div>
            <div class="p-4 rounded-xl border border-[#E6E6E6] bg-white"><h4 class="font-bold text-[#252525] mb-1">4. Is Cash on Delivery (COD) available?</h4><p class="text-[#737373]">Yes, Cash on Delivery is available across most serviceable Indian pincodes for orders up to ₹5,000.</p></div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (cleanPath.includes('/stores')) {
    main.innerHTML = `
      <div class="py-12 bg-white">
        <div class="container max-w-5xl">
          <div class="text-center space-y-2 mb-10">
            <span class="text-[10px] font-mono tracking-widest uppercase text-[#71006A] font-extrabold">BOUTIQUES & ATELIERS</span>
            <h1 class="text-3xl font-serif font-bold text-[#252525]">Visit Our Flagship Stores</h1>
            <p class="text-xs text-[#737373]">Experience our fabrics, bespoke bridal consultations, and private styling sessions.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-2"><span class="text-[10px] font-mono text-[#71006A] font-bold">MUMBAI FLAGSHIP</span><h3 class="text-lg font-serif font-bold text-[#252525]">Linking Road, Bandra West</h3><p class="text-xs text-[#737373]">Ground & 1st Floor, Near Regal Shoes, Linking Road, Mumbai 400050</p><p class="text-xs font-mono text-[#71006A]">📞 +91 22 2640 1892 • Mon-Sun, 10am - 9pm</p></div>
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-2"><span class="text-[10px] font-mono text-[#71006A] font-bold">NEW DELHI ATELIER</span><h3 class="text-lg font-serif font-bold text-[#252525]">South Extension Part 1</h3><p class="text-xs text-[#737373]">G-12, Main Market, South Extension Part 1, New Delhi 110049</p><p class="text-xs font-mono text-[#71006A]">📞 +91 11 4164 7720 • Mon-Sun, 10am - 9pm</p></div>
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-2"><span class="text-[10px] font-mono text-[#71006A] font-bold">BENGALURU BOUTIQUE</span><h3 class="text-lg font-serif font-bold text-[#252525]">Indiranagar 100ft Road</h3><p class="text-xs text-[#737373]">12th Main Junction, 100 Feet Road, HAL 2nd Stage, Bengaluru 560038</p><p class="text-xs font-mono text-[#71006A]">📞 +91 80 4115 8890 • Mon-Sun, 10:30am - 9pm</p></div>
            <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-2"><span class="text-[10px] font-mono text-[#71006A] font-bold">JAIPUR CRAFT STUDIO</span><h3 class="text-lg font-serif font-bold text-[#252525]">C-Scheme Heritage Center</h3><p class="text-xs text-[#737373]">Subhash Marg, Bagadiya Bhawan, C-Scheme, Jaipur 302001</p><p class="text-xs font-mono text-[#71006A]">📞 +91 141 237 9920 • Mon-Sat, 10am - 8pm</p></div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (cleanPath.includes('/sustainability') || cleanPath.includes('/terms') || cleanPath.includes('/privacy')) {
    main.innerHTML = `
      <div class="py-12 bg-white">
        <div class="container max-w-3xl space-y-6 text-xs text-[#4D4D4D] leading-relaxed">
          <h1 class="text-3xl font-serif font-bold text-[#252525]">Policies & Ethics</h1>
          <div class="p-6 rounded-2xl bg-[#FAF7F9] border border-[#E6E6E6] space-y-3">
            <h3 class="text-sm font-bold text-[#252525]">Artisan Welfare & Environmental Standards</h3>
            <p>Libas is dedicated to honest pricing, living wages for over 2,500 craftspeople, and azo-free natural dyes that preserve groundwater resources in Rajasthan and Gujarat.</p>
            <p>All digital payments on Libas are protected by 256-bit SSL encryption and full PCI-DSS compliance.</p>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Fallback to Home if cleanPath is '/' or empty
  if (cleanPath === '/' || cleanPath === '') {
    if (homeHTMLCache) main.innerHTML = homeHTMLCache;
    return;
  }
}

// --- 7. DOM Ready Initializer ---
// --- Global Search Actions ---
window.triggerSearchTerm = function(term) {
  addSearchHistory(term);
  const inputs = document.querySelectorAll('[data-search-input]');
  inputs.forEach(inp => inp.value = term);
  const dropdowns = document.querySelectorAll('[data-search-dropdown]');
  dropdowns.forEach(dd => dd.classList.add('hidden'));
  const drawer = document.getElementById('MobileNavDrawer');
  if (drawer) {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }
  navigateTo('/search?q=' + encodeURIComponent(term));
};

window.handleRemoveHistoryItem = function(event, term) {
  event.stopPropagation();
  removeSearchHistory(term);
  const dropdowns = document.querySelectorAll('[data-search-dropdown]');
  const activeInp = document.querySelector('[data-search-input]:focus') || document.querySelector('[data-search-input]');
  const q = activeInp ? activeInp.value : '';
  dropdowns.forEach(dd => {
    dd.innerHTML = renderSearchDropdownHTML(q);
  });
};

window.handleClearAllHistory = function(event) {
  event.stopPropagation();
  clearAllSearchHistory();
  const dropdowns = document.querySelectorAll('[data-search-dropdown]');
  const activeInp = document.querySelector('[data-search-input]:focus') || document.querySelector('[data-search-input]');
  const q = activeInp ? activeInp.value : '';
  dropdowns.forEach(dd => {
    dd.innerHTML = renderSearchDropdownHTML(q);
  });
};

window.filterSearchResultCategory = function(cat) {
  const chips = document.querySelectorAll('.search-cat-chip');
  chips.forEach(c => {
    if (c.getAttribute('data-search-cat') === cat) {
      c.className = 'search-cat-chip active bg-[#71006A] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap hover:border-[#71006A] transition-colors';
    } else {
      c.className = 'search-cat-chip bg-[#FAF7F9] text-[#252525] border border-[#E6E6E6] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap hover:border-[#71006A] transition-colors';
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get('q') || '';
  let filtered = q ? searchCatalogProducts(q) : LIBAS_CATALOG;
  if (cat !== 'All') {
    if (cat === 'Plus-Size') {
      filtered = filtered.filter(p => p.isExtraLove || p.category === 'Plus-Size' || p.category === 'Plus Size');
    } else if (cat === 'Sale') {
      filtered = filtered.filter(p => p.discountPercentage >= 50 || p.category === 'Sale');
    } else {
      filtered = filtered.filter(p => p.category.toLowerCase() === cat.toLowerCase());
    }
  }

  const countEl = document.getElementById('searchResultCount');
  if (countEl) countEl.textContent = filtered.length;
  const gridEl = document.getElementById('search-product-grid');
  if (gridEl) {
    gridEl.innerHTML = filtered.map(p => renderProductCardHTML(p)).join('');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Predictive Search Interactions
  const searchInputs = document.querySelectorAll('[data-search-input]');
  const searchDropdowns = document.querySelectorAll('[data-search-dropdown]');
  const searchForms = document.querySelectorAll('[data-search-form]');
  const clearButtons = document.querySelectorAll('[data-search-clear]');

  function updateClearButtons(input) {
    const container = input.closest('[data-search-container]');
    if (!container) return;
    const clearBtn = container.querySelector('[data-search-clear]');
    if (clearBtn) {
      if (input.value.trim().length > 0) {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }
  }

  searchInputs.forEach(input => {
    const container = input.closest('[data-search-container]');
    const dropdown = container ? container.querySelector('[data-search-dropdown]') : null;

    input.addEventListener('focus', function() {
      if (dropdown) {
        dropdown.innerHTML = renderSearchDropdownHTML(input.value);
        dropdown.classList.remove('hidden');
      }
      updateClearButtons(input);
    });

    input.addEventListener('input', function() {
      if (dropdown) {
        dropdown.innerHTML = renderSearchDropdownHTML(input.value);
        dropdown.classList.remove('hidden');
      }
      updateClearButtons(input);
    });
  });

  clearButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const container = btn.closest('[data-search-container]');
      if (!container) return;
      const input = container.querySelector('[data-search-input]');
      const dropdown = container.querySelector('[data-search-dropdown]');
      if (input) {
        input.value = '';
        input.focus();
        btn.classList.add('hidden');
        if (dropdown) {
          dropdown.innerHTML = renderSearchDropdownHTML('');
          dropdown.classList.remove('hidden');
        }
      }
    });
  });

  searchForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = form.querySelector('[data-search-input]');
      const query = input ? input.value.trim() : '';
      if (!query) return;
      addSearchHistory(query);
      searchDropdowns.forEach(dd => dd.classList.add('hidden'));
      const drawer = document.getElementById('MobileNavDrawer');
      if (drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      }
      navigateTo('/search?q=' + encodeURIComponent(query));
    });
  });

  // Close search dropdown on click outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('[data-search-container]')) {
      searchDropdowns.forEach(dd => dd.classList.add('hidden'));
    }
  });
  updateCartUI();
  updateWishlistUI();

  // Intercept all internal navigation links
  document.body.addEventListener('click', function(e) {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href) return;

    // Check if it is an internal route
    if (href.startsWith('/') || href.startsWith('#') || href.includes('filter=') || href.includes('category=')) {
      if (!href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('http://') && !href.startsWith('https://')) {
        e.preventDefault();
        navigateTo(href);
      }
    }
  });

  // Handle popstate for browser back/forward buttons
  window.addEventListener('popstate', function() {
    handleRoute(window.location.pathname + window.location.search + window.location.hash);
  });

  // Check initial route on load
  const currentPath = window.location.pathname + window.location.search + window.location.hash;
  if (currentPath !== '/' && currentPath !== '') {
    handleRoute(currentPath);
  }

  // Modal event bindings
  const cartTriggers = document.querySelectorAll('[data-cart-drawer-trigger]');
  const cartCloseBtns = document.querySelectorAll('[data-cart-drawer-close]');
  const cartDrawerOverlay = document.getElementById('CartDrawerOverlay');

  cartTriggers.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); openCartDrawer(); }));
  cartCloseBtns.forEach(btn => btn.addEventListener('click', closeCartDrawer));
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);

  const quickViewClose = document.querySelectorAll('[data-quickview-close]');
  quickViewClose.forEach(btn => btn.addEventListener('click', closeQuickView));

  const checkoutModal = document.getElementById('CheckoutModal');
  const checkoutTriggers = document.querySelectorAll('[data-checkout-trigger]');
  const checkoutClose = document.querySelectorAll('[data-checkout-close]');

  checkoutTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCheckoutModal();
  }));

  checkoutClose.forEach(btn => btn.addEventListener('click', () => {
    if (checkoutModal) {
      checkoutModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }));

  const authModal = document.getElementById('AuthModal');
  const authTriggers = document.querySelectorAll('[data-auth-trigger]');
  const authClose = document.querySelectorAll('[data-auth-close]');

  authTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (authModal) {
      authModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }));

  authClose.forEach(btn => btn.addEventListener('click', () => {
    if (authModal) {
      authModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }));

  // Mobile Navigation Drawer Toggle & Close
  const mobileToggleBtns = document.querySelectorAll('[data-mobile-menu-toggle]');
  const mobileCloseBtns = document.querySelectorAll('[data-mobile-menu-close]');
  const mobileDrawer = document.getElementById('MobileNavDrawer');

  function openMobileMenu() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  mobileToggleBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openMobileMenu();
  }));

  mobileCloseBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileMenu();
  }));

  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
});
