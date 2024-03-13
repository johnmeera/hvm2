import React, { useState, useEffect } from 'react';
import "./CartPage.css";

const CartPage = ({ cart, removeFromCart, decrementQuantity, incrementQuantity, onClose }) => {
  const [formData, setFormData] = useState({
    customername: '',
    mobilenumber: '',
    room: '',
    type: '',
    orderplaced: 'Customer',
    bill: 'Customer',
    items: [],
    quantity: [],
    price: []
  });

  const [serviceCharge, setServiceCharge] = useState(0);
  const [roomTypes, setRoomTypes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let endpoint = '';
      let serviceData = {};
  
      switch (formData.type) {
        case "roomservice":
          endpoint = 'http://localhost:8105/room/save';
          serviceData = {
            type: formData.type,
            roomtype: formData.room,
            customername: formData.customername,
            mobilenumber: formData.mobilenumber,
            orderplaced: formData.orderplaced,
            bill: formData.bill,
            items: cart.map(item => item.name),
            quantity: cart.map(item => item.quantity),
            price: cart.map(item => item.price),
            servicecharge: calculateServiceCharge(cart),
            total: calculateTotal(cart),
            gst: calculateGST(cart),
            nettotal: calculateNetTotal(cart)
          };
          break;
        case "takeaway":
          endpoint = 'http://localhost:8105/takeaway/save';
          serviceData = {
            type: formData.type,
            customername: formData.customername,
            mobilenumber: formData.mobilenumber,
            orderplaced: formData.orderplaced,
            bill: formData.bill,
            items: cart.map(item => item.name),
            quantity: cart.map(item => item.quantity),
            price: cart.map(item => item.price),
            total: calculateTotal(cart),
            gst: calculateGST(cart),
            nettotal: calculateNetTotal(cart)
          };
          break;
        
      }
  
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });
  
      if (response.ok) {
        console.log('Service data added successfully');
        onClose();
        // window.location.assign("/Roomservice")
      } else {
        console.error('Failed to add service data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleTypeChange = (e) => {
    setFormData({ ...formData, type: e.target.value, room: '' });
  };

  const calculateTotal = (cart) => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  const calculateGST = (cart) => {
    const gstPercentage = 18;
    return calculateTotal(cart) * (gstPercentage / 100);
  };

  const calculateServiceCharge = (cart) => {
    if (formData.type === "roomservice") {
      const serviceChargeAmount = 50; 
      return serviceChargeAmount;
    }
    return 0; 
  };

  const calculateNetTotal = (cart) => {
    const total = calculateTotal(cart);
    const gst = calculateGST(cart);
    const calculatedServiceCharge = calculateServiceCharge(cart);
    return total + gst + calculatedServiceCharge;
  };

  return (
    <div className="cart-popup">
      <div className="cart-popup-content1">
        <h3>Cart</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Type:</label>
            <div className='radiofood'>
              <input
                type="radio"
                id="roomservice"
                name="type"
                value="roomservice"
                checked={formData.type === "roomservice"}
                onChange={handleTypeChange}
              />
             
            <label htmlFor="roomservice">Room Service</label>
            </div>
            <div>
              <input
                type="radio"
                id="takeaway"
                name="type"
                value="takeaway"
                checked={formData.type === "takeaway"}
                onChange={handleTypeChange}
              />
              <label htmlFor="takeaway">Takeaway</label>
            </div>
            <div>
              {/* <input
                type="radio"
                id="dineinn"
                name="type"
                value="dineinn"
                checked={formData.type === "dineinn"}
                onChange={handleTypeChange}
              />
              <label htmlFor="dineinn">Dine-in</label> */}
            </div>
          </div>
          {formData.type === "roomservice" && (
            <div>
              <label>Room Type:</label>
              <select
                value={formData.room}
                onChange={(e) => setFormData({ ...formData, room: e.target.value })}
              >
                <option value="">Select room type</option>
                <option value="Premium Suite">Premium Suite</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Seminar Hall">Seminar Hall</option>
              </select>
            </div>
          )}
          {/* {formData.type === "dineinn" && (
            <div>
              <label>Table Number:</label>
              <input
                type='number'
                value={formData.tableNumber}
                onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })}
              />
            </div>
          )} */}
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
              <td colSpan="4">Service Charge: ₹{calculateServiceCharge(cart)}</td>
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

export default CartPage;


