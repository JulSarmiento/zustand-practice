import axios from 'axios'

/**
 * Crea una instancia de Axios configurada para interactuar con la API de backend.
 * @constant
 * @type {import('axios').AxiosInstance}
 * @property {string} baseURL - La URL base para las solicitudes HTTP, combinando la variable de entorno `VITE_API_URL` y el segmento 'api'.
 * @property {number} timeout - Tiempo máximo de espera para una solicitud en milisegundos (10,000 ms).
 * @property {Object} headers - Encabezados HTTP predeterminados para las solicitudes.
 * @property {string} headers.Content-Type - Tipo de contenido predeterminado para las solicitudes, configurado como 'application/json'.
 * @example <caption>Uso básico de `backApi`</caption>
 * import backApi from './plugins/axios';
 */
const backApi = axios.create({
  baseURL: [import.meta.env.VITE_API_URL, 'api'].join('/'),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },  
});

export default backApi;