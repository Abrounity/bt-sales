'use client';

import React, { useState } from 'react';
import { exchangePricingData, conditionMultipliers } from '@/data/exchange';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'repairs' | 'exchange' | 'plans'>('repairs');

  // Exchange Estimator States
  const [selectedBrand, setSelectedBrand] = useState<string>('Apple');
  const [selectedModel, setSelectedModel] = useState<string>('iPhone 13 Series');
  const [selectedCondition, setSelectedCondition] = useState<string>('good');
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  // Repair Booking Form States
  const [repairSubmitted, setRepairSubmitted] = useState(false);
  const [repairData, setRepairData] = useState({
    name: '',
    phone: '',
    device: '',
    issue: 'Screen Damage / Broken Glass',
    address: ''
  });

  const calculateExchangeValue = (e: React.FormEvent) => {
    e.preventDefault();
    const brandData = exchangePricingData[selectedBrand];
    if (!brandData) return;

    const modelMultiplier = brandData.models[selectedModel] || 1.0;
    const condMultiplier = conditionMultipliers[selectedCondition] || 1.0;

    const base = brandData.baseValue;
    const calculated = Math.round(base * modelMultiplier * condMultiplier);
    setEstimatedValue(calculated);
  };

  const handleRepairSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRepairSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '40px 0 80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>
          Services & Device Support
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
          Authorized diagnostics, doorstep pickup repairs, and instant exchange valuation
          for your smartphones and home electronics across Greater Noida.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="service-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <button
          className={`btn ${activeTab === 'repairs' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('repairs')}
        >
          <i className="fa-solid fa-screwdriver-wrench" style={{ marginRight: '8px' }}></i>
          Doorstep Repair Booking
        </button>
        <button
          className={`btn ${activeTab === 'exchange' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('exchange')}
        >
          <i className="fa-solid fa-hand-holding-dollar" style={{ marginRight: '8px' }}></i>
          Old Device Exchange Estimator
        </button>
        <button
          className={`btn ${activeTab === 'plans' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('plans')}
        >
          <i className="fa-solid fa-shield-halved" style={{ marginRight: '8px' }}></i>
          BT Care Protection Plans
        </button>
      </div>

      {/* Tab 1: Doorstep Repair Booking */}
      {activeTab === 'repairs' && (
        <div className="service-panel-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div style={{ background: 'var(--color-light-bg)', padding: '32px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Book Doorstep Device Service</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '24px' }}>
              Our certified technicians visit your location in Greater Noida, Noida, or Ghaziabad. Most repairs completed in under 90 minutes.
            </p>

            {repairSubmitted ? (
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#22c55e', fontSize: '36px', marginBottom: '12px' }}></i>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#15803d' }}>Booking Confirmed!</h3>
                <p style={{ fontSize: '13px', marginTop: '6px', color: '#166534' }}>
                  Our technician will call you on <strong>{repairData.phone}</strong> to confirm the appointment and provide an estimate.
                </p>
                <button onClick={() => setRepairSubmitted(false)} className="btn btn-outline" style={{ marginTop: '16px' }}>
                  Book Another Repair
                </button>
              </div>
            ) : (
              <form onSubmit={handleRepairSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={repairData.name}
                    onChange={(e) => setRepairData({ ...repairData, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={repairData.phone}
                    onChange={(e) => setRepairData({ ...repairData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Device Model</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. iPhone 13, OnePlus 11, Samsung S22"
                    value={repairData.device}
                    onChange={(e) => setRepairData({ ...repairData, device: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Primary Issue</label>
                  <select
                    value={repairData.issue}
                    onChange={(e) => setRepairData({ ...repairData, issue: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                  >
                    <option>Screen Damage / Broken Glass</option>
                    <option>Battery Draining Quickly / Replacement</option>
                    <option>Camera Blurry or Cracked Lens</option>
                    <option>Charging Port Issue / No Power</option>
                    <option>Speaker / Mic Distortion</option>
                    <option>Motherboard / Water Damage</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Pickup Address (Greater Noida / NCR)</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Sector, Society, Flat Number, Greater Noida"
                    value={repairData.address}
                    onChange={(e) => setRepairData({ ...repairData, address: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>
                  Confirm Doorstep Booking
                </button>
              </form>
            )}
          </div>

          {/* Repair Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(217,35,35,0.1)', color: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700 }}>90-Minute Express Turnaround</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Screen and battery replacements done right in front of you.</p>
                </div>
              </div>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(217,35,35,0.1)', color: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700 }}>90-Day Warranty Protection</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>All repaired components covered by unconditional warranty.</p>
                </div>
              </div>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(217,35,35,0.1)', color: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700 }}>Data Privacy & Security</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Zero-data wipe policy. Your personal files remain untouched.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Old Device Exchange Estimator */}
      {activeTab === 'exchange' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-light-bg)', padding: '36px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', textAlign: 'center' }}>
            Smart Device Buyback Estimator
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', textAlign: 'center', marginBottom: '32px' }}>
            Check how much your old device is worth. Deduct the amount instantly toward any new purchase at BT Sales.
          </p>

          <form onSubmit={calculateExchangeValue} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  const b = e.target.value;
                  setSelectedBrand(b);
                  const firstModel = Object.keys(exchangePricingData[b]?.models || {})[0] || '';
                  setSelectedModel(firstModel);
                }}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
              >
                {Object.keys(exchangePricingData).map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Model Series</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
              >
                {Object.keys(exchangePricingData[selectedBrand]?.models || {}).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Condition</label>
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
              >
                <option value="flawless">Flawless (No scratches)</option>
                <option value="good">Good (Normal minor wear)</option>
                <option value="fair">Fair (Scratches / small dent)</option>
                <option value="broken">Damaged / Broken Screen</option>
              </select>
            </div>

            <div style={{ gridColumn: 'span 3', textAlign: 'center', marginTop: '8px' }}>
              <button type="submit" className="btn btn-primary" style={{ padding: '12px 32px' }}>
                Calculate Exchange Value
              </button>
            </div>
          </form>

          {estimatedValue !== null && (
            <div style={{ marginTop: '24px', padding: '24px', background: '#ffffff', borderRadius: '12px', border: '2px dashed var(--color-brand)', textAlign: 'center' }}>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: 'var(--text-muted)' }}>
                Estimated Exchange Buyback Value
              </span>
              <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--color-brand)', margin: '8px 0' }}>
                ₹{(estimatedValue - 1000).toLocaleString('en-IN')} - ₹{(estimatedValue + 1500).toLocaleString('en-IN')}*
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Based on {selectedBrand} {selectedModel} in {selectedCondition} condition.
              </p>
              <a
                href={`/contact?exchange=${encodeURIComponent(`${selectedBrand} ${selectedModel}`)}`}
                className="btn btn-primary"
                style={{ marginTop: '16px', display: 'inline-block' }}
              >
                Lock Value & Exchange at Store
              </a>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: BT Care Protection Plans */}
      {activeTab === 'plans' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Basic Care</span>
            <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0' }}>Screen Shield</h3>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand)', margin: '16px 0' }}>₹1,499 / yr</div>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 2, color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> 1 Free Screen Replacement</li>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> Zero processing charges</li>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> Doorstep courier pickup</li>
            </ul>
            <a href="/contact?plan=Screen+Shield" className="btn btn-outline" style={{ width: '100%' }}>Enroll Device</a>
          </div>

          <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '2px solid var(--color-brand)', position: 'relative', textAlign: 'center' }}>
            <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand)', color: '#ffffff', padding: '4px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 700 }}>
              MOST POPULAR
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Complete Care</span>
            <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0' }}>Total Protection</h3>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand)', margin: '16px 0' }}>₹2,999 / yr</div>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 2, color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> Unlimited Screen & Back Glass</li>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> Accidental Liquid Damage cover</li>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> Free Battery Health replacement</li>
            </ul>
            <a href="/contact?plan=Total+Protection" className="btn btn-primary" style={{ width: '100%' }}>Enroll Device</a>
          </div>

          <div style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Appliances</span>
            <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0' }}>Home AMC Plan</h3>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand)', margin: '16px 0' }}>₹3,999 / yr</div>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: 2, color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> 2 Free Annual AC Servicing</li>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> Fridge & Washing Machine tune-ups</li>
              <li><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '8px' }}></i> 30% off spare replacement parts</li>
            </ul>
            <a href="/contact?plan=Home+AMC" className="btn btn-outline" style={{ width: '100%' }}>Enroll Home</a>
          </div>
        </div>
      )}
    </div>
  );
}
