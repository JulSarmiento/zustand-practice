import CartCard from "@components/card/CartCard";
import { useCountStore } from '@hooks/useStore';

/**
 * CartCardsContainer component renders a container for displaying a list of cart items.
 * It utilizes the `useCountStore` hook to access the cart state and the `removeFromCart` function.
 * Each cart item is rendered using the `CartCard` component.
 * @component
 * @returns {JSX.Element} A container with a list of cart items.
 */
const CartCardsContainer = () => {
  const { cart, removeFromCart } = useCountStore();

  return (
    <div className="cartCardsContainer">
      {cart.items?.map((product) => (
        <CartCard key={product.id} product={product} removeFromCart={removeFromCart}/>
      ))}
    </div>
  );
};

export default CartCardsContainer;