'use client';

import { useEffect } from 'react';
import {
  Battery,
  Camera,
  Cpu,
  Gauge,
  HardDrive,
  Monitor,
  ShieldCheck,
  Smartphone,
  Volume2,
  Wifi,
  Zap,
} from 'lucide-react';
import { Product } from '@/data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

function getSpecIcon(label: string) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes('processor') || normalizedLabel.includes('chip')) return Cpu;
  if (normalizedLabel.includes('display') || normalizedLabel.includes('screen')) return Monitor;
  if (normalizedLabel.includes('battery')) return Battery;
  if (normalizedLabel.includes('audio') || normalizedLabel.includes('speaker')) return Volume2;
  if (normalizedLabel.includes('camera')) return Camera;
  if (normalizedLabel.includes('storage') || normalizedLabel.includes('capacity')) return HardDrive;
  if (normalizedLabel.includes('connectivity') || normalizedLabel.includes('connection')) return Wifi;
  if (normalizedLabel.includes('spin') || normalizedLabel.includes('speed') || normalizedLabel.includes('refresh')) return Gauge;
  if (normalizedLabel.includes('energy') || normalizedLabel.includes('charging')) return Zap;
  if (normalizedLabel.includes('warranty')) return ShieldCheck;

  return Smartphone;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const whatsappMessage = product
    ? `Hi, I'm interested in ${product.title} listed at ₹${product.price.toLocaleString('en-IN')}.`
    : '';
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
  const savings = product ? product.originalPrice - product.price : 0;

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080b12]/70 p-3 backdrop-blur-md sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="relative max-h-[92dvh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-[0_32px_100px_rgba(0,0,0,0.35)] sm:rounded-[28px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-20 grid size-10 place-items-center cursor-pointer rounded-full bg-white text-xl text-[#1f2937] shadow-[0_2px_12px_rgba(15,23,42,0.16)] transition hover:rotate-90 hover:bg-[#f3f4f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d92323] sm:right-5 sm:top-5 sm:size-12"
          onClick={onClose}
          aria-label="Close product details"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>

        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_45%_42%,#ffffff_0%,#f6f7fb_58%,#eceff5_100%)] p-8 sm:min-h-[360px] sm:p-12 lg:min-h-[520px] ">
            <div className="absolute -left-20 top-10 size-64 rounded-full bg-white/70 blur-3xl" />
            
            <img
              src={product.image}
              alt={product.title}
              className="relative z-[1] max-h-[230px] max-w-full object-contain drop-shadow-[0_18px_18px_rgba(15,23,42,0.18)] sm:max-h-[300px] lg:max-h-[430px]"
            />
            <div className="absolute bottom-5 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-[50%] bg-slate-400/20 blur-xl" />
          </div>

          <div className="flex flex-col gap-4 !p-4 sm:!p-6 lg:!p-8">
            <div className="mb-2 flex items-center gap-2 pr-12 text-xs font-extrabold uppercase tracking-[0.16em] text-[#7b8494]">
              <span className="grid size-7 place-items-center rounded-lg bg-[#f3f4f6] text-[10px] font-black text-[#d92323]">
                {product.brand.slice(0, 2)}
              </span>
              {product.brand}
            </div>

            <h2
              id="product-modal-title"
              className="mb-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#101828] sm:text-3xl lg:text-[38px]"
            >
              {product.title}
            </h2>

            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-xl leading-none tracking-[1px] text-[#f59e0b]" aria-label={`${product.rating} out of 5 stars`}>
                {'★'.repeat(Math.floor(product.rating))}
                {product.rating % 1 >= 0.5 ? '½' : ''}
                <span className="text-[#d1d5db]">
                  {'★'.repeat(5 - Math.ceil(product.rating))}
                </span>
              </span>
              <span className="text-sm font-semibold text-[#667085]">
                {product.rating} ({product.reviews} reviews)
              </span>
              {product.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff1f2] px-3 py-1 text-xs font-bold text-[#c81e32]">
                  <i className="fa-solid fa-fire" aria-hidden="true"></i>
                  {product.badge}
                </span>
              )}
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-3xl font-extrabold tracking-tight text-[#d92323] sm:text-[38px]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-base font-semibold text-[#98a2b3] line-through sm:text-lg">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="rounded-full bg-[#fef2f2] px-3 py-1.5 text-xs font-extrabold text-[#d92323]">
                    Save ₹{savings.toLocaleString('en-IN')}
                  </span>
                </>
              )}
            </div>

            <p className="mb-6 text-sm leading-6 text-[#515d70] sm:text-base sm:leading-7">
              {product.description}
            </p>

            <div className="mb-3 flex items-center gap-3">
              <h3 className="shrink-0 text-base font-extrabold text-[#101828]">Key Specifications</h3>
              <div className="h-px flex-1 bg-[#e8ebf0]" />
            </div>

            <dl className="mb-6 grid grid-cols-1 gap-2.5 min-[430px]:grid-cols-2">
              {Object.entries(product.specs).map(([label, value]) => {
                const SpecIcon = getSpecIcon(label);

                return (
                  <div
                    key={label}
                    className="flex min-w-0 items-center gap-3 rounded-2xl border border-[#e9edf3] bg-[#f8f9fc] p-3 sm:p-3.5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#344054] shadow-sm">
                      <SpecIcon size={19} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[11px] font-medium uppercase tracking-wide text-[#7b8494]">{label}</dt>
                      <dd className="break-words text-sm font-bold leading-5 text-[#202939]">{value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex md:min-h-[58px] min-h-[50px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#25d366] to-[#0cab4d] px-5 py-4 text-center md:text-base text-[14px] font-extrabold text-white shadow-[0_10px_24px_rgba(20,185,85,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,185,85,0.35)] 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#169c48]"
            >
              <i className="fa-brands fa-whatsapp md:text-2xl text-xl" aria-hidden="true"></i>
              Ask about this product on WhatsApp
              <i className="fa-solid fa-chevron-right ml-1 text-sm" aria-hidden="true"></i>
            </a>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full bg-[#fff5e6] px-4 py-3 text-[11px] font-bold text-[#3b4351] sm:gap-x-7">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} aria-hidden="true" /> Genuine Product
              </span>
              <span className="hidden h-4 w-px bg-[#d6c6ad] sm:block" />
              <span className="inline-flex items-center gap-2">
                <i className="fa-solid fa-truck-fast text-sm" aria-hidden="true"></i> Fast Delivery
              </span>
              <span className="hidden h-4 w-px bg-[#d6c6ad] sm:block" />
              <span className="inline-flex items-center gap-2">
                <i className="fa-solid fa-headset text-sm" aria-hidden="true"></i> Expert Support
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
