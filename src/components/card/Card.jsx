import Image from '../ui/Images/Image';

const Card = ({ product }) => {
  return (
    <div className='p-4 bg-white shadow-md rounded-md'>
      {product}
      <Image src={product.image} alt={product.name} className='w-full h-64 object-cover' />
    </div>
  );
};

export default Card;