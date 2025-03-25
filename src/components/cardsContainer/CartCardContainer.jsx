import CartCard from "@components/card/CartCard";

const CartCardContainer = () => {

  const item = {
    name: 'Producto 1',
    price: 100,
    quantity: 1
  };
  
    return (
        <div className="cartCardContainer">
            <CartCard product={item}/>
        </div>
    );
};

export default CartCardContainer;