import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Order.css";


export default function OrderTrack() {
  const [email, setEmail] = useState("");
  const [orderId, setorderId] = useState("");
  const [order, setOrder] = React.useState("");

  const fetchOrder = async () => {
    console.log("hello")
    console.log(orderId)
    console.log(email)
    const response = await fetch(`http://order-experience-api.us-e2.cloudhub.io/api/orders/${orderId}/status?email=${email}`);
    const orderItem = await response.json();
    console.log(orderItem)
    setOrder(orderItem);
    console.log(order)
  };

  function validateForm() {
    return email.length > 0 && orderId.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (

    <div className="Order">

      <Form onSubmit={handleSubmit}>
          <Form.Label>E-Mail    </Form.Label>
          <input type="email" className="inputField" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <Form.Label>Order-ID    </Form.Label>
          <input type="orderId" className="inputField" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="1234" value={orderId} onChange={(e) => setorderId(e.target.value)}></input>
        <button className="MainButton" onClick={fetchOrder} block size="lg" type="submit" disabled={!validateForm()}>
          Track Order
        </button>
        <h3>Your order status</h3>
        <p>Order ID: {order.orderId}</p>
        <p>Status: {order.status}</p>
        <p>Size: {order.size}</p>
        <p>Comment: {order.comment}</p>
        <p>Price: {order.price}</p>
        <p>Description: {order.description}</p>

        {/* <OrderItem/> */}
      </Form>
    </div>
  );
}