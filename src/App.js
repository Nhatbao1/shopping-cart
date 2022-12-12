import Header from './Header';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import "./App.scss";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const count = useSelector(state => state.pay.count)
  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header count={count} />
      </div>
      <div className='app-content'>
        <Outlet />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default App;
