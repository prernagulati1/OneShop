export const addItem = (product) => {
  console.log("in action ADD==>", product);
  return {
    type: "ADD",
    product,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE",
    id,
  };
};

export const updateItemQuantity = (quantity, id) => {
  return {
    type: "UPDATE_QUANTITY",
    id,
    quantity,
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};
