//Action types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

// Action creators
// Add item to cart
export function addCartItem(product) {
  return {
    type: CART_ADD_ITEM,
    payload: product,
  };
}

// Remove item from cart
export function removeCartItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}

// Increase item quantity in cart
export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  };
}

// Decrease item quantity in cart
export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
}

//reducers
function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      // Check if the product is already in the cart
      const existingProduct = state.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingProduct) {
        console.log("trigger 1")
        // If the product is already in the cart, increase the quantity by 1
        return state.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

      } else {
        console.log("trigger 2")
        // If the product is not in the cart, add it with quantity set to 1
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case CART_REMOVE_ITEM:
      return state.filter(
        (cartItem) => cartItem.id !== action.payload.productId
      );

    case CART_ITEM_INCREASE_QUANTITY:
      return state.map((cartItem) =>
        cartItem.id === action.payload.productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

    case CART_ITEM_DECREASE_QUANTITY:
      return state
        .map((cartItem) =>
          cartItem.id === action.payload.productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}

export default cartReducer;
