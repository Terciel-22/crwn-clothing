import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>I'm the Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, price, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span> x <span>{price}</span>
              <br />
              <span
                onClick={() => {
                  removeItemToCart(cartItem);
                }}
              >
                decrement
              </span>
              <br />
              <span
                onClick={() => {
                  addItemToCart(cartItem);
                }}
              >
                increment
              </span>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
