import React from 'react';
import { useSelector } from "react-redux";
import MainNavigation from '../components/MainNavigation';
import { addProductToCart } from '../store/actions';
import './Products.css';

function ProductsPage() {
  const products = useSelector(state => state.products)
  const cartItemCount = useSelector(state =>
    state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  )

  return (
    <React.Fragment>
      <MainNavigation cartItemNumber={cartItemCount} />
      <main className="products">
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  onClick={addProductToCart(product)}
                >
                  Add to Cart
                  </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}



export default ProductsPage;
