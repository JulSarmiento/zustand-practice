import Title from "@components/ui/texts/Title";

const CartCard = ({ product }) => {
  return (
    <div>
      <Title
        as="h3"
        className="text-lg text-primary font-semibold" 
      >
        {product.name}
      </Title>
      <div className="flex">
        <p className="text-sm text-rose-900 font-semibold">
          {product.price}
        </p>
        <p className="text-sm text-rose-900 font-semibold">
          {product.quantity}
        </p>
      </div>
    </div>
  )
};


export default CartCard;