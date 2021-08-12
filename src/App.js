import './App.css';
// import Form from 'react-bootstrap/Form';
import React from 'react';
import OrderTrack from './components/OrderTrack'
import "./App.css";
import logo from "./images/wave-1638292_1920.jpeg"


function App() {
 
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" ></img>
      </div>
      <div className="headline">
        <h1>
          Track your order here.
        </h1>
      </div>
      <OrderTrack/>
      <div className="bottombar"/>
    </div>
  );
}

export default App;