import Header from './Header';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import "./App.scss";
const App = () => {
  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='app-content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
