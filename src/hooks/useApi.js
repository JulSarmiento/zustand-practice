import { useEffect, useState } from 'react';
import backApi from '../plugins/axios';

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backApi.get(url);
        console.log('Fetched data:', response.data); // Debugging log
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }
  , [url]);

  return {
    data,
    loading,
    error,
  };
};

const useProducts = () => useApi('/data.json');

export default useProducts;