import React from 'react';
import { useDispatch } from 'react-redux';

import './Modal.css';
import { clearCart } from '../../features/Cart/CartSlice';
import { closeModal } from '../../features/Modal/ModalSlice';

const Modal = () => {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    }

    return (
        <div className='modal'>
            <div className='modal__box'>
                <div className='modal__box-header'>
                    <h3>Confirm Action</h3>
                </div>
                <div className='modal__box-content'>
                    <p>Remove all items from your cart?</p>
                </div>
                <div className='modal__box-btns'>
                    <button className='success' onClick={() => handleClearCart()}>Confirm</button>
                    <button className='error' onClick={() => dispatch(closeModal())}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;