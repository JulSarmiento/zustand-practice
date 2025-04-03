import Card from '@components/card/Card';
import useProducts from '@hooks/useApi';

/**
 * Componente `CardContainer` que muestra una cuadrícula de tarjetas de productos.
 * Este componente utiliza el hook `useProducts` para obtener los datos de los productos
 * y los renderiza en un diseño de cuadrícula adaptable. Cada producto se pasa como
 * propiedad al componente `Card`.
 * @component
 * @returns {JSX.Element} Un contenedor de tarjetas con un diseño de cuadrícula.
 * @example <CardContainer />
 */
const CardContainer = () => {
  const { data: products } = useProducts();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place gap-6">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardContainer;