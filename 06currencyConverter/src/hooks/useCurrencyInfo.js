import { useState, useEffect } from 'react';

const useCurrencyInfo = (currency) => {
  const [currencyInfo, setCurrencyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
        if (!response.ok) {
          throw new Error('Failed to fetch currency data');
        }
        const data = await response.json();
        setCurrencyInfo(data.rates); // data.rates will contain the list of currency exchange rates
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, [currency]);  // Re-fetch when the currency changes

  return { currencyInfo, loading, error };
};

export default useCurrencyInfo;
