import { createSlice } from '@reduxjs/toolkit';
import sampleCrypto from '../data/sampleCrypto';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleCrypto,
  },
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map((asset) => {
        const randomChange = (value) => {
          const change = (Math.random() * 2 - 1) * 5; // -5% to +5%
          return +(value + value * (change / 100)).toFixed(2);
        };

        return {
          ...asset,
          price: randomChange(asset.price),
          percentChange1h: +(Math.random() * 10 - 5).toFixed(2),
          percentChange24h: +(Math.random() * 10 - 5).toFixed(2),
          volume24h: Math.floor(asset.volume24h * (1 + (Math.random() * 0.1 - 0.05)))
        };
      });
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
