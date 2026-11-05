'use client';

import React from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <span className="product-brand">{product.brand}</span>

      <div
        className="product-image"
        onClick={() => onOpenDetails(product)}
        style={{ cursor: 'pointer' }}
      >
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="product-info">
        <h3
          className="product-title"
          onClick={() => onOpenDetails(product)}
          style={{ cursor: 'pointer' }}
        >
          {product.title}
        </h3>

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
          <div className="price-container">
            {product.originalPrice > product.price && (
              <span className="price-original">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="price-current">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              className="quick-view-btn"
              onClick={() => onOpenDetails(product)}
              title="Quick Details"
              aria-label="Quick Details"
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <i className="fa-solid fa-eye"></i>
            </button>
            <button
              className="add-to-cart-circle"
              onClick={() => addToCart(product)}
              title="Add to Cart"
              aria-label="Add to Cart"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
