# BT Sales India — Next.js 14 Web Application

A modern, highly customizable **Next.js (App Router) + TypeScript + React** web application for **BT Sales India** (Authorized Phone, Home Appliances & Electronics store in Greater Noida, Uttar Pradesh).

---

## 🚀 1-Click Deploy to Vercel

Next.js is built by Vercel, making deployment completely automatic with zero configuration.

### Method A: Deploy from GitHub (Recommended)
1. Push this folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Next.js BT Sales application"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository. Vercel automatically detects **Next.js** and configures all build settings.
4. Click **Deploy**. Your website will be live with full SSL, global CDN, and automatic continuous deployment.

### Method B: Deploy via Vercel CLI
```bash
npx vercel
```

---

## 🛠️ How to Easily Adjust & Optimize Code & Pages

Every part of this project is modular, typed, and clean so you can customize it without breaking anything:

### 1. Adding / Updating Products & Prices
Open `data/products.ts`:
```typescript
{
  id: 'p13',
  title: 'Apple iPhone 16 Pro',
  category: 'phones', // 'phones' | 'appliances' | 'accessories'
  brand: 'Apple',
  price: 139900,
  originalPrice: 149900,
  rating: 4.9,
  reviews: 45,
  badge: 'New Launch',
  image: getProductSVG('iphone', '#333333'), // or '/images/your-image.png'
  specs: {
    'Chip': 'A18 Pro',
    'Camera': '48MP Fusion'
  },
  description: 'Next-gen flagship...'
}
```

### 2. Updating Store Contact & Address
Open `components/Navbar.tsx` and `components/Footer.tsx` to update:
- Store address: *Omega 1, Commercial Belt, Greater Noida, Uttar Pradesh*
- Phone numbers: *+91 98765 43210*
- Email: *support@btsalesindia.com*
- Store hours: *Mon - Sun: 10:00 AM - 9:00 PM*

### 3. Customizing Pages
- **Homepage**: `app/page.tsx` — Hero banners, categories, trending devices spotlight, best sellers, testimonials.
- **Store Catalog**: `app/shop/page.tsx` — Search, category filters, brand checkboxes, price slider, and quick view modal.
- **Services & Repairs**: `app/services/page.tsx` — Doorstep repair booking form, old device buyback estimator, and BT Care protection plans.
- **Contact Us**: `app/contact/page.tsx` — Interactive inquiry form, Greater Noida store details, and map visual.

### 4. Updating Old Device Exchange Pricing
Open `data/exchange.ts` to adjust brand base values, model multipliers, and condition discounts.

### 5. Changing the Logo
Place your new logo at `public/images/logo.png`. Both the header logo and the footer logo will automatically update!

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your site live.
