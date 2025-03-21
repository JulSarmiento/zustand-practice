import Image from '@components/ui/images/Image';

/**
 * Componente Card
 * Este componente representa una tarjeta que muestra información de un producto.
 * @param {object} props - Las propiedades del componente.
 * @param {object} props.product - Objeto que contiene la información del producto.
 * @param {object} props.product.image - Objeto que contiene las diferentes versiones de la imagen del producto.
 * @param {string} props.product.image.thumbnail - URL de la imagen en miniatura (480w).
 * @param {string} props.product.image.mobile - URL de la imagen para dispositivos móviles (768w).
 * @param {string} props.product.image.tablet - URL de la imagen para tablets (1024w).
 * @param {string} props.product.image.desktop - URL de la imagen para dispositivos de escritorio (1920w).
 * @param {string} props.product.name - Nombre del producto.
 * @returns {JSX.Element} Un contenedor que muestra la imagen del producto con diferentes resoluciones y un diseño responsivo.
 * @example <Card product={product} />
 */
const Card = ({ product }) => {
  const srcSet = `
    ${product.image.thumbnail} 480w,
    ${product.image.mobile} 768w,
    ${product.image.tablet} 1024w,
    ${product.image.desktop} 1920w
`;

  return (
    <div className='p-4 bg-white shadow-md rounded-md w-full md:max-w-lg'>
      <Image src={product.image} alt={product.name} srcSet={srcSet} className='w-full  ' />
    </div>
  );
};

export default Card;