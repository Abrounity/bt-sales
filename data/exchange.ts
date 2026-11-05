// BT Sales India - Device Exchange Pricing Configuration

export interface BrandExchangeData {
  baseValue: number;
  models: Record<string, number>;
}

export const exchangePricingData: Record<string, BrandExchangeData> = {
  Apple: {
    baseValue: 12000,
    models: {
      'iPhone 11 Series': 1.0,
      'iPhone 12 Series': 1.5,
      'iPhone 13 Series': 2.2,
      'iPhone 14 Series': 3.5,
      'iPhone 15 Series': 5.0
    }
  },
  Samsung: {
    baseValue: 8000,
    models: {
      'Galaxy A Series': 1.0,
      'Galaxy M Series': 0.8,
      'Galaxy S21 / S22 Series': 1.8,
      'Galaxy S23 Series': 2.8,
      'Galaxy S24 Series': 4.5
    }
  },
  OnePlus: {
    baseValue: 7000,
    models: {
      'OnePlus Nord Series': 1.0,
      'OnePlus 9 / 10 Series': 1.6,
      'OnePlus 11 Series': 2.4,
      'OnePlus 12 Series': 3.8
    }
  },
  Other: {
    baseValue: 4000,
    models: {
      'Older Smartphone Models': 1.0,
      'Entry Level Budget Phones': 0.8,
      'Mid Range Android Phones': 1.5
    }
  }
};

export const conditionMultipliers: Record<string, number> = {
  flawless: 1.15,
  good: 1.0,
  fair: 0.75,
  broken: 0.4
};
