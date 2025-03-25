import Button from '@components/ui/buttons/Button';
import ButtonContainer from '@components/buttonsContainer/ButtonContainer';
import Image from '@components/ui/images/Image';
import Title from '@components/ui/texts/Title';
import priceFormart from '@utils/priceFormat';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const srcSet = `
    ${product.image.thumbnail} 480w,
    ${product.image.mobile} 768w,
    ${product.image.tablet} 1024w,
    ${product.image.desktop} 1920w
`;

  const count = 1;

  return (
    <div className='rounded-md w-full md:max-w-md '>
      <div
        className={`relative cursor-pointer ${active ? 'border-3 border-rose-400 rounded-xl' : 'border-3 border-transparent rounded-xl'} `}
      >
        <Image src={product.image} alt={product.name} srcSet={srcSet} className='w-full h-[200px] rounded-xl object-cover hover:opacity-90 transition-opacity duration-300' />
        <ButtonContainer className='absolute w-full flex justify-center -bottom-5 left-0'>
          {
            active ?
              <Button
                className='w-[50%] lg:w-[65%] flex justify-between items-center px-4 text-rose-50 text-sm h-9 bg-primary py-1 rounded-2xl font-semibold '
              >
                <i 
                  onClick={count > 1 ? () => count - 1 : () => setActive(false)}
                  className='fas fa-minus-circle hover:shadow-md transition-colors duration-300'
                />
                <p>
                  {count}
                </p>
                <i className='fas fa-plus-circle'/>
              </Button>
              :
              <Button
                onClick={() => setActive(true)}
                className='w-[50%] lg:w-[65%] flex justify-center items-center text-xs h-9 bg-white border-[1px] border-rose-500 py-1 rounded-2xl font-semibold hover:bg-rose-100 transition-colors duration-300'
              >
                <i className='fas fa-shopping-cart mr-2 hover:shadow-md transition-colors duration-300'></i>
                <p>
                  {t('home.button')}
                </p>
              </Button>
          }
        </ButtonContainer>
      </div>
      <div className='mt-6 font-RH'>
        <Title as='h3' className='text-sm font-RH text-rose-300'>{product.category}</Title>
        <Title as='h2' className='text-base font-semibold text-rose-900 hover:text-rose-700 transition-colors duration-300'>{product.name}</Title>
        <Title as='h4' className='text-sm font-semibold text-primary'>{priceFormart(product.price)}</Title>
      </div>
    </div>
  );
};

export default Card;