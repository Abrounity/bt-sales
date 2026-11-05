import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Store Bio */}
          <div className="footer-col">
            <Link href="/" className="footer-logo logo">
              <div className="logo-icon">
                <img src="/images/logo.png" alt="BT Sales India" />
              </div>
              <div className="logo-text">
                <h1>BT SALES</h1>
                <span>Mobile & Home Appliances</span>
              </div>
            </Link>
            <p className="footer-desc">
              BT Sales India is a leading authorized dealer of premium mobile devices,
              domestic appliances, and electronics accessories across Greater Noida,
              Uttar Pradesh & India.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop Catalog</Link></li>
              <li><Link href="/shop?brand=Apple">Brand Store</Link></li>
              <li><Link href="/services">Services & Repairs</Link></li>
              <li><Link href="/contact">About Our Store</Link></li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="footer-col">
            <h3>Categories</h3>
            <ul className="footer-links">
              <li><Link href="/shop?category=phones">Smartphones & Tablets</Link></li>
              <li><Link href="/shop?category=appliances">Smart Televisions</Link></li>
              <li><Link href="/shop?category=appliances">Inverter Refrigerators</Link></li>
              <li><Link href="/shop?category=appliances">Washing Machines</Link></li>
              <li><Link href="/shop?category=accessories">Audio & Wearables</Link></li>
            </ul>
          </div>

          {/* Col 4: Store Info */}
          <div className="footer-col">
            <h3>Store Information</h3>
            <p className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Omega 1, Commercial Belt, Greater Noida, Uttar Pradesh, PIN - 201308</span>
            </p>
            <p className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+91 98765 43210</span>
            </p>
            <p className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>support@btsalesindia.com</span>
            </p>
            <p className="footer-contact-item">
              <i className="fa-solid fa-clock"></i>
              <span>Mon - Sun: 10:00 AM - 9:00 PM</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BT Sales India. All rights reserved. Authorized Dealer & Electronics Retailer.</p>
          <div className="footer-payments">
            <span>UPI</span>
            <span>Visa</span>
            <span>MasterCard</span>
            <span>EMI Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
