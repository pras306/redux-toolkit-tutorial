import React from 'react';
import { useSelector } from 'react-redux';

import './Navbar.css';
import { CartIcon } from '../../data/AppData';

const Navbar = () => {

    const { quantity } = useSelector((store) => store.cart);
    
    return (
        <div className='navbar'>
            <h3>Redux Toolkit</h3>
            <div className='navbar__icon'>
                <CartIcon />
                <span>{quantity}</span>
            </div>
        </div>
    );
};

export default Navbar;