import Title from "@components/ui/texts/Title";
import priceFormat from "@utils/priceFormat";

/**
 * Componente `CartCard` que representa una tarjeta de producto en el carrito de compras.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.product - Objeto que contiene la información del producto.
 * @param {string} props.product.name - Nombre del producto.
 * @param {number} props.product.quantity - Cantidad del producto en el carrito.
 * @param {number} props.product.price - Precio unitario del producto.
 * @returns {JSX.Element} Una tarjeta que muestra el nombre, cantidad, precio unitario y total del producto,
 * además de un botón para eliminarlo del carrito.
 * @example <CartCard product={product} />
 */
const CartCard = ({ product }) => {
  return (
    <div
      className="flex justify-between font-RH items-center gap-4 pb-4 border-b-[1px] border-rose-100"
    >
      <div
        className="flex flex-col justify-between items-start "
      >
        <Title
          as="h3"
          className="text-lg text-rose-900 font-semibold"
        >
          {product.name}
        </Title>
        <div className="flex justify-between items-center">
          <p className="text-xl text-primary font-semibold">
            {`${product.quantity}x`}
          </p>
          <div className="flex mx-3 gap-2 items-center font-semibold text-rose-400">
            <p >
              {`@ ${priceFormat(product.price)}`}
            </p>
            <p >
              {priceFormat(product.price * product.quantity)}
            </p>
          </div>

        </div>
      </div>
      <div className="border-[2px] font-semibold text-rose-400 rounded-full size-6 flex justify-center items-center">
        <i className="fas fa-close"></i>
      </div>
    </div>
  )
};


export default CartCard;