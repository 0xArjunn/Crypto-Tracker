import React from 'react';
import { Table, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCryptoData } from '../redux/cryptoSlice';
import btcLogo from '../assets/btc.png';
import ethLogo from '../assets/eth.png';
import usdtLogo from '../assets/usdt.png';
import xrpLogo from '../assets/xrp.png';
import bnbLogo from '../assets/bnb.png';

const logoMap = {
  BTC: btcLogo,
  ETH: ethLogo,
  USDT: usdtLogo,
  XRP: xrpLogo,
  BNB: bnbLogo,
};

const CryptoTable = () => {
  const cryptoData = useSelector(selectCryptoData);

  return (
    <div className="table-responsive p-4">
      <Table striped bordered hover className="align-middle text-center">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin, index) => (
            <tr key={coin.symbol}>
              <td>{index + 1}</td>
              <td className="d-flex align-items-center gap-2">
                <Image src={logoMap[coin.symbol]} width="24" height="24" alt={coin.name} roundedCircle />
                <strong>{coin.name}</strong> <span className="text-muted">{coin.symbol}</span>
              </td>
              <td>${coin.price.toLocaleString()}</td>
              <td style={{ color: coin.percentChange1h >= 0 ? 'green' : 'red' }}>
                {coin.percentChange1h.toFixed(2)}%
              </td>
              <td style={{ color: coin.percentChange24h >= 0 ? 'green' : 'red' }}>
                {coin.percentChange24h.toFixed(2)}%
              </td>
              <td style={{ color: coin.percentChange7d >= 0 ? 'green' : 'red' }}>
                {coin.percentChange7d.toFixed(2)}%
              </td>
              <td>${coin.marketCap.toLocaleString()}</td>
              <td>${coin.volume24h.toLocaleString()}</td>
              <td>{coin.circulatingSupply}</td>
              <td>
                <Image src={coin.chartImage} width="100" height="40" alt="7d chart" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CryptoTable;