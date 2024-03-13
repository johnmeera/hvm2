import React, { useState } from 'react';
import './v_moghulaiMenu.css';

const V_moghulai = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemName, itemPrice) => {
    const existingItemIndex = cart.findIndex((item) => item.name === itemName);

    if (existingItemIndex !== -1) {
      // Item already exists, update quantity and price
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          const newQuantity = item.quantity + 1;
          const newPrice = itemPrice * newQuantity;
          return { ...item, quantity: newQuantity, price: newPrice };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      // Item doesn't exist, add to cart with quantity 1
      const newItem = { name: itemName, price: itemPrice, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (itemName) => {
    const updatedCart = cart.filter((item) => item.name !== itemName);
    setCart(updatedCart);
  };

  const decrementQuantity = (itemName) => {
    const existingItem = cart.find((item) => item.name === itemName);

    if (existingItem && existingItem.quantity > 1) {
      const updatedCart = cart.map((item) => {
        if (item.name === itemName) {
          const newQuantity = item.quantity - 1;
          const newPrice = item.price - item.price / item.quantity;
          return { ...item, quantity: newQuantity, price: newPrice };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      // If quantity is 1 or item doesn't exist, remove from cart
      removeFromCart(itemName);
    }
  };

  return (
    <div  className="moghulai-menu-container">
      <h3>Moghulai Breakfast</h3>
      <ul className='vv1'>
        <li className='vv2'>
          <img className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2ExoO9ArN3mJ13eP-4AoLHhmgYrDGXCL4Q&usqp=CAU" alt="Paratha" />
          <h4>Paratha - ₹60</h4>
          <button className="vv" onClick={() => addToCart('Paratha',60)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Paratha')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Paratha')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNrE__S_7im2y2rMH4QX8Nam671R99PMi_A&usqp=CAU" alt="Lassi" />
          <h4>Lassi - ₹40</h4>
          <button className="vv"onClick={() => addToCart('Lassi',40)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Lassi')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Lassi')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8zOW7QPCdbNxMWnhI-Ap8ooYX6QhTWGuDQ&usqp=CAU" alt="Samosa" />
          <h4>Samosa - ₹50</h4>
          <button className="vv"onClick={() => addToCart('Samosa',50)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Samosa')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Samosa')}>Remove All</button>
        </li>
        {/* Add more breakfast items as needed */}
      </ul>

      <h3>Moghulai Lunch</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJcLvJyDkhiyJqH0ihzhd9L4ZlmK2ucqG9Q&usqp=CAU" alt="Palak Paneer" />
          <h4>Palak Paneer - ₹80</h4>
          <button className="vv"onClick={() => addToCart('Palak Paneer',80)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Palak Paneer')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Palak Paneer')}>Remove All</button>
        </li>
        {/* Add more lunch items as needed */}
      </ul>

      <h3>Moghulai Dinner</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxauoYO3I8tpiMbwsXpY8U25UxqE7ERc9E3Q&usqp=CAU" alt="Shahi Tukda" />
          <h4> Shahi Tukda - ₹110</h4>
          <button className="vv"onClick={() => addToCart('Shahi Tukda',110)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Shahi Tukda')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Shahi Tukda')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9djkUzwwfuyHfGbCJZU-2hB_49hvkr42m_w&usqp=CAU" alt="Gulab Jamun" />
         <h4> Gulab Jamun - ₹100</h4>
          <button className="vv"onClick={() => addToCart('Gulab Jamun',100)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Gulab Jamun')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Gulab Jamun')}>Remove All</button>
        </li>
        {/* Add more dinner items as needed */}
      </ul>
      <h3>Moghulai Soups</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg" alt="Tomato Soup" />
          <h4>Tomato Soup - ₹199</h4>
          <button className="vv"onClick={() => addToCart('Tomato Soup', 199)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Tomato Soup')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Tomato Soup')}>Remove All</button>
        </li>
        <li  className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/sweet-corn-soup.jpg" alt="Corn Soup" />
          <h4> Corn Soup - ₹220</h4>
          <button className="vv"onClick={() => addToCart('Corn Soup', 220)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Corn Soup')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Corn Soup')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.myspicykitchen.net/wp-content/uploads/2022/10/Chicken-Clear-Soup-SQ.jpg" alt="Chicken Soup" />
          <h4>Chicken Soup - ₹180</h4>
          <button className="vv"onClick={() => addToCart('Chicken Soup', 180)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Chicken Soup')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Chicken Soup')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://theindianclaypot.com/content/images/wp-content/uploads/2019/02/mutton-soup.jpg" alt="Mutton Soup" />
          <h4>Mutton Soup - ₹230</h4>
          <button className="vv"onClick={() => addToCart('Mutton Soup', 230)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Mutton Soup')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Mutton Soup')}>Remove All</button>
        </li>
      </ul>

      <h3>Moghulai Starters</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://carveyourcraving.com/wp-content/uploads/2016/01/hariyalikebab.jpg" alt="fry veg hariyali kebabs" />
          <h4> fry veg hariyali kebabs - ₹210</h4>
          <button className="vv"onClick={() => addToCart('fry veg hariyali kebabs', 210)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('fry veg hariyali kebabs')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('fry veg hariyali kebabs')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg" alt="veg paneer tikka" />
          <h4>veg paneer tikka - ₹240</h4>
          <button className="vv"onClick={() => addToCart('veg paneer tikka', 240)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('veg paneer tikka')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('veg paneer tikka')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://sulthansbiriyani.in/wp-content/uploads/2021/04/chicken-spring-rolls-Delicious-Indian-Non-Veg-Starters.jpg" alt="Non-veg chicken spring rolls" />
          <h4>Non-veg chicken spring rolls - ₹299</h4>
          <button className="vv"onClick={() => addToCart('Non-veg chicken spring rolls', 299)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Non-veg chicken spring rolls')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Non-veg chicken spring rolls')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://sulthansbiriyani.in/wp-content/uploads/2021/04/Fish-and-chicken-pakora-Delicious-Indian-Non-Veg-Starters.jpg" alt="Non-veg fish and chicken pakora" />
          <h4>Non-veg fish and chicken pakora - ₹320</h4>
          <button className="vv"onClick={() => addToCart('Non-veg fish and chicken pakora', 320)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Non-veg fish and chicken pakora')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Non-veg fish and chicken pakora')}>Remove All</button>
        </li>
      </ul>

      <h3>Moghulai MainCourse</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://ministryofcurry.com/wp-content/uploads/2019/02/Paneer-Vegetable-Biryani-2.jpg" alt="veg paneer biryani" />
          <h4>veg paneer biryani - ₹180</h4>
          <button className="vv"onClick={() => addToCart('veg paneer biryani', 180)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('veg paneer biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('veg paneer biryani')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/07/prawn-biryani.jpg" alt="veg prawn biryani" />
         <h4> veg prawn biryani - ₹199</h4>
          <button className="vv"onClick={() => addToCart('veg prawn biryani', 190)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('veg prawn biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('veg prawn biryani')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" alt="chicken biryani" />
          <h4>chicken biryani - ₹220</h4>
          <button className="vv"onClick={() => addToCart('chicken biryani', 220)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('chicken biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('chicken biryani')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp" alt="Mutton biryani" />
         <h4> Mutton biryani - ₹320</h4>
          <button className="vv"onClick={() => addToCart('Mutton biryani', 320)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Mutton biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Mutton biryani')}>Remove All</button>
        </li>
      </ul>
      <h3>Moghulai Breads</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg" alt="Garlic bread" />
         <h4> Garlic bread - ₹150</h4>
          <button className="vv"onClick={() => addToCart('Garlic bread', 150)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Garlic bread')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Garlic bread')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg" alt="veg sandwich" />
         <h4> veg sandwich - ₹190</h4>
          <button className="vv"onClick={() => addToCart('veg sandwich', 190)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('veg sandwich')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('veg sandwich')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/mayo-chicken-sandwich-recipe.jpg" alt="chicken sandwich" />
         <h4> chicken sandwich - ₹220</h4>
          <button className="vv"onClick={() => addToCart('chicken sandwich', 220)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('chicken sandwich')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('chicken sandwich')}>Remove All</button>
        </li>
      </ul>
      <h3>Moghulai Desserts</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://www.allrecipes.com/thmb/Huh-I63aYc_zZ0NbLECEpFD0BcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/60564-StrawberryCakeFromScratch-ddfms-4X3-0291-1-cd8254e28ea14112b5fc49e25cd08ff6.jpg" alt="Strawberry cake" />
          <h4>Strawberry cake - ₹120</h4>
          <button className="vv"onClick={() => addToCart('Strawberry cake', 120)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Strawberry cake')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Strawberry cake')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butterscotch-ice-cream-recipe.jpg" alt="Butterscotch ice cream" />
          <h4>Butterscotch ice cream - ₹199</h4>
          <button className="vv"onClick={() => addToCart('Butterscotch ice cream', 199)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Butterscotch ice cream')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Butterscotch ice cream')}>Remove All</button>
        </li>
      </ul>
      <h3>Moghulai Drinks</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://5.imimg.com/data5/UD/AN/IA/SELLER-28406699/1-25l-sprite-cold-drink.jpg" alt="Sprite" />
          <h4>Sprite - ₹80</h4>
          <button className="vv"onClick={() => addToCart('Sprite', 80)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Sprite')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Sprite')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://5.imimg.com/data5/SELLER/Default/2023/3/UR/GE/RS/185952101/whatsapp-image-2023-03-11-at-1-48-21-pm.jpeg" alt="Thumbs up" />
          <h4>Thumbs up - ₹90</h4>
          <button className="vv"onClick={() => addToCart('Thumbs up', 90)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Thumbs up')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Thumbs up')}>Remove All</button>
        </li>
      </ul>



      {/* Display selected items in the cart */}
      <div className='vv4'>
  <h3>Cart</h3>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>₹{item.price}</td>
          <td>{item.quantity}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};


export default V_moghulai;
