/**
 * Formatea un número como una cadena de texto en formato de moneda.
 * @param {number} price - El precio que se desea formatear.
 * @returns {string} Una cadena de texto que representa el precio formateado 
 * en formato de moneda con estilo 'currency', utilizando el idioma 'es-ES' 
 * y la moneda 'USD', con un mínimo de dos dígitos decimales.
 * @example priceFormat(1000) // returns "$1,000.00"
 */
const priceFormat = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
}

export default priceFormat;