import React from 'react';
import { useSelector } from "react-redux";

import MainNavigation from '../components/MainNavigation';
import { removeProductFromCart } from '../store/actions';
import './Cart.css';

function CartPage() {
  const cartItems = useSelector(state => state.cart)
  const cartItemCount = cartItems.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0)
  const cartTotal = cartItems.map(item => item.price * item.quantity)
    .reduce((total, currPrice) => total += currPrice, 0)


  return (
    <React.Fragment>
      <MainNavigation cartItemNumber={cartItemCount} />
      <main className="cart">
        {cartItems.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {cartItems.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
              <div>
                <button
                  onClick={removeProductFromCart(cartItem.id)}
                >
                  Remove from Cart
                  </button>
              </div>
            </li>
          ))}
          {cartItems.length > 0 &&
            <div className="total">Total: {cartTotal}</div>}
        </ul>

      </main>
    </React.Fragment>
  )
}


export default CartPage
