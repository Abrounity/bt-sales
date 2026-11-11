'use client';

import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const whatsappMessage = `Hi, I'm interested in ${product.title} listed at ₹${product.price.toLocaleString('en-IN')}.`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="mx-auto w-full max-w-[1280px] px-[18px] py-8 sm:px-6 sm:py-12">
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#6b7280]" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#d92323]">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/shop" className="hover:text-[#d92323]">All Products</Link>
        <span aria-hidden="true">/</span>
        <span className="text-[#1f2937]" aria-current="page">{product.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-[#f8f9fc] p-8 sm:min-h-[480px]">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[420px] max-w-full object-contain"
          />
        </div>

        <div className="flex flex-col items-start">
          <span className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#6b7280]">
            {product.brand}
          </span>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#0f1115] sm:text-4xl">
            {product.title}
          </h1>

          <div className="mb-5 flex items-center gap-2 text-sm">
            <span className="text-[#f59e0b]" aria-label={`${product.rating} out of 5 stars`}>
              {'★'.repeat(Math.floor(product.rating))}
              <span className="text-[#d1d5db]">{'★'.repeat(5 - Math.floor(product.rating))}</span>
            </span>
            <span className="text-[#6b7280]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-extrabold text-[#d92323]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-lg text-[#9ca3af] line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="rounded-full bg-[#fef2f2] px-3 py-1 text-sm font-bold text-[#d92323]">
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </>
            )}
          </div>

          {product.badge && (
            <span className="mb-5 rounded-full bg-[#fef2f2] px-3 py-1 text-xs font-bold text-[#d92323]">
              {product.badge}
            </span>
          )}

          <p className="mb-7 max-w-2xl leading-7 text-[#4b5563]">{product.description}</p>

          <div className="mb-8 flex w-full flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#d92323] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#b81b1b]"
            >
              <i className="fa-solid fa-bag-shopping" aria-hidden="true"></i>
              Add to Cart
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[#e4e7ed] px-6 py-3 font-semibold text-[#1f2937] transition-colors hover:border-[#25d366] hover:text-[#128c4a]"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              Ask on WhatsApp
            </a>
          </div>

          <section className="w-full border-t border-[#e4e7ed] pt-6" aria-labelledby="product-specifications">
            <h2 id="product-specifications" className="mb-4 text-lg font-bold text-[#0f1115]">
              Key Specifications
            </h2>
            <dl className="grid gap-3 sm:grid-cols-2">
              {Object.entries(product.specs).map(([label, value]) => (
                <div key={label} className="rounded-lg bg-[#f8f9fc] p-4">
                  <dt className="mb-1 text-xs text-[#6b7280]">{label}</dt>
                  <dd className="text-sm font-semibold text-[#1f2937]">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}
