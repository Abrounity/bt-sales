'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Take top 4 products for homepage best sellers
  const bestSellers = products.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-tag">
              <i className="fa-solid fa-bolt" style={{ marginRight: '6px' }}></i>
              Official Dealer • Greater Noida
            </span>
            <h1 className="hero-title text-white">
              Next-Gen Tech & Premium Home Living.
            </h1>
            <p className="hero-desc">
              Experience the latest Apple iPhones, flagship Samsung devices, AI Smart TVs,
              and intelligent home appliances with zero-down payment EMI and doorstep service.
            </p>
            <div className="hero-cta">
              <Link href="/shop" className="btn btn-primary">
                Shop Full Catalog <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </Link>
              <Link href="/contact" className="btn btn-outline text-white">
                Ask About Repairs & Exchange
              </Link>
            </div>
            <div className="hero-perks">
              <div className="perk-item">
                <i className="fa-solid fa-shield-check"></i>
                <span>100% Brand Warranty</span>
              </div>
              <div className="perk-item">
                <i className="fa-solid fa-truck-fast"></i>
                <span>Same Day Delivery</span>
              </div>
              <div className="perk-item">
                <i className="fa-solid fa-credit-card"></i>
                <span>No-Cost EMI Options</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-featured">
              <div className="featured-badge">Featured Flagship</div>
              <div className="featured-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
                  <rect x="25" y="10" width="50" height="100" rx="8" fill="#0f172a" stroke="#d92323" strokeWidth="2" />
                  <rect x="28" y="15" width="44" height="90" rx="4" fill="#1e293b" />
                  <circle cx="50" cy="98" r="3" fill="#64748b" />
                  <rect x="42" y="18" width="16" height="4" rx="2" fill="#64748b" />
                  <path d="M30 40 L70 40 M30 60 L60 60 M30 80 L50 80" stroke="#d92323" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <circle cx="50" cy="50" r="10" fill="#d92323" opacity="0.3" />
                </svg>
              </div>
              <div className="featured-info">
                <h3>iPhone 15 Pro & S24 Ultra</h3>
                <p>Titanium builds, Pro camera arrays & AI features</p>
                <div className="featured-pricing">
                  <span className="featured-price">From ₹39,999</span>
                  <Link href="/shop?category=phones" className="featured-link">
                    Explore Flagships <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section id="categories" className="categories-section container">
        <div className="section-header">
          <div className="section-title">
            <h2>Explore Core Categories</h2>
            <p>Select a category to view authorized stock and best regional pricing</p>
          </div>
        </div>

        <div className="category-cards-grid">
          <Link href="/shop?category=phones" className="cat-card">
            <div className="cat-icon"><i className="fa-solid fa-mobile-screen-button"></i></div>
            <h3>Smartphones & Tablets</h3>
            <p>Apple, Samsung, OnePlus, Vivo, Xiaomi</p>
            <span className="cat-cta">Shop Devices &rarr;</span>
          </Link>

          <Link href="/shop?category=appliances" className="cat-card">
            <div className="cat-icon"><i className="fa-solid fa-tv"></i></div>
            <h3>Smart 4K & OLED TVs</h3>
            <p>LG, Samsung, Sony Bravia cinema screens</p>
            <span className="cat-cta">Shop TVs &rarr;</span>
          </Link>

          <Link href="/shop?category=appliances" className="cat-card">
            <div className="cat-icon"><i className="fa-solid fa-snowflake"></i></div>
            <h3>Inverter Refrigerators</h3>
            <p>Double Door, Side-by-Side & French Door</p>
            <span className="cat-cta">Shop Cooling &rarr;</span>
          </Link>

          <Link href="/shop?category=appliances" className="cat-card">
            <div className="cat-icon"><i className="fa-solid fa-soap"></i></div>
            <h3>Washing Machines</h3>
            <p>Bosch, LG, Samsung front & top loaders</p>
            <span className="cat-cta">Shop Washers &rarr;</span>
          </Link>

          <Link href="/shop?category=accessories" className="cat-card">
            <div className="cat-icon"><i className="fa-solid fa-headphones"></i></div>
            <h3>Audio & Earbuds</h3>
            <p>AirPods, Sony XM5, Bose & Studio Gear</p>
            <span className="cat-cta">Shop Audio &rarr;</span>
          </Link>

          <Link href="/shop?category=accessories" className="cat-card">
            <div className="cat-icon"><i className="fa-solid fa-clock"></i></div>
            <h3>Smartwatches & Bands</h3>
            <p>Galaxy Watch, Apple Watch & fitness trackers</p>
            <span className="cat-cta">Shop Wearables &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Trending Devices Spotlight (Centered without heavy side gaps) */}
      <section className="spotlight-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="section-title" style={{ margin: '0 auto' }}>
              <h2>Trending Flagship Spotlight</h2>
              <p>Top flagship picks engineered for benchmark performance</p>
            </div>
          </div>

          <div className="spotlight-grid">
            <div className="spotlight-card">
              <div className="spotlight-badge">Apple Flagship</div>
              <div className="spotlight-visual">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
                  <rect x="25" y="10" width="50" height="100" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  <rect x="28" y="15" width="44" height="90" rx="4" fill="#0f172a" />
                  <circle cx="50" cy="98" r="3" fill="#334155" />
                  <rect x="42" y="18" width="16" height="4" rx="2" fill="#334155" />
                  <path d="M30 40 L70 40 M30 60 L60 60" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="spotlight-info">
                <h3>iPhone 15 Pro</h3>
                <p>Aerospace-grade titanium design with A17 Pro chip & 48MP camera.</p>
                <div className="spotlight-price">₹1,34,900</div>
                <Link href="/shop?brand=Apple" className="btn btn-outline" style={{ marginTop: '12px', width: '100%', textAlign: 'center' }}>
                  View Apple Store
                </Link>
              </div>
            </div>

            <div className="spotlight-card">
              <div className="spotlight-badge" style={{ backgroundColor: '#0f4c81' }}>Galaxy AI</div>
              <div className="spotlight-visual">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
                  <rect x="25" y="10" width="50" height="100" rx="6" fill="#0f172a" stroke="#0f4c81" strokeWidth="2" />
                  <rect x="28" y="14" width="44" height="92" rx="3" fill="#1e293b" />
                  <circle cx="50" cy="50" r="14" fill="#0f4c81" opacity="0.3" />
                </svg>
              </div>
              <div className="spotlight-info">
                <h3>Galaxy S24 Ultra</h3>
                <p>Built-in S-Pen, 200MP Quad Zoom & revolutionary Galaxy AI features.</p>
                <div className="spotlight-price">₹1,29,999</div>
                <Link href="/shop?brand=Samsung" className="btn btn-outline" style={{ marginTop: '12px', width: '100%', textAlign: 'center' }}>
                  View Samsung Store
                </Link>
              </div>
            </div>

            <div className="spotlight-card">
              <div className="spotlight-badge" style={{ backgroundColor: '#eb0028' }}>Smooth Power</div>
              <div className="spotlight-visual">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
                  <rect x="25" y="10" width="50" height="100" rx="8" fill="#1e293b" stroke="#eb0028" strokeWidth="2" />
                  <rect x="28" y="15" width="44" height="90" rx="4" fill="#0f172a" />
                  <path d="M30 40 L70 40 M30 65 L60 65" stroke="#eb0028" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="spotlight-info">
                <h3>OnePlus 12R 5G</h3>
                <p>Snapdragon 8 Gen 2 powerhouse with 5500 mAh battery & 100W charging.</p>
                <div className="spotlight-price">₹39,999</div>
                <Link href="/shop?brand=OnePlus" className="btn btn-outline" style={{ marginTop: '12px', width: '100%', textAlign: 'center' }}>
                  View OnePlus Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section id="best-sellers" className="container best-sellers-section">
        <div className="section-header">
          <div className="section-title">
            <h2>Best Sellers</h2>
            <p>Our top-rated products handpicked for you</p>
          </div>
        </div>

        <div className="product-grid best-sellers-grid">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* Services & Protection Promo */}
      <section className="services-promo-section">
        <div className="container promo-banner-grid">
          <div className="promo-text">
            <span className="promo-tag">Certified Service Center</span>
            <h2>Doorstep Repair & Old Device Exchange Program</h2>
            <p>
              Got a broken display, degraded battery, or wanting to upgrade to the latest phone?
              Our certified technicians offer doorstep repair pick-ups and instant valuation
              for your old gadgets across Greater Noida and Noida.
            </p>
            <div className="promo-buttons">
              <Link href="/contact" className="btn btn-primary">
                Contact Us About Repairs
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                Visit Store
              </Link>
            </div>
          </div>
          <div className="promo-features">
            <div className="promo-feat-card">
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <h4>Genuine OEM Parts</h4>
              <p>Original screens, batteries & ICs with 90-day warranty</p>
            </div>
            <div className="promo-feat-card">
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <h4>Instant Buyback</h4>
              <p>Exchange old devices directly toward your new purchase</p>
            </div>
            <div className="promo-feat-card">
              <i className="fa-solid fa-certificate"></i>
              <h4>Brand Authorized</h4>
              <p>Official warranty stamps & GST invoice for claim support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Customer Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-title" style={{ margin: '0 auto' }}>
              <h2>What Our Customers Say</h2>
              <p>Verified reviews from electronics shoppers in Greater Noida and Delhi NCR</p>
            </div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars" style={{ color: '#f59e0b', marginBottom: '12px' }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Bought my iPhone 15 Pro and a Bosch washing machine from BT Sales.
                The staff gave me a direct discount better than online platforms and
                setup doorstep delivery within 4 hours. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <h4>Amit Rawat</h4>
                <span>Greater Noida Customer</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars" style={{ color: '#f59e0b', marginBottom: '12px' }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Best exchange valuation for my old Galaxy phone. The estimator on
                their website gave an accurate price, and they deducted it immediately
                at the counter. Seamless experience!"
              </p>
              <div className="testimonial-author">
                <h4>Pooja Sharma</h4>
                <span>Noida Customer</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars" style={{ color: '#f59e0b', marginBottom: '12px' }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Got my OnePlus screen replaced in under 2 hours with a genuine screen
                and official bill. It's a huge relief having an authentic store in
                Commercial Belt Omega 1."
              </p>
              <div className="testimonial-author">
                <h4>Karan Pandey</h4>
                <span>Ghaziabad Customer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Features Banner */}
      <section className="features-footer">
        <div className="container features-footer-grid">
          <div className="feat-foot-item">
            <div className="feat-foot-icon"><i className="fa-solid fa-box-open"></i></div>
            <div className="feat-foot-info">
              <h4>100% Original Products</h4>
              <p>Direct authorized brand supply</p>
            </div>
          </div>
          <div className="feat-foot-item">
            <div className="feat-foot-icon"><i className="fa-solid fa-shield-halved"></i></div>
            <div className="feat-foot-info">
              <h4>Doorstep Repair Service</h4>
              <p>Fast turnaround certified repairs</p>
            </div>
          </div>
          <div className="feat-foot-item">
            <div className="feat-foot-icon"><i className="fa-solid fa-credit-card"></i></div>
            <div className="feat-foot-info">
              <h4>Zero-Down Payment EMI</h4>
              <p>Easy financing on all products</p>
            </div>
          </div>
          <div className="feat-foot-item">
            <div className="feat-foot-icon"><i className="fa-solid fa-arrow-up-right-dots"></i></div>
            <div className="feat-foot-info">
              <h4>Upgrade & Exchange</h4>
              <p>Best buyback price guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Quick Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
