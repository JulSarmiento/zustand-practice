import Image from '../ui/images/Image';

const Card = ({ product }) => {
  return (
    <div className='p-4 bg-white shadow-md rounded-md'>
      <Image image={product.image} name={product.name} className='w-full h-64 object-cover' />
    </div>
  );
};

export default Card;