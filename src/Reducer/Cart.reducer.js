const initialState = {
  item: [],
};

const CartReducer = (state = initialState, action) => {
  console.log("action type in reducer==>", action.type);
  switch (action.type) {
    case "ADD": {
      const existingCartItemIndex = state.item.findIndex(
        (item) => item.id === action.product.id
      );
      const existingCartItem = state.item[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.product.quantity,
        };
        updatedItems = [...state.item];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.item.concat(action.product);
      }
      return {
        ...state,
        item: updatedItems,
      };
    }
    case "UPDATE_QUANTITY": {
      const existingCartItemIndex = state.item.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.item[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: action.quantity,
        };
        updatedItems = [...state.item];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        ...state,
        item: updatedItems,
      };
    }
    case "REMOVE": {
      const updatedItems = state.item.filter((item) => {
        if (item.id !== action.id) return item;
      });
      return { ...state, item: updatedItems };
    }
    case "EMPTY_CART": {
      console.log("in empty cart reducer");
      return { ...state, item: [] };
    }
    default:
      return state;
  }
};

export default CartReducer;
