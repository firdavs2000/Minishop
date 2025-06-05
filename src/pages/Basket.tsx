import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart, clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="basket container">
      <h2>Savat</h2>

      {cartItems.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <>
          <div className="basket_items">
            {cartItems.map((item) => (
              <div className="basket_item" key={item.id}>
                <img
                  src={item.images?.[0] || "https://via.placeholder.com/100"}
                  alt={item.title}
                  className="basket_item_img"
                />
                <div className="basket_item_info">
                  <h3>{item.title}</h3>
                  <p>Narxi: {item.price}$</p>
                  <p>Soni: {item.quantity}</p>
                  <button onClick={() => handleRemove(item.id)}>O‘chirish</button>
                </div>
              </div>
            ))}
          </div>

          <div className="basket_summary">
            <h3>Umumiy narx: {totalPrice.toFixed(2)}$</h3>
            <button onClick={handleClearCart}>Savatni tozalash</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
