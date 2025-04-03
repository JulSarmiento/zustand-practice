import CartCard from "@components/card/CartCard";
import { useCountStore } from '@hooks/useStore';

/**
 * CartCardContainer component renders a container for displaying a list of cart items.
 * It utilizes the `useCountStore` hook to access the cart state and the `removeFromCart` function.
 * Each cart item is rendered using the `CartCard` component.
 * @component
 * @returns {JSX.Element} A container with a list of cart items.
 */
const CartCardContainer = () => {
  const { cart, removeFromCart } = useCountStore();

  return (
    <div className="cartCardContainer">
      {cart.items.map((product) => (
        <CartCard key={product.id} product={product} removeFromCart={removeFromCart}/>
      ))}
    </div>
  );
};

export default CartCardContainer;