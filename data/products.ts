// BT Sales India - Products Database & SVG Generator

export interface Product {
  id: string;
  title: string;
  category: 'phones' | 'appliances' | 'accessories';
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  specs: Record<string, string>;
  description: string;
}

export function getProductSVG(type: string, brandColor: string = '#d92323'): string {
  let svg = '';
  switch (type.toLowerCase()) {
    case 'smartphone':
    case 'iphone':
    case 'samsung':
    case 'oneplus':
    case 'phone':
      svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
          <rect x="25" y="10" width="50" height="100" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
          <rect x="28" y="15" width="44" height="90" rx="4" fill="#0f172a"/>
          <circle cx="50" cy="98" r="3" fill="#334155"/>
          <rect x="42" y="18" width="16" height="4" rx="2" fill="#334155"/>
          <path d="M30 40 L70 40 M30 60 L60 60 M30 80 L50 80" stroke="${brandColor}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          <circle cx="50" cy="50" r="10" fill="${brandColor}" opacity="0.2"/>
        </svg>
      `;
      break;
    case 'tv':
    case 'television':
    case 'appliance-tv':
      svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="100%" height="100%">
          <rect x="10" y="15" width="100" height="60" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2"/>
          <rect x="13" y="18" width="94" height="54" rx="2" fill="#0f172a"/>
          <path d="M50 75 L70 75 L75 85 L45 85 Z" fill="#334155"/>
          <polygon points="20,60 50,30 80,60" fill="${brandColor}" opacity="0.3"/>
          <circle cx="90" cy="30" r="8" fill="${brandColor}" opacity="0.4"/>
        </svg>
      `;
      break;
    case 'refrigerator':
    case 'fridge':
      svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120" width="100%" height="100%">
          <rect x="20" y="10" width="40" height="100" rx="6" fill="#475569" stroke="#334155" stroke-width="2"/>
          <rect x="23" y="13" width="34" height="38" rx="2" fill="#64748b"/>
          <rect x="23" y="55" width="34" height="52" rx="2" fill="#64748b"/>
          <rect x="25" y="30" width="2" height="15" rx="1" fill="#cbd5e1"/>
          <rect x="25" y="60" width="2" height="25" rx="1" fill="#cbd5e1"/>
          <line x1="20" x2="60" y1="53" y2="53" stroke="${brandColor}" stroke-width="2"/>
        </svg>
      `;
      break;
    case 'washing-machine':
    case 'washer':
      svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 110" width="100%" height="100%">
          <rect x="15" y="10" width="60" height="90" rx="6" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
          <rect x="18" y="13" width="54" height="18" rx="2" fill="#1e293b"/>
          <circle cx="28" cy="22" r="3" fill="${brandColor}"/>
          <circle cx="36" cy="22" r="2" fill="#64748b"/>
          <circle cx="44" cy="22" r="2" fill="#64748b"/>
          <rect x="54" y="19" width="14" height="6" rx="1" fill="#0f172a" stroke="#475569" stroke-width="1"/>
          <circle cx="45" cy="62" r="24" fill="#94a3b8" stroke="#cbd5e1" stroke-width="3"/>
          <circle cx="45" cy="62" r="18" fill="#38bdf8" opacity="0.6"/>
          <path d="M35 62 Q45 72 55 62" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8"/>
        </svg>
      `;
      break;
    case 'headphone':
    case 'headphones':
    case 'audio':
      svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
          <path d="M20 55 C20 25 80 25 80 55" fill="none" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
          <rect x="12" y="48" width="14" height="24" rx="7" fill="#1e293b"/>
          <rect x="74" y="48" width="14" height="24" rx="7" fill="#1e293b"/>
          <rect x="15" y="53" width="8" height="14" rx="4" fill="${brandColor}"/>
          <rect x="77" y="53" width="8" height="14" rx="4" fill="${brandColor}"/>
        </svg>
      `;
      break;
    case 'watch':
    case 'smartwatch':
      svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
          <rect x="40" y="5" width="20" height="90" rx="4" fill="#334155"/>
          <rect x="30" y="30" width="40" height="40" rx="12" fill="#0f172a" stroke="#475569" stroke-width="2"/>
          <circle cx="50" cy="50" r="15" fill="#1e293b"/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="${brandColor}" stroke-dasharray="80 20" stroke-width="2"/>
          <text x="50" y="54" fill="#ffffff" font-size="10" font-family="sans-serif" text-anchor="middle" font-weight="bold">10:09</text>
        </svg>
      `;
      break;
    case 'tablet':
    case 'ipad':
      svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 90" width="100%" height="100%">
          <rect x="15" y="10" width="80" height="70" rx="6" fill="#1e293b" stroke="#475569" stroke-width="2"/>
          <rect x="19" y="14" width="72" height="62" rx="3" fill="#0f172a"/>
          <circle cx="95" cy="45" r="2.5" fill="#334155"/>
          <polygon points="30,60 55,35 80,60" fill="${brandColor}" opacity="0.3"/>
          <circle cx="70" cy="30" r="6" fill="${brandColor}" opacity="0.3"/>
        </svg>
      `;
      break;
    default:
      svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
          <rect x="20" y="20" width="60" height="60" rx="8" fill="#1e293b" stroke="${brandColor}" stroke-width="2"/>
          <circle cx="50" cy="50" r="10" fill="${brandColor}" opacity="0.3"/>
        </svg>
      `;
  }
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

export const products: Product[] = [
  {
    id: 'p1',
    title: 'Apple iPhone 15 Pro',
    category: 'phones',
    brand: 'Apple',
    price: 134900,
    originalPrice: 144900,
    rating: 4.8,
    reviews: 128,
    badge: 'Best Seller',
    image: getProductSVG('iphone', '#a3a3a3'),
    specs: {
      'Processor': 'A17 Pro Chip',
      'Camera': '48MP Triple Main',
      'Display': '6.1-inch Super Retina XDR',
      'Battery': 'Up to 23 hours playback'
    },
    description: 'The iPhone 15 Pro is forged in titanium and features the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.'
  },
  {
    id: 'p2',
    title: 'Samsung Galaxy S24 Ultra',
    category: 'phones',
    brand: 'Samsung',
    price: 129999,
    originalPrice: 139999,
    rating: 4.7,
    reviews: 96,
    badge: '10% OFF',
    image: getProductSVG('samsung', '#0f4c81'),
    specs: {
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '200MP Quad Main',
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Battery': '5000 mAh with 45W charging'
    },
    description: 'Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.'
  },
  {
    id: 'p3',
    title: 'OnePlus 12R 5G',
    category: 'phones',
    brand: 'OnePlus',
    price: 39999,
    originalPrice: 42999,
    rating: 4.6,
    reviews: 78,
    badge: 'Popular',
    image: getProductSVG('oneplus', '#eb0028'),
    specs: {
      'Processor': 'Snapdragon 8 Gen 2',
      'Camera': '50MP Triple Sony IMX890',
      'Display': '6.78-inch 120Hz AMOLED',
      'Battery': '5500 mAh with 100W SUPERVOOC'
    },
    description: 'Boasting a sleek design, premium performance capabilities, and a revolutionary cooling system, the OnePlus 12R is built for high-performance gaming and smooth daily usage.'
  },
  {
    id: 'p4',
    title: 'LG OLED evo C3 55" Smart TV',
    category: 'appliances',
    brand: 'LG',
    price: 114990,
    originalPrice: 189990,
    rating: 4.9,
    reviews: 54,
    badge: 'Top Pick',
    image: getProductSVG('tv', '#a50034'),
    specs: {
      'Display': '55" OLED 4K UHD',
      'Processor': 'α9 AI Processor Gen6',
      'OS': 'webOS 23 Smart TV',
      'Audio': '9.1.2 Virtual Surround'
    },
    description: 'Experience picture and sound quality refined by decade-long OLED expertise. Enjoy breathtaking clarity, deep blacks, and a lightning-fast gaming response rate.'
  },
  {
    id: 'p5',
    title: 'Samsung 322L Double Door Refrigerator',
    category: 'appliances',
    brand: 'Samsung',
    price: 34990,
    originalPrice: 44990,
    rating: 4.5,
    reviews: 42,
    badge: 'EMI Offers',
    image: getProductSVG('refrigerator', '#1b6ca8'),
    specs: {
      'Capacity': '322 Litres',
      'Energy Rating': '3 Star Digital Inverter',
      'Cooling Type': 'Twin Cooling Plus',
      'Warranty': '20 Years on Compressor'
    },
    description: 'Keep food fresh for twice as long. Digital Inverter Technology automatically adjusts compressor speed in response to cooling demand across 7 levels.'
  },
  {
    id: 'p6',
    title: 'Bosch 8kg Front Load Washing Machine',
    category: 'appliances',
    brand: 'Bosch',
    price: 37990,
    originalPrice: 48990,
    rating: 4.7,
    reviews: 63,
    badge: 'German Tech',
    image: getProductSVG('washing-machine', '#005691'),
    specs: {
      'Capacity': '8.0 kg',
      'Spin Speed': '1400 RPM',
      'Motor': 'EcoSilence Drive',
      'Feature': 'Anti-Tangle & ActiveWater'
    },
    description: 'Bosch front loaders offer maximum cleanliness with minimal effort. EcoSilence Drive motor provides extremely energy-efficient and quiet operation.'
  },
  {
    id: 'p7',
    title: 'Apple AirPods Pro (2nd Gen)',
    category: 'accessories',
    brand: 'Apple',
    price: 24900,
    originalPrice: 26900,
    rating: 4.8,
    reviews: 145,
    badge: 'Hot',
    image: getProductSVG('headphone', '#8e8e93'),
    specs: {
      'Chip': 'Apple H2 Chip',
      'ANC': 'Up to 2x Active Noise Cancellation',
      'Battery': 'Up to 6 hours (30h with Case)',
      'Charging': 'MagSafe USB-C Case'
    },
    description: 'AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Audio and Transparency mode to hear the world around you.'
  },
  {
    id: 'p8',
    title: 'Sony WH-1000XM5 Headphones',
    category: 'accessories',
    brand: 'Sony',
    price: 29990,
    originalPrice: 34990,
    rating: 4.7,
    reviews: 110,
    badge: 'Audio King',
    image: getProductSVG('headphone', '#000000'),
    specs: {
      'Battery': 'Up to 30 hours charging',
      'Processor': 'V1 Integrated Processor',
      'Mics': '8 Microphones for noise cancelling',
      'Connection': 'Multipoint Bluetooth'
    },
    description: 'With industry-leading noise cancellation, Sony WH-1000XM5 over-ear wireless headphones rewrite the rules for distraction-free listening and exceptional call clarity.'
  },
  {
    id: 'p9',
    title: 'Samsung Galaxy Watch 6 LTE',
    category: 'accessories',
    brand: 'Samsung',
    price: 27999,
    originalPrice: 33999,
    rating: 4.4,
    reviews: 58,
    badge: 'New Launch',
    image: getProductSVG('watch', '#0f4c81'),
    specs: {
      'Display': '1.5-inch Super AMOLED',
      'OS': 'Wear OS Powered by Samsung',
      'Sensors': 'BioActive Sensor, Sleep Coach',
      'Connectivity': 'LTE + Bluetooth + GPS'
    },
    description: 'Start your daily wellness journey. Tracks body composition, sleep coaching, ECG tracking, and personalized heart rate zones.'
  },
  {
    id: 'p10',
    title: 'Xiaomi Pad 6 (8GB/256GB)',
    category: 'phones',
    brand: 'Xiaomi',
    price: 28999,
    originalPrice: 41999,
    rating: 4.6,
    reviews: 82,
    badge: 'Best Tablet',
    image: getProductSVG('tablet', '#ff6700'),
    specs: {
      'Processor': 'Snapdragon 870',
      'Display': '11-inch 144Hz 7-stage refresh',
      'Battery': '8840 mAh with 33W Fast Charging',
      'Audio': 'Quad speakers with Dolby Atmos'
    },
    description: 'Power through work or entertainment with the Snapdragon 870 processor, a 144Hz 2.8K display, and a metallic uni-body design.'
  },
  {
    id: 'p11',
    title: 'Apple iPad Air M2',
    category: 'phones',
    brand: 'Apple',
    price: 59900,
    originalPrice: 64900,
    rating: 4.8,
    reviews: 47,
    badge: 'Premium',
    image: getProductSVG('tablet', '#000000'),
    specs: {
      'Processor': 'Apple M2 Chip',
      'Camera': '12MP Wide Back, Landscape 12MP Ultra Wide',
      'Display': '11-inch Liquid Retina Display',
      'Storage': 'From 128GB baseline'
    },
    description: 'iPad Air is powered by the incredibly fast Apple M2 chip. It features a stunning Liquid Retina display, a new landscape camera, and support for Apple Pencil Pro.'
  },
  {
    id: 'p12',
    title: 'Vivo V30 Pro 5G',
    category: 'phones',
    brand: 'Vivo',
    price: 41999,
    originalPrice: 46999,
    rating: 4.5,
    reviews: 64,
    badge: 'Zeiss Optics',
    image: getProductSVG('iphone', '#00c3ff'),
    specs: {
      'Processor': 'MediaTek Dimensity 8200',
      'Camera': '50MP ZEISS Professional Portrait',
      'Display': '6.78-inch 120Hz Curved AMOLED',
      'Battery': '5000 mAh slim form-factor'
    },
    description: 'Co-engineered with ZEISS, the V30 Pro brings professional-grade studio lighting and portrait quality straight to your pockets with Aura Light technology.'
  }
];
