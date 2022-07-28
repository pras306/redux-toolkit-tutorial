import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './CartContainer.css';
import CartItem from '../CartItem/CartItem';
import { openModal } from '../../features/Modal/ModalSlice';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, quantity, total } = useSelector(store => store.cart);

    const renderComponent = () => {
        if(quantity < 1) {
            return <span className='cart-container__empty'>is currently empty. Add Items to your cart to see them here.</span>
        } else {
            return (
                <div className='cart-container__items'>
                    {cartItems.map(item => {
                        return(
                            <CartItem key={item.id} {...item} />
                        );
                    })}
                </div>
            );
        }
    };

    const handleClearCart = () => {
        dispatch(openModal());
    }

    return (
        <div className='cart-container'>
            <h2>Your Bag</h2>
            {renderComponent()}
            <hr />
            <div className="cart-container__footer">
                <div className='cart-container__total'>
                    <p>Total</p>
                    <span>$ {total.toFixed(2)}</span>
                </div>
                <div className="cart-container__btns">
                    <button onClick={() => handleClearCart()}>Clear Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;