import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

// Define product type
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Define cart state type
interface CartState {
  cartItems: Product[];
  totalQuantity: number;
  totalPrice: number;
}

// Initial state
const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<Product, "quantity">>) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        toast.success(`${action.payload.name} quantity updated!`);
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart!`,);
      }
      // Recalculate the total quantity and price
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload
      );

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
        toast.success('Item removed from cart!');
      } else {
        toast.error('Item not found in cart!');
      }
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === id);

      if (existingItem && quantity >= 1) {
        const quantityChange = quantity - existingItem.quantity;
        existingItem.quantity = quantity;

        // Recalculate total quantity and price after update
        state.totalQuantity += quantityChange;
        state.totalPrice += quantityChange * existingItem.price;

        toast.success(`${existingItem.name} quantity updated!`);
      } else {
        toast.error('Invalid quantity!');
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
