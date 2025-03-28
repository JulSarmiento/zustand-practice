import { create } from 'zustand';

const useCountStore = create((set) => ({
  count: 0,
  inc: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set((state) => ({ count: state.count + 1 }))
  },
  dec: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set((state) => ({ count: state.count - 1 }))
  } 
}));

export {
  useCountStore,
  useCountStore as default,
}