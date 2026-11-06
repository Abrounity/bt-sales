'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/#categories' },
    { label: 'Best Sellers', href: '/#best-sellers' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container top-banner-content">
          <div className="top-banner-left flex items-center justify-between w-full">
            <span>
              <i className="fa-solid fa-location-dot" style={{ marginRight: '6px' }}></i>
              Omega 1, Commercial Belt, Greater Noida, Uttar Pradesh
            </span>
            <span className="banner-divider">|</span>
            <span>
              <i className="fa-solid fa-phone" style={{ marginRight: '6px' }}></i>
              +91 98765 43210
            </span>
          </div>
          <div className="top-banner-right text-white">
            <span>Authorized Dealer for Apple, Samsung, OnePlus & LG</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header>
        <div className="container header-main">
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-icon">
              <img src="/images/logo.png" alt="BT Sales India" />
            </div>
            <div className="logo-text">
              <h1>BT SALES</h1>
              <span>Mobile & Home Appliances</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-menu">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('?')[0]));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <a
              className="whatsapp-header-link"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with BT Sales on WhatsApp"
              title="Chat on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="action-btn mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="mobile-nav-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
