import { useEffect, useState } from 'react';
import backApi from '@plugins/axios';
import { useTranslation } from 'react-i18next';

/**
 * Hook personalizado para realizar solicitudes a una API y manejar el estado de los datos, la carga y los errores.
 * @function useApi
 * @param {string} url - La URL del endpoint al que se realizará la solicitud.
 * @returns {Object} Un objeto con las siguientes propiedades:
 *   @property {Array} data - Los datos obtenidos de la API.
 *   @property {boolean} loading - Indica si la solicitud está en curso.
 *   @property {Error|null} error - El error ocurrido durante la solicitud, si existe.
 * @example
 * const { data, loading, error } = useApi('/api/endpoint');
 * if (loading) {
 *   return <p>Cargando...</p>;
 * }
 * if (error) {
 *   return <p>Error: {error.message}</p>;
 * }
 * return <div>{JSON.stringify(data)}</div>;
 */
const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  console.log('Language:', i18n.language); //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backApi.get(`${i18n.language}.json`);
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
  , [i18n.language]);

  return {
    data,
    loading,
    error,
  };
};

/**
 * Hook personalizado para obtener productos desde un endpoint específico.
 * @function useProducts
 * @description Este hook utiliza `useApi` para realizar una solicitud a la ruta `/data.json`
 * y obtener los datos de los productos.
 * @returns {any} Los datos obtenidos desde el endpoint `/data.json`.
 * @example const products = useProducts();
 */
const useProducts = () => useApi();

export default useProducts;