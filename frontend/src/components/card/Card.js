// frontend/src/components/card/Card.js

import './index.css';

// Card component to render user detail
const Card = ({ order, productId }) => {
  return order?.products?.map((product) => {
    if (product.productId === productId) {
      return (
        <div className="product">
          <div className="card-desc">
            <span>
              <b>CustomerId: {order?.customerId}</b>
            </span>
            <span>Quantity: {product?.quantity}</span>
          </div>
        </div>
      );
    }
  });
};

export default Card;
