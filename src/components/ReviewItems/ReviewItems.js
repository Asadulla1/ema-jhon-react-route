import React from "react";

const ReviewItems = (props) => {
  const { name, price, quantity, key, img } = props.ct;
  const { handleRemoveBtn } = props;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>Price: {price}</p>
        <p>
          <small>Quantity: {quantity}</small>
        </p>
        <button onClick={() => handleRemoveBtn(key)} className="btn-regular">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItems;
