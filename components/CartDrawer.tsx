'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div
      className="cart-drawer-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsCartOpen(false);
      }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        backdropFilter: 'blur(4px)'
      }}
    >
      <div
        className="cart-drawer"
        style={{
          width: '100%',
          maxWidth: '420px',
          height: '100%',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.15)',
          animation: 'slideInRight 0.3s ease-out'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-bag-shopping" style={{ color: 'var(--color-brand)', fontSize: '18px' }}></i>
            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>Shopping Bag ({cart.length})</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              color: 'var(--text-secondary)'
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <i className="fa-solid fa-bag-shopping" style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.3 }}></i>
              <p style={{ fontSize: '16px', fontWeight: 600 }}>Your bag is empty</p>
              <p style={{ fontSize: '13px', marginTop: '4px' }}>Explore top smartphones and home appliances.</p>
              <Link
                href="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary"
                style={{ marginTop: '20px', display: 'inline-block' }}
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-light-bg)'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <img src={product.image} alt={product.title} style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 4px', lineHeight: 1.3 }}>
                      {product.title}
                    </h4>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand)' }}>
                      ₹{(product.price * quantity).toLocaleString('en-IN')}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid var(--color-border)',
                          borderRadius: '6px',
                          backgroundColor: '#ffffff'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          style={{ padding: '2px 8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px' }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '12px', fontWeight: 600, padding: '0 6px' }}>{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          style={{ padding: '2px 8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px' }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '12px', cursor: 'pointer' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid var(--color-border)', backgroundColor: '#ffffff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '16px', fontWeight: 700 }}>
              <span>Total Amount</span>
              <span style={{ color: 'var(--color-brand)' }}>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <Link
              href="/contact?intent=checkout"
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', textAlign: 'center', padding: '14px' }}
            >
              Order & Inquire via WhatsApp / Store
            </Link>
            <button
              onClick={clearCart}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '12px',
                marginTop: '10px',
                cursor: 'pointer'
              }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
