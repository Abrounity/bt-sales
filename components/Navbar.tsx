'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Mobile', href: '/shop?category=phones' },
    { label: 'Home Appliances', href: '/shop?category=appliances' },
    { label: 'Accessories', href: '/shop?category=accessories' },
    { label: 'Services & Repairs', href: '/services' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container top-banner-content">
          <div className="top-banner-left">
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
          <div className="top-banner-right">
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
            {/* Search Toggle */}
            <button
              className="action-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {/* Shopping Cart Button */}
            <button
              className="action-btn cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
            >
              <i className="fa-solid fa-bag-shopping"></i>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>

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

        {/* Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="search-bar-dropdown">
            <div className="container">
              <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                  type="text"
                  placeholder="Search smartphones, TVs, refrigerators, audio, accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="search-submit-btn">
                  Search
                </button>
              </form>
            </div>
          </div>
        )}

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
