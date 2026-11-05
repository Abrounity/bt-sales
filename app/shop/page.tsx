'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';

function ShopContent() {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(200000);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Initialize filters from URL search params
  useEffect(() => {
    const cat = searchParams.get('category');
    const brand = searchParams.get('brand');
    const q = searchParams.get('search');

    if (cat) {
      setSelectedCategories([cat]);
    }
    if (brand) {
      setSelectedBrands([brand]);
    }
    if (q) {
      setSearch(q);
    }
  }, [searchParams]);

  const categories = [
    { id: 'phones', label: 'Smartphones & Tablets' },
    { id: 'appliances', label: 'Home Appliances' },
    { id: 'accessories', label: 'Audio & Accessories' }
  ];

  const brands = ['Apple', 'Samsung', 'OnePlus', 'Sony', 'Bosch', 'LG', 'Xiaomi', 'Vivo'];

  const toggleCategory = (catId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((item) => item !== b) : [...prev, b]
    );
  };

  const handleResetFilters = () => {
    setSearch('');
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMaxPrice(200000);
    setSortBy('popularity');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Search filter
        if (search.trim()) {
          const query = search.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(query);
          const matchBrand = p.brand.toLowerCase().includes(query);
          const matchDesc = p.description.toLowerCase().includes(query);
          if (!matchTitle && !matchBrand && !matchDesc) return false;
        }

        // Category filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) {
          return false;
        }

        // Brand filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
          return false;
        }

        // Price filter
        if (p.price > maxPrice) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // default: popularity
        return b.reviews - a.reviews;
      });
  }, [search, selectedCategories, selectedBrands, maxPrice, sortBy]);

  return (
    <div className="container" style={{ padding: '40px 0 80px' }}>
      {/* Breadcrumbs / Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '6px' }}>Store Catalog</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
          Explore authorized smartphones, Smart TVs, home appliances, and accessories with verified warranties.
        </p>
      </div>

      <div className="shop-layout">
        {/* Sidebar Filters */}
        <aside className="shop-sidebar">
          <div className="filter-header">
            <h3>Filters</h3>
            <button onClick={handleResetFilters} className="clear-filters-btn">
              Reset All
            </button>
          </div>

          {/* Search in Catalog */}
          <div className="filter-group">
            <h4>Keyword Search</h4>
            <div className="sidebar-search">
              <input
                type="text"
                placeholder="Search models, brands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  fontSize: '13px'
                }}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h4>Categories</h4>
            <div className="filter-options">
              {categories.map((cat) => (
                <label key={cat.id} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                  />
                  <span>{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="filter-group">
            <h4>Brands</h4>
            <div className="filter-options" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {brands.map((b) => (
                <label key={b} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(b)}
                    onChange={() => toggleBrand(b)}
                  />
                  <span>{b}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <h4>Max Price</h4>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand)' }}>
                ₹{maxPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="200000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
        </aside>

        {/* Main Products Area */}
        <section className="shop-main">
          {/* Top Bar Sort & Count */}
          <div className="shop-topbar">
            <div className="products-count">
              Showing <strong>{filteredProducts.length}</strong> products
            </div>
            <div className="sort-container">
              <label htmlFor="sort-select">Sort By: </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-dropdown"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="empty-catalog" style={{ textAlign: 'center', padding: '80px 0' }}>
              <i className="fa-solid fa-box-open" style={{ fontSize: '48px', color: 'var(--text-muted)', marginBottom: '16px' }}></i>
              <h3>No matching products found</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                Try adjusting your search criteria or resetting filters.
              </p>
              <button onClick={handleResetFilters} className="btn btn-primary" style={{ marginTop: '20px' }}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onOpenDetails={(item) => setSelectedProduct(item)}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>Loading Catalog...</div>}>
      <ShopContent />
    </Suspense>
  );
}
