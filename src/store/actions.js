import { useDispatch } from 'react-redux'

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODCUT_FROM_CART';


function commonDispatch(dispatchObject) {
  const dispatch = useDispatch()
  return () => dispatch(dispatchObject)
}
export const addProductToCart = product => {
  return commonDispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: product
  });
};

export const removeProductFromCart = productId => {
  return commonDispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId
  });
};
