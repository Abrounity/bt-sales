'use client';

import React from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content product-modal">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-product-grid">
          <div className="modal-product-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="modal-product-details">
            <span className="product-brand">{product.brand}</span>
            <h2 className="modal-title">{product.title}</h2>

            <div className="product-rating" style={{ margin: '8px 0 16px' }}>
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
                {product.rating} ({product.reviews} customer reviews)
              </span>
            </div>

            <div className="modal-price" style={{ margin: '16px 0' }}>
              {product.originalPrice > product.price && (
                <span className="price-original" style={{ fontSize: '14px', marginRight: '10px' }}>
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="price-current" style={{ fontSize: '24px' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.badge && (
                <span
                  style={{
                    marginLeft: '12px',
                    backgroundColor: 'rgba(217,35,35,0.1)',
                    color: 'var(--color-brand)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  {product.badge}
                </span>
              )}
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              {product.description}
            </p>

            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
              Key Specifications
            </h4>
            <div className="modal-specs" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '24px' }}>
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} style={{ background: 'var(--color-light-bg)', padding: '8px 12px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{key}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{val}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
              >
                <i className="fa-solid fa-bag-shopping" style={{ marginRight: '8px' }}></i>
                Add to Cart
              </button>
              <button
                className="btn btn-outline"
                onClick={() => {
                  window.location.href = `/contact?inquiry=${encodeURIComponent(product.title)}`;
                }}
              >
                Inquire at Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
