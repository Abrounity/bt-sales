'use client';

import React from 'react';
import Link from 'next/link';

export default function FloatingBrandSidebar() {
  const brands = [
    { name: 'Apple', brand: 'Apple', icon: <i className="fa-brands fa-apple"></i>, isText: false },
    { name: 'Samsung', brand: 'Samsung', icon: 'S', isText: true },
    { name: 'OnePlus', brand: 'OnePlus', icon: '1+', isText: true },
    { name: 'Sony', brand: 'Sony', icon: 'SN', isText: true },
    { name: 'Bosch', brand: 'Bosch', icon: 'BS', isText: true },
    { name: 'LG', brand: 'LG', icon: 'LG', isText: true }
  ];

  return (
    <div className="floating-brand-sidebar">
      <div
        className="floating-title"
        style={{
          fontSize: '8px',
          fontWeight: 800,
          textTransform: 'uppercase',
          color: 'var(--color-brand)',
          letterSpacing: '1px',
          marginBottom: '8px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)'
        }}
      >
        BRANDS
      </div>
      {brands.map((b) => (
        <Link
          key={b.name}
          href={`/shop?brand=${b.brand}`}
          className={`floating-brand-icon ${b.isText ? 'text' : ''}`}
          data-tooltip={b.name}
        >
          {b.icon}
        </Link>
      ))}
    </div>
  );
}
