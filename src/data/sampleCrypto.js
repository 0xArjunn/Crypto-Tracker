// src/data/cryptoData.js
import btcLogo from '../assets/btc.png';
import ethLogo from '../assets/eth.png';
import usdtLogo from '../assets/usdt.png';
import xrpLogo from '../assets/xrp.png';
import bnbLogo from '../assets/bnb.png';
import chartDefault from '../assets/chart-default.jpg';

const sampleCrypto = [
  {
    id: 1,
    logo: btcLogo,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 93759.48,
    percentChange1h: 0.43,
    percentChange24h: 0.93,
    percentChange7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: '19.85M BTC',
    chartImage: chartDefault,
  },
  {
    id: 2,
    logo: ethLogo,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1802.46,
    percentChange1h: 0.60,
    percentChange24h: 3.21,
    percentChange7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: '120.71M ETH',
    chartImage: chartDefault,
  },
  {
    id: 3,
    logo: usdtLogo,
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    percentChange1h: 0.00,
    percentChange24h: 0.00,
    percentChange7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: '145.27B USDT',
    chartImage: chartDefault,
  },
  {
    id: 4,
    logo: xrpLogo,
    name: 'XRP',
    symbol: 'XRP',
    price: 2.22,
    percentChange1h: 0.46,
    percentChange24h: 0.54,
    percentChange7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: '58.39B XRP',
    chartImage: chartDefault,
  },
  {
    id: 5,
    logo: bnbLogo,
    name: 'BNB',
    symbol: 'BNB',
    price: 606.65,
    percentChange1h: 0.09,
    percentChange24h: -1.20,
    percentChange7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: '140.89M BNB',
    chartImage: chartDefault,
  },
];

export default sampleCrypto;
