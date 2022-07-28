import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { calculateTotals, getCartItems } from '../features/Cart/CartSlice';
import Modal from '../components/Modal/Modal';
import Navbar from '../components/Navbar/Navbar';
import CartContainer from '../components/CartContainer/CartContainer';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector(store => store.cart);
  const { isOpen } = useSelector(store => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const renderComponent = () => {
    if(isLoading) return <div className="app__loading">Loading...</div>
    else {
      return(
        <>
          { isOpen && <Modal />}
          <Navbar />
          <CartContainer />
        </>
      );
    }
  };

  return (
    <div className='app'>
      {renderComponent()}
      {/* { isOpen && <Modal />}
      <Navbar />
      <CartContainer /> */}
    </div>
  )
};

export default App;