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
    "description": "A cheerful celebration piece tailored in vibrant mustard yellow georgette. Showcases handcrafted silver and gold gotta work along the round neckline, matched with a dramatically flared tiered sharara and sheer dupatta.",
    "isNew": true,
    "stock": 18
  },
  {
    "id": "lb-suit-3",
    "slug": "rose-pink-cotton-straight-kurta-palazzo-set",
    "name": "Blush Floral Pure Cotton Straight Kurta & Palazzo Set",
    "tagline": "Breathable Mulmul cotton with crochet lace detailing",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Palazzo Suits",
    "rating": 4.7,
    "reviewsCount": 540,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Soft Blush",
        "hex": "#FF8C91"
      },
      {
        "name": "Powder Blue",
        "hex": "#8ECAE6"
      },
      {
        "name": "Pistachio Sage",
        "hex": "#99D98C"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "fabric": "100% Cambric Cotton",
    "occasion": "Daily Wear",
    "pattern": "Jaipuri Hand-block Floral Print",
    "washCare": "Machine Wash Delicate",
    "description": "Bask in timeless comfort with this everyday essential kurta set. Crafted from lightweight pure cotton featuring delicate botanical hand-block motifs, scalloped hemline lace, and relaxed cropped palazzos with pockets.",
    "isBestSeller": true,
    "stock": 45
  },
  {
    "id": "lb-suit-4",
    "slug": "deep-emerald-velvet-embroidered-suit-set",
    "name": "Emerald Green Embroidered Velvet Suit Set",
    "tagline": "Micro-velvet regal silhouette with sequin threadwork",
    "price": 4499,
    "originalPrice": 8999,
    "discountPercentage": 50,
    "category": "Suits",
    "subCategory": "Straight Suits",
    "rating": 5,
    "reviewsCount": 129,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Emerald Velvet",
        "hex": "#0B4F35"
      },
      {
        "name": "Midnight Navy",
        "hex": "#1D2A44"
      },
      {
        "name": "Deep Wine",
        "hex": "#4A0E17"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Luxury Micro Velvet",
    "occasion": "Wedding",
    "pattern": "Tilla & Sequin Embroidery",
    "washCare": "Professional Dry Clean",
    "description": "Designed for grand evening soirées and winter weddings. Tailored in supple micro velvet with glistening gold and champagne thread embroidery at the neckline, sleeve cuffs, and trouser hems.",
    "isNew": true,
    "stock": 12
  },
  {
    "id": "lb-kurta-1",
    "slug": "wine-chanderi-silk-straight-kurta",
    "name": "Wine Chanderi Silk Foil Print Straight Kurta",
    "tagline": "Gilded motifs with mandarin collar and side slits",
    "price": 1299,
    "originalPrice": 2599,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Straight Cut",
    "rating": 4.8,
    "reviewsCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Plum Wine",
        "hex": "#71006A"
      },
      {
        "name": "Onyx Black",
        "hex": "#111111"
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
    "fabric": "Chanderi Silk with Poly Crepe Lining",
    "occasion": "Office Wear",
    "pattern": "Metallic Gold Foil Lattice",
    "washCare": "Hand Wash Cold Separately",
    "description": "A versatile styling staple designed with a flattering straight cut, three-quarter sleeves, and intricate gold foil prints that effortlessly transition from daytime office to evening festivities.",
    "isBestSeller": true,
    "stock": 38
  },
  {
    "id": "lb-kurta-2",
    "slug": "indigo-ajrakh-print-a-line-cotton-kurti",
    "name": "Indigo Blue Ajrakh Block Printed A-Line Kurta",
    "tagline": "Authentic vegetable dye prints with wooden buttons",
    "price": 999,
    "originalPrice": 1999,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "A-Line & Flared",
    "rating": 4.6,
    "reviewsCount": 184,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Indigo Dabu",
        "hex": "#1F3F68"
      },
      {
        "name": "Madder Red",
        "hex": "#8A252C"
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
    "washCare": "Machine Wash Cold",
    "description": "Imbued with artisanal soul, this A-line kurti is cut from pure breathable cotton hand-block printed using authentic heritage Ajrakh geometric stamps.",
    "stock": 50
  },
  {
    "id": "lb-kurta-3",
    "slug": "pastel-peach-thread-embroidered-short-kurti",
    "name": "Peach Thread Embroidered Tunic Short Kurti",
    "tagline": "Casual short tunic with Chikankari inspired stitches",
    "price": 899,
    "originalPrice": 1799,
    "discountPercentage": 50,
    "category": "Kurtas",
    "subCategory": "Short Tunic",
    "rating": 4.7,
    "reviewsCount": 162,
    "images": [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Peach Blush",
        "hex": "#FF8C91"
      },
      {
        "name": "Ivory Cream",
        "hex": "#FDFBF7"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Viscose Rayon Slub",
    "occasion": "Daily Wear",
    "pattern": "Lucknowi Tone-on-Tone Floral Work",
    "washCare": "Gentle Machine Wash",
    "description": "Pairs effortlessly with denim or tapered trousers. Features tonal thread embroidery across the yoke and delicate lace inserts on bell sleeves.",
    "isNew": true,
    "stock": 29
  },
  {
    "id": "lb-saree-1",
    "slug": "burgundy-zari-woven-organza-saree",
    "name": "Burgundy Zari Woven Sheer Organza Saree",
    "tagline": "Featherlight silk organza with scalloped embroidered border",
    "price": 2699,
    "originalPrice": 5399,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Organza Sarees",
    "rating": 4.9,
    "reviewsCount": 195,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Burgundy Plum",
        "hex": "#71006A"
      },
      {
        "name": "Golden Champagne",
        "hex": "#D4AF37"
      },
      {
        "name": "Dusty Rose",
        "hex": "#FF8C91"
      }
    ],
    "sizes": [
      "Free Size (5.5m + 0.8m Blouse)"
    ],
    "fabric": "Pure Silk Organza",
    "occasion": "Festive",
    "pattern": "Zari Bootis with Cutwork Scallop Border",
    "washCare": "Dry Clean Only",
    "description": "A masterpiece in lightweight drapery. Woven in delicate sheer organza with metallic gold floral bootis dispersed across the drape, crowned by a rich scalloped border. Comes with an unstitched heavy brocade blouse piece.",
    "isBestSeller": true,
    "stock": 15
  },
  {
    "id": "lb-saree-2",
    "slug": "mauve-pink-ready-to-wear-georgette-saree",
    "name": "Mauve Pink Pre-Draped 1-Minute Georgette Saree",
    "tagline": "Stitched pleats with sequin studded designer blouse",
    "price": 2199,
    "originalPrice": 4399,
    "discountPercentage": 50,
    "category": "Sarees",
    "subCategory": "Ready-to-Wear",
    "rating": 4.8,
    "reviewsCount": 147,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Mauve Orchid",
        "hex": "#9B5B84"
      },
      {
        "name": "Seafoam Mint",
        "hex": "#A3D9C9"
      }
    ],
    "sizes": [
      "Free Size (Adjustable Waist 26\"-40\")"
    ],
    "fabric": "Flowing Poly Georgette",
    "occasion": "Party",
    "pattern": "Subtle Micro Sequin Borders",
    "washCare": "Dry Clean Recommended",
    "description": "Slip into saree elegance in under 60 seconds. Featuring pre-stitched pleats, comfortable elasticated waistband, and an adjustable hook closure, accompanied by a matching ready-to-wear padded bustier.",
    "isNew": true,
    "stock": 22
  },
  {
    "id": "lb-dress-1",
    "slug": "maroon-floral-tiered-ethnic-maxi-dress",
    "name": "Maroon Floral Printed Tiered Ethnic Maxi Dress",
    "tagline": "Flowing georgette tiers with tasseled dori belt",
    "price": 1799,
    "originalPrice": 3599,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Maxi Gowns",
    "rating": 4.9,
    "reviewsCount": 268,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Deep Maroon",
        "hex": "#631322"
      },
      {
        "name": "Plum Berry",
        "hex": "#71006A"
      },
      {
        "name": "Olive Bronze",
        "hex": "#58593F"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Georgette with Soft Cotton Lining",
    "occasion": "Party",
    "pattern": "Kalamkari & Botanical Flora",
    "washCare": "Machine Wash Delicate",
    "description": "Fusion wear at its finest. This dramatic floor-length maxi dress features four cascading tiers of printed georgette, an embroidered V-neck bodice, and a tie-up waist belt with handmade resham latkans.",
    "isBestSeller": true,
    "stock": 30
  },
  {
    "id": "lb-dress-2",
    "slug": "blush-pink-angrakha-flared-cotton-dress",
    "name": "Blush Pink Angrakha Anarkali Flared Dress",
    "tagline": "Side-tie angrakha silhouette in hand-spun cotton",
    "price": 1699,
    "originalPrice": 3399,
    "discountPercentage": 50,
    "category": "Dresses",
    "subCategory": "Angrakha Dresses",
    "rating": 4.7,
    "reviewsCount": 110,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Blush Peach",
        "hex": "#FF8C91"
      },
      {
        "name": "Powder Yellow",
        "hex": "#FDE24F"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "100% Breathable Cotton",
    "occasion": "Daily Wear",
    "pattern": "Ditsy Floral Print with Gota Highlights",
    "washCare": "Hand Wash Separately",
    "description": "An airy, romantic design with a regal Angrakha crossover front, framed by subtle gold gota borders and side tie-ups with handmade fabric tassels.",
    "stock": 25
  },
  {
    "id": "lb-coord-1",
    "slug": "berry-plum-geometric-printed-coord-set",
    "name": "Berry Plum Geometric Printed Pure Cotton Co-ord Set",
    "tagline": "Collared tunic shirt with relaxed tapered trousers",
    "price": 1699,
    "originalPrice": 3399,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Co-ords",
    "rating": 4.8,
    "reviewsCount": 194,
    "images": [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Libas Plum",
        "hex": "#71006A"
      },
      {
        "name": "Charcoal Black",
        "hex": "#252525"
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
    "fabric": "Premium 60s Glace Cotton",
    "occasion": "Office Wear",
    "pattern": "Contemporary Ikat Inspired Geometry",
    "washCare": "Machine Wash Cold",
    "description": "Sleek, modern, and undeniably chic. This two-piece co-ord set features a button-down tunic shirt with high side slits and matching trousers with an elasticated waistband and twin functional pockets.",
    "isBestSeller": true,
    "stock": 35
  },
  {
    "id": "lb-coord-2",
    "slug": "lilac-floral-silk-kaftan-with-pants",
    "name": "Lilac Floral Silk Blend Kaftan Lounge Set",
    "tagline": "Relaxed silhouette with drawstring waist and lace borders",
    "price": 1899,
    "originalPrice": 3799,
    "discountPercentage": 50,
    "category": "Loungewear",
    "subCategory": "Kaftans",
    "rating": 4.9,
    "reviewsCount": 122,
    "images": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Lilac Haze",
        "hex": "#C8A2C8"
      },
      {
        "name": "Blush Rose",
        "hex": "#FF8C91"
      }
    ],
    "sizes": [
      "S-M (Fits 34-38)",
      "L-XL (Fits 40-44)",
      "XXL-3XL (Fits 46-50)"
    ],
    "fabric": "Silk Poly Blend with Cotton Lining",
    "occasion": "Party",
    "pattern": "English Rose Watermark Print",
    "washCare": "Dry Clean Recommended",
    "description": "Effortless luxury for intimate get-togethers or festive lounging. Features a breezy kaftan drape with an adjustable inner drawstring and matching cigarette pants.",
    "isNew": true,
    "stock": 20
  },
  {
    "id": "lb-plus-1",
    "slug": "extralove-plum-embroidered-anarkali-suit-set",
    "name": "ExtraLove Plum Embroidered Festive Anarkali Set (3XL-6XL)",
    "tagline": "Expertly tailored for curvy silhouettes with comfort stretch lining",
    "price": 3199,
    "originalPrice": 6399,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Anarkali",
    "rating": 5,
    "reviewsCount": 288,
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Libas Signature Plum",
        "hex": "#71006A"
      },
      {
        "name": "Royal Sapphire",
        "hex": "#0F2537"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "Chanderi Silk with Breathable Cotton Voile Lining",
    "occasion": "Wedding",
    "pattern": "Resham & Zari Neck Embroidery",
    "washCare": "Dry Clean Only",
    "description": "Designed under our dedicated ExtraLove plus-size label. Tailored specifically with custom armhole grading, anti-chafing soft waistband, and an empire waist flare that flatters fuller curves effortlessly.",
    "isBestSeller": true,
    "isExtraLove": true,
    "stock": 19
  },
  {
    "id": "lb-plus-2",
    "slug": "extralove-dusty-rose-cotton-straight-kurta-set",
    "name": "ExtraLove Dusty Rose Printed Cotton Kurta Set (3XL-6XL)",
    "tagline": "Soft breathable cotton with roomier hip and bust proportions",
    "price": 1999,
    "originalPrice": 3999,
    "discountPercentage": 50,
    "category": "Plus-Size",
    "subCategory": "Cotton",
    "rating": 4.8,
    "reviewsCount": 154,
    "images": [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Dusty Rose",
        "hex": "#FF8C91"
      },
      {
        "name": "Sage Green",
        "hex": "#87A987"
      }
    ],
    "sizes": [
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "fabric": "100% Cotton",
    "occasion": "Daily Wear",
    "pattern": "Traditional Sanganeri Jaal Print",
    "washCare": "Machine Wash Delicate",
    "description": "A cheerful daily kurta set designed for ultimate comfort and elegance. Generously proportioned with deeper side pockets and flexible elastic waistband.",
    "isExtraLove": true,
    "stock": 32
  },
  {
    "id": "lb-sale-1",
    "slug": "festive-sale-magenta-embroidered-sharara-set",
    "name": "Festive Flash Deal: Magenta Silk Sharara Suit Set",
    "tagline": "Flat 60% OFF - Limited festive stock clearing",
    "price": 2399,
    "originalPrice": 5999,
    "discountPercentage": 60,
    "category": "Sale",
    "subCategory": "Flash Sale",
    "rating": 4.9,
    "reviewsCount": 420,
    "images": [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Vibrant Magenta",
        "hex": "#B8006B"
      },
      {
        "name": "Gold Ochre",
        "hex": "#D4AF37"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "fabric": "Art Silk Blend with Chiffon Dupatta",
    "occasion": "Festive",
    "pattern": "Mirror Work & Heavy Zari Hem",
    "washCare": "Dry Clean Recommended",
    "description": "Our viral festive favourite at an unbelievable flash deal price. Rich magenta silk adorned with mirror work accents and voluminous flared sharara.",
    "isBestSeller": true,
    "stock": 14
  },
  {
    "id": "lb-sale-2",
    "slug": "clearance-teal-blue-anarkali-ethnic-dress",
    "name": "Steal Deal: Peacock Teal Embroidered Georgette Gown",
    "tagline": "Flat 65% OFF - End of Season clearance",
    "price": 1599,
    "originalPrice": 4599,
    "discountPercentage": 65,
    "category": "Sale",
    "subCategory": "Under 1999",
    "rating": 4.7,
    "reviewsCount": 312,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
    ],
    "colors": [
      {
        "name": "Peacock Teal",
        "hex": "#005F73"
      },
      {
        "name": "Midnight Navy",
        "hex": "#1D2A44"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "fabric": "Georgette with Soft Crepe Lining",
    "occasion": "Party",
    "pattern": "Sequin Floral Motifs",
    "washCare": "Gentle Hand Wash",
    "description": "An elegant evening gown at clearout pricing. Heavily pleated skirt with dramatic flair and intricately embroidered V-neckline.",
    "stock": 8
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
document.addEventListener('DOMContentLoaded', function () {
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
