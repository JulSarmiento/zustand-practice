import Card from '../card/Card';
import useProducts from '../../hooks/useApi';

const CardContainer = () => {
  const { data: products } = useProducts();

  return (
    <div className="card-container">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardContainer;