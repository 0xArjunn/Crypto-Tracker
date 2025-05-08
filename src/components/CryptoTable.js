import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePrices } from '../redux/cryptoSlice';
import { Table, Image } from 'react-bootstrap';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Real-Time Crypto Price Tracker</h2>
      <Table striped bordered hover responsive className="text-center">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td><Image src={coin.logo} alt={coin.symbol} width="30" height="30" rounded /></td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>${coin.price.toLocaleString()}</td>
              <td style={{ color: coin.percentChange1h >= 0 ? 'green' : 'red' }}>
                {coin.percentChange1h}%
              </td>
              <td style={{ color: coin.percentChange24h >= 0 ? 'green' : 'red' }}>
                {coin.percentChange24h}%
              </td>
              <td style={{ color: coin.percentChange7d >= 0 ? 'green' : 'red' }}>
                {coin.percentChange7d}%
              </td>
              <td>${coin.marketCap.toLocaleString()}</td>
              <td>${coin.volume24h.toLocaleString()}</td>
              <td>{coin.circulatingSupply}</td>
              <td>{coin.maxSupply}</td>
              <td><Image src={coin.chartImage} alt="chart" width="100" /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CryptoTable;
