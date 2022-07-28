import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { cartItems } from '../../data/AppData';

const initialState = {
    // cartItems: cartItems,
    // quantity: cartItems.length,
    // total: 0,
    // isLoading: false
    cartItems: [],
    quantity: 0,
    total: 0,
    isLoading: false
};

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems', async() => {
    try {
        let response = await axios(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        },
        increaseItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.map(item => {
                if(item.id === itemId) {
                    item.amount += 1;
                }
                return item;
            });
        },
        decreaseItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.map(item => {
                if( item.amount !== 0 && item.id === itemId) {
                    item.amount -= 1;
                }
                return item;
            });
        },
        calculateTotals: (state) => {
            let amount = state.cartItems.reduce((acc, val) => {
                return acc + val.amount;
            }, 0);
            let total = state.cartItems.reduce((acc, val) => {
                return acc + val.price * val.amount;
            }, 0);

            state.quantity = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.cartItems = action.payload;
            state.isLoading = false;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export const { clearCart, removeItem, increaseItem, decreaseItem, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;