import React, { useState } from 'react';
import "./Dinecart.css";

const Dinecart = ({ cart, removeFromCart, decrementQuantity, incrementQuantity, onClose }) => {
  const [formData, setFormData] = useState({
    customername: '',
    mobilenumber: '',
    tablenumber: '',
    orderplaced: 'Customer',
    bill: 'Customer',
    items: [],
    quantity: [],
    price: []
  });

  const calculateTotal = (cart) => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };
  

  const calculateGST = (cart) => {
    const gstPercentage = 18;
    return calculateTotal(cart) * (gstPercentage / 100);
  };

  const calculateNetTotal = (cart) => {
    const total = calculateTotal(cart);
    const gst = calculateGST(cart);
    return total + gst;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const total = calculateTotal(cart);
      const gst = calculateGST(cart);
      const nettotal = calculateNetTotal(cart);
  
      const formDataWithTotals = {
        ...formData,
        total,
        gst,
        nettotal
      };
  
      const response = await fetch('http://localhost:8105/dineinn/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithTotals), // Send the form data with totals as JSON
      });
  
      if (response.ok) {
        console.log('Form data submitted successfully');
        onClose(); // Close the form after successful submission
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="cart-popup">
      <div className="cart-popup-content">
        <h3>Cart</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Customer Name:</label>
            <input
              type='text'
              value={formData.customername}
              onChange={(e) => setFormData({ ...formData, customername: e.target.value })}
            />
          </div>
          <div>
            <label>Mobile Number:</label>
            <input
              type='text'
              value={formData.mobilenumber}
              onChange={(e) => setFormData({ ...formData, mobilenumber: e.target.value })}
            />
          </div>
          <div>
            <label>Table Number:</label>
            <input
              type='text'
              value={formData.tablenumber}
              onChange={(e) => setFormData({ ...formData, tablenumber: e.target.value })}
            />
          </div>

          <div>
            <label>Order Placed by:</label>
            <select
              value={formData.orderplaced}
              onChange={(e) => setFormData({ ...formData, orderplaced: e.target.value })}
            >
              <option value="Customer">Customer</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <div>
            <label>Bill by:</label>
            <select
              value={formData.bill}
              onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
            >
              <option value="Customer">Customer</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <button type="submit">Checkout</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => decrementQuantity(item.name)}>-</button>
                  <button onClick={() => incrementQuantity(item.name)}>+</button>
                  <button onClick={() => removeFromCart(item.name)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Total: ₹{calculateTotal(cart)}</td>
            </tr>
            <tr>
              <td colSpan="4">GST (18%): ₹{calculateGST(cart)}</td>
            </tr>
            <tr>
              <td colSpan="4">Net Total: ₹{calculateNetTotal(cart)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Dinecart;

