export const actionConstants = {
  CART: "CART"
};
export const cart = ({ product }) => {
  return {
    type: actionConstants.CART,
    payload: {
      product
    }
  };
};
