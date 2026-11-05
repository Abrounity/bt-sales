'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactContent() {
  const searchParams = useSearchParams();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Product Inquiry',
    message: ''
  });

  useEffect(() => {
    const inquiry = searchParams.get('inquiry');
    const exchange = searchParams.get('exchange');
    const plan = searchParams.get('plan');

    if (inquiry) {
      setFormData((prev) => ({
        ...prev,
        subject: `Product Inquiry: ${inquiry}`,
        message: `Hello BT Sales team, I am interested in checking availability and discount for "${inquiry}". Please contact me.`
      }));
    } else if (exchange) {
      setFormData((prev) => ({
        ...prev,
        subject: `Exchange Valuation: ${exchange}`,
        message: `Hello, I got an exchange quote on your website for my "${exchange}". I would like to exchange it toward a new smartphone.`
      }));
    } else if (plan) {
      setFormData((prev) => ({
        ...prev,
        subject: `Protection Plan: ${plan}`,
        message: `Hello, I want to enroll my device into the ${plan} care plan. Please share the verification steps.`
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '40px 0 80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>
          Contact BT Sales India
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
          Visit our authorized retail store in Greater Noida or reach out directly
          via phone, WhatsApp, or email for price quotes, stock checks, and repair bookings.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px' }}>
        {/* Left Column: Store Details & Map */}
        <div>
          <div style={{ background: 'var(--color-light-bg)', padding: '32px', borderRadius: '16px', border: '1px solid var(--color-border)', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>Store Details</h2>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(217,35,35,0.1)', color: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px' }}>Store Address</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Omega 1, Commercial Belt, Greater Noida, Uttar Pradesh, PIN - 201308, India
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(217,35,35,0.1)', color: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px' }}>Direct Phone & WhatsApp</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  +91 98765 43210 / +91 98765 43211
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(217,35,35,0.1)', color: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px' }}>Email Support</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  support@btsalesindia.com / sales@btsalesindia.com
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(217,35,35,0.1)', color: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px' }}>Operating Hours</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Monday - Sunday: 10:00 AM – 9:00 PM (Open all 7 days)
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-border)', height: '220px', background: '#0f172a', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: '#ffffff', zIndex: 2, padding: '20px' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 10px', background: 'var(--color-brand)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                <i className="fa-solid fa-store"></i>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 4px' }}>BT Sales Store, Greater Noida</h4>
              <p style={{ fontSize: '12px', color: '#94a3b8' }}>Commercial Belt, Omega 1, Greater Noida, UP</p>
            </div>
            {/* Background grid visual */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div style={{ background: '#ffffff', padding: '36px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Send Us a Message</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '24px' }}>
            Looking for a specific phone model or appliance quote? Send an inquiry and our sales team will respond promptly.
          </p>

          {formSubmitted ? (
            <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
              <i className="fa-solid fa-circle-check" style={{ color: '#22c55e', fontSize: '48px', marginBottom: '16px' }}></i>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#15803d' }}>Message Sent Successfully!</h3>
              <p style={{ fontSize: '14px', marginTop: '8px', color: '#166534', lineHeight: 1.5 }}>
                Thank you, <strong>{formData.name}</strong>. Our team has received your inquiry regarding <em>"{formData.subject}"</em> and will call you on <strong>{formData.phone}</strong> shortly.
              </p>
              <button onClick={() => setFormSubmitted(false)} className="btn btn-outline" style={{ marginTop: '20px' }}>
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Subject / Reason *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Message Details *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ask about model availability, discount offers, or exchange options..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: '14px', marginTop: '8px' }}>
                <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }}></i>
                Submit Inquiry to Store
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>Loading Contact Page...</div>}>
      <ContactContent />
    </Suspense>
  );
}
