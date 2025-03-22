import Button from '@components/ui/buttons/Button';
import ButtonContainer from '@components/buttonsContainer/ButtonContainer';
import Image from '@components/ui/images/Image';
import Title from '@components/ui/texts/Title';
import priceFormart from '@utils/priceFormat';

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
    <div className='rounded-md w-full md:max-w-md'>
      <div className='relative'>
        <Image src={product.image} alt={product.name} srcSet={srcSet} className='w-full h-[200px] rounded-xl object-cover' />
        <ButtonContainer className='absolute w-full flex justify-center -bottom-5 left-0'>
          <Button className='w-[60%] h-9 bg-white border-2 border-rose-500 py-1 rounded-2xl font-semibold'>Add to Cart</Button>
        </ButtonContainer> 
      </div>
      <div className='mt-6 font-RH'>
        <Title as='h3' className='text-sm font-RH text-rose-300'>{product.category}</Title>
        <Title as='h2' className='text-base font-semibold  text-rose-900'>{product.name}</Title>
        <Title as='h4' className='text-sm font-semibold text-primary'>{priceFormart(product.price)}</Title>
      </div>
    </div>
  );
};

export default Card;