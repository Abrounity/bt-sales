'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';

const heroImages = [
  {
    src: '/images/banner_1.webp',
    alt: 'Smartphone featured in a premium product banner',
  },
  {
    src: '/images/banner_2.webp',
    alt: 'Modern smartphone showcasing its full-screen display',
  },
  {
    src: '/images/banner_3.webp',
    alt: 'Premium laptop for work, creativity, and entertainment',
  },
];

export default function HomePage() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Take top 4 products for homepage best sellers
  const bestSellers = products.slice(0, 4);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Hero Banner Slider */}
      <section className="hero-section w-full">
  <div
    className="relative w-full overflow-hidden"
    role="region"
    aria-roledescription="carousel"
    aria-label="Featured product banners"
  >
    {heroImages.map((image, index) => (
      <div
        key={image.src}
        className={`w-full transition-opacity duration-700 ease-in-out ${
          index === activeHeroImage
            ? "relative opacity-100 visible"
            : "absolute inset-0 opacity-0 invisible"
        }`}
        aria-hidden={index !== activeHeroImage}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="block w-full h-auto object-cover"
        />
      </div>
    ))}

    
    <div className="absolute bottom-3 md:bottom-5 left-1/2 
    -translate-x-1/2 z-10 flex items-center gap-2">
      {heroImages.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => setActiveHeroImage(index)}
          className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
            index === activeHeroImage
              ? "w-7 bg-white"
              : "w-2.5 bg-white/60 hover:bg-white"
          }`}
          aria-label={`Show banner ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>

      {/* Featured Categories Grid */}
      <section id="categories" className="categories-section container">
        <div className="section-header"  style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-title" style={{ margin: '0 auto' }}>
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
            <div className="cat-icon"><i className="fa-solid fa-soap"></i></div>
            <h3>Home Appliances</h3>
            <p>Bosch, LG, Samsung front & top loaders</p>
            <span className="cat-cta">Shop Home Appliances &rarr;</span>
          </Link>

          <Link href="/shop?category=accessories" className="cat-card">
            <div className="cat-icon"><i className="fa-solid fa-headphones"></i></div>
            <h3>Accessories </h3>
            <p>AirPods, Sony XM5, Bose & Studio Gear</p>
            <span className="cat-cta">Shop Accessories &rarr;</span>
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
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-title" style={{ margin: '0 auto' }}>
            <h2>Best Sellers</h2>
            <p>Our top-rated products handpicked for you</p>
          </div>
        </div>

        <div className="product-grid best-sellers-grid">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={setSelectedProduct}
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

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
