import React from "react";
import useCart from "../../hooks/UseCart";
import useProducts from "../../hooks/UseProducts";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import ReviewItems from "../ReviewItems/ReviewItems";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  //   console.log(products);
  const handleRemoveBtn = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((ct) => (
          <ReviewItems
            handleRemoveBtn={handleRemoveBtn}
            key={ct.key}
            ct={ct}
          ></ReviewItems>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
