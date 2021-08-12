import './App.css';
// import Form from 'react-bootstrap/Form';
import React from 'react';
import OrderTrack from './components/OrderTrack'
import "./App.css";


function App() {
 
  return (
    <div>
      <div className="topbar"/>
      <h1>
        Track your order here.
      </h1>
      <OrderTrack/>
      <div className="bottombar"/>
    </div>
  );
}

export default App;