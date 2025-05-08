import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePrices } from './redux/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Crypto Price Tracker</h2>
      <CryptoTable />
    </div>
  );
}

export default App;
