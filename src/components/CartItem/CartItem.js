import React from 'react';
import { useDispatch } from 'react-redux';

import './CartItem.css';
import { removeItem, increaseItem, decreaseItem } from '../../features/Cart/CartSlice';
import { ChevronDown, ChevronUp } from '../../data/AppData';

const CartItem = ({ id, title, price, img, amount }) => {
    const dispatch = useDispatch();

    const handleDecreaseBtn = () => {
        if(amount === 1) {
            dispatch(removeItem(id));
        } else {
            dispatch(decreaseItem(id));
        }
    }

    return (
        <div className='cart-item'>
            <div className='cart-item__image'>
                <img src={img} alt={title} />
            </div>
            <div className='cart-item__content'>
                <h3>{title}</h3>
                <span>$ {price}</span>
                <button onClick={() => dispatch(removeItem(id))}>remove</button>
            </div>
            <div className='cart-item__btns'>
                <div className='cart-item__btn' onClick={() => dispatch(increaseItem(id))}>
                    <ChevronUp />
                </div>
                <p>{amount}</p>
                <div className='cart-item__btn' onClick={() => handleDecreaseBtn()}>
                    <ChevronDown />
                </div>
            </div>
        </div>
    );
};

export default CartItem;