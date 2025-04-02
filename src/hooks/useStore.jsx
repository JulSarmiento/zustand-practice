import { create } from 'zustand';

const persistCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
}

const useCountStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || {
    items: [],
    count: 0,
    total: 0,
  },
  
  inc: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set((state) => ({ count: state.count + 1 }))
  },
  dec: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set((state) => ({ count: state.count - 1 }))
  },

  // Métodos para el carrito
  addToCart: (item, quantity) => {
    item = { ...item, quantity };
    set((state) => {
      const existingItem = state.cart.items.find((cartItem) => cartItem.id === item.id);
      let updatedItems;

      if (existingItem) {
        updatedItems = state.cart.items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        updatedItems = [...state.cart.items, item];
      }

      const updateCart = {
        ...state.cart,
        items: updatedItems,
        count: state.cart.count + quantity,
        total: state.cart.total + item.price * quantity,
      };
      persistCart(updateCart);
      return { cart: updateCart };
    });
  },

  removeFromCart: (itemId) => {
    set((state) => {
      const item = state.cart.items.find((item) => item.id === itemId);
      const updateCart = {
        ...state.cart,
        items: state.cart.items.filter((item) => item.id !== itemId),
        count: state.cart.count - item.quantity,
        total: state.cart.total - item.price * item.quantity,
      };
      persistCart(updateCart);
      return { cart: updateCart };
    })
  },

  clearCart: () => set(() => {
    const updateCart = { items: [], count: 0, total: 0 };
    persistCart(updateCart);
    return { cart: updateCart };
  }),

}));

export {
  useCountStore,
  useCountStore as default,
}