import { createSlice } from '@reduxjs/toolkit';
import sampleCrypto from '../data/sampleCrypto';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleCrypto,
  reducers: {
    updatePrices: (state) => {
      state.forEach((coin) => {
        const getRandom = (min, max) => +(Math.random() * (max - min) + min).toFixed(2);

        const priceChange = getRandom(-100, 100);
        const volumeChange = getRandom(-10000000, 10000000);

        coin.price = +(coin.price + priceChange).toFixed(2);
        coin.percent_change_1h = getRandom(-5, 5);
        coin.percent_change_24h = getRandom(-10, 10);
        coin.percent_change_7d = getRandom(-20, 20);
        coin.volume_24h = coin.volume_24h + volumeChange;
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export const selectCryptoData = (state) => state.crypto;
export default cryptoSlice.reducer;
