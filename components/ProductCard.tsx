'use client';

import React from 'react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const whatsappMessage = `Hi, I'm interested in ${product.title} listed at ₹${product.price.toLocaleString('en-IN')}.`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="product-card">
      <div className="product-card-meta">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="product-brand">{product.brand}</span>
      </div>

      <button
        type="button"
        className="product-image"
        onClick={() => onOpenDetails(product)}
        aria-label={`View ${product.title} details`}
      >
        <img src={product.image} alt={product.title} loading="lazy" />
      </button>

      <div className="product-info">
        <div className="product-card-title-row">
          <button
            type="button"
            className="product-title text-left"
            onClick={() => onOpenDetails(product)}
          >
            {product.title}
          </button>
          <div className="product-card-price">
            {product.originalPrice > product.price && (
              <span className="price-original">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="price-current">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fa-solid fa-star ${
                  i < Math.floor(product.rating) ? 'active' : ''
                }`}
              ></i>
            ))}
          </div>
          <span className="rating-count">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="product-bottom">
          <div className="product-price-actions">
            <button
              type="button"
              className="product-view-btn"
              onClick={() => onOpenDetails(product)}
              aria-label={`View ${product.title}`}
            >
              View Product
            </button>
            <a
              className="product-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask about ${product.title} on WhatsApp`}
              title="Ask about this product on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
