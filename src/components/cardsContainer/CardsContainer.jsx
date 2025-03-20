import Card from '../card/Card';
import useProducts from '../../hooks/useApi';

const CardContainer = () => {

  const { data: products } = useProducts();

  console.log("Data", products);

  return (
    <div className="card-container">
      holis
    </div>
  );
};

export default CardContainer;