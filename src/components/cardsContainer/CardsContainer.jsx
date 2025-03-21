import Card from '@components/card/Card';
import useProducts from '@hooks/useApi';

const CardContainer = () => {

  const { data: products } = useProducts();

  console.log("Data", products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};

export default CardContainer;