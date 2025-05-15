import { create } from 'zustand';

/**
 * Persists the cart data to the local storage.
 * @param {Object} cart - The cart object to be saved.
 */
const persistCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

/**
 * Calculates the total count of items and the total price in a shopping cart.
 * @param {Array} items - An array of cart items. Each item is an object with `quantity` and `price` properties.
 * @param {number} items[].quantity - The quantity of the item in the cart.
 * @param {number} items[].price - The price of a single unit of the item.
 * @returns {{ count: number, total: number }} An object containing the total count of items (`count`) 
 * and the total price (`total`) of the cart.
 */
const calculateCartTotals = (items) => {
  const count = items.reduce((acc, item) => acc + item.quantity, 0);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return { count, total };
};

const initialCartState = {
  items: [],
  count: 0,
  total: 0,
};

/**
 * Zustand store for managing cart and count state.
 * @typedef {Object} CartItem
 * @property {string} id - The unique identifier for the cart item.
 * @property {number} quantity - The quantity of the item in the cart.
 * @property {string} [name] - The name of the item (optional).
 * @property {number} [price] - The price of the item (optional).
 *
 * @typedef {Object} CartState
 * @property {CartItem[]} items - The list of items in the cart.
 * @property {number} count - The total number of items in the cart.
 * @property {number} total - The total price of items in the cart.
 *
 * @typedef {Object} UseCountStore
 * @property {CartState} cart - The current state of the cart.
 * @property {Function} increment - Asynchronously increments the count by 1.
 * @property {Function} decrement - Asynchronously decrements the count by 1.
 * @property {Function} addToCart - Adds an item to the cart or updates its quantity.
 * @property {Function} decreaseQuantity - Decreases the quantity of an item in the cart.
 * @property {Function} removeFromCart - Removes an item from the cart by its ID.
 * @property {Function} clearCart - Clears all items from the cart.
 *
 * @returns {UseCountStore} Zustand store with cart and count management methods.
 */
const useCountStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || initialCartState,

  increment: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },

  decrement: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count - 1 }));
  },

  addToCart: (item, quantity) => {
    set((state) => {
      const existingItem = state.cart.items.find((cartItem) => cartItem.id === item.id);
      const updatedItems = existingItem
        ? state.cart.items?.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        : [...state.cart.items, { ...item, quantity }];

      const { count, total } = calculateCartTotals(updatedItems);
      const updatedCart = { ...state.cart, items: updatedItems, count, total };

      persistCart(updatedCart);
      return { cart: updatedCart };
    });
  },

  decreaseQuantity: (itemId) => {
    set((state) => {
      const existingItem = state.cart.items.find((item) => item.id === itemId);
      if (!existingItem || existingItem.quantity <= 1) return state;

      const updatedItems = state.cart.items?.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );

      const { count, total } = calculateCartTotals(updatedItems);
      const updatedCart = { ...state.cart, items: updatedItems, count, total };

      persistCart(updatedCart);
      return { cart: updatedCart };
    });
  },

  removeFromCart: (itemId) => {
    set((state) => {
      const updatedItems = state.cart.items.filter((item) => item.id !== itemId);
      const { count, total } = calculateCartTotals(updatedItems);
      const updatedCart = { ...state.cart, items: updatedItems, count, total };

      persistCart(updatedCart);
      return { cart: updatedCart };
    });
  },

  clearCart: () => {
    const clearedCart = initialCartState;
    persistCart(clearedCart);
    set(() => ({ cart: clearedCart }));
  },
}));

export { useCountStore, useCountStore as default };
