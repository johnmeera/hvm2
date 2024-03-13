import React, { useState } from 'react';
import './v_continentalMenu.css';

const V_continental = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemName, itemPrice) => {
    const existingItemIndex = cart.findIndex((item) => item.nam=== itemName);

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
    <>
    <div className="continental-menu-container">
      <h3>Continental Breakfast</h3>
      <ul className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYekkoR4Y508aYt-28Q4enmppjPCqGnSCOA&usqp=CAU" alt="Croissant" />
          <h4>Croissant - ₹60</h4>
          <button  className="vv" onClick={() => addToCart('Croissant', 60)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Croissant')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Croissant')}>Remove All</button>
        </li>
        <li  className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbnh5a6QOXaIR6FTPQ_XkvuwmZbwvTmuiqQ&usqp=CAU" alt="Omelette" />
          <h4> Omelette - ₹40</h4>
          <button  className="vv" onClick={() => addToCart('Omelette', 40)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Omelette')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Omelette')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcrT6A_Kh9KOZ7izHYxYdP6zEhucwy2V4_w&usqp=CAU" alt="Yogurt Parfait" />
          <h4>Yogurt Parfait - ₹50</h4>
          <button  className="vv" onClick={() => addToCart('Yogurt Parfait', 50)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Yogurt Parfait')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Yogurt Parfait')}>Remove All</button>
        </li>
        {/* Add more breakfast items as needed */}
      </ul>

      <h3>Continental Lunch</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNge5-dgiqPGd1d2K6a4LkRpg1ECUIUyCOzg&usqp=CAU" alt="Caesar Salad" />
          <h4>Caesar Salad - ₹80</h4>
          <button  className="vv" onClick={() => addToCart('Caesar Salad', 80)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Caesar Salad')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Caesar Salad')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAE3jftfXydrwZAyfx9xLbhMpQJqjhfMR7A&usqp=CAU" alt="Pasta Carbonara" />
          <h4>Pasta Carbonara - ₹90</h4>
          <button  className="vv" onClick={() => addToCart('Pasta Carbonara', 90)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Pasta Carbonara')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Pasta Carbonara')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBMNaH849NqBsKgvm3WOc5ZoZjpSB3_fXUQ&usqp=CAU" alt="Quiche Lorraine" />
          <h4>Quiche Lorraine - ₹70</h4>
          <button  className="vv" onClick={() => addToCart('Quiche Lorraine', 70)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Quiche Lorraine')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Quiche Lorraine')}>Remove All</button>
        </li>
        {/* Add more lunch items as needed */}
      </ul>

      <h3>Continental Dinner</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7nKfzpVEjEIn1wfd733fDLXJHToC4AcF-A&usqp=CAU" alt="Steak with Mushroom Sauce" />
          <h4>Steak with Mushroom Sauce - ₹120</h4>
          <button  className="vv" onClick={() => addToCart('Steak with Mushroom Sauce', 120)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Steak with Mushroom Sauce')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Steak with Mushroom Sauce')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGK3SangctPD-XDtODd9q5yw8BHkOmDFJB-A&usqp=CAU" alt="Salmon Risotto" />
          <h4>Salmon Risotto - ₹110</h4>
          <button  className="vv" onClick={() => addToCart('Salmon Risotto', 110)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Salmon Risotto')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Salmon Risotto')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgnkzI5FlSj4eEFJYpsL_7klk-xRlunFrjQ&usqp=CAU" alt="Ratatouille" />
          <h4>Ratatouille - ₹100</h4>
          <button  className="vv" onClick={() => addToCart('Ratatouille', 100)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Ratatouille')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Ratatouille')}>Remove All</button>
        </li>
        {/* Add more dinner items as needed */}
      </ul>
      <h3>Continental Soups</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg" alt="Tomato Soup" />
          <h4>Tomato Soup - ₹199</h4>
          <button  className="vv" onClick={() => addToCart('Tomato Soup', 199)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Tomato Soup')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Tomato Soup')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/sweet-corn-soup.jpg" alt="Corn Soup" />
          <h4> Corn Soup - ₹220</h4>
          <button  className="vv" onClick={() => addToCart('Corn Soup', 220)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Corn Soup')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Corn Soup')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.myspicykitchen.net/wp-content/uploads/2022/10/Chicken-Clear-Soup-SQ.jpg" alt="Chicken Soup" />
          <h4>Chicken Soup - ₹180</h4>
          <button  className="vv" onClick={() => addToCart('Chicken Soup', 180)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Chicken Soup')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Chicken Soup')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://theindianclaypot.com/content/images/wp-content/uploads/2019/02/mutton-soup.jpg" alt="Mutton Soup" />
          <h4>Mutton Soup - ₹230</h4>
          <button  className="vv" onClick={() => addToCart('Mutton Soup', 230)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Mutton Soup')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Mutton Soup')}>Remove All</button>
        </li>
      </ul>

      <h3>Continental Starters</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://carveyourcraving.com/wp-content/uploads/2016/01/hariyalikebab.jpg" alt="fry veg hariyali kebabs" />
          <h4> fry veg hariyali kebabs - ₹210</h4>
          <button  className="vv" onClick={() => addToCart('fry veg hariyali kebabs', 210)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('fry veg hariyali kebabs')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('fry veg hariyali kebabs')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg" alt="veg paneer tikka" />
          <h4>veg paneer tikka - ₹240</h4>
          <button  className="vv" onClick={() => addToCart('veg paneer tikka', 240)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('veg paneer tikka')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('veg paneer tikka')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://sulthansbiriyani.in/wp-content/uploads/2021/04/chicken-spring-rolls-Delicious-Indian-Non-Veg-Starters.jpg" alt="Non-veg chicken spring rolls" />
          <h4>Non-veg chicken spring rolls - ₹299</h4>
          <button  className="vv" onClick={() => addToCart('Non-veg chicken spring rolls', 299)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Non-veg chicken spring rolls')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Non-veg chicken spring rolls')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://sulthansbiriyani.in/wp-content/uploads/2021/04/Fish-and-chicken-pakora-Delicious-Indian-Non-Veg-Starters.jpg" alt="Non-veg fish and chicken pakora" />
          <h4>Non-veg fish and chicken pakora - ₹320</h4>
          <button  className="vv" onClick={() => addToCart('Non-veg fish and chicken pakora', 320)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Non-veg fish and chicken pakora')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Non-veg fish and chicken pakora')}>Remove All</button>
        </li>
      </ul>

      <h3>Continental MainCourse</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://ministryofcurry.com/wp-content/uploads/2019/02/Paneer-Vegetable-Biryani-2.jpg" alt="veg paneer biryani" />
          <h4>veg paneer biryani - ₹180</h4>
          <button  className="vv" onClick={() => addToCart('veg paneer biryani', 180)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('veg paneer biryani')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('veg paneer biryani')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/07/prawn-biryani.jpg" alt="veg prawn biryani" />
         <h4> veg prawn biryani - ₹199</h4>
          <button  className="vv" onClick={() => addToCart('veg prawn biryani', 190)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('veg prawn biryani')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('veg prawn biryani')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" alt="chicken biryani" />
          <h4>chicken biryani - ₹220</h4>
          <button  className="vv" onClick={() => addToCart('chicken biryani', 220)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('chicken biryani')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('chicken biryani')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp" alt="Mutton biryani" />
         <h4> Mutton biryani - ₹320</h4>
          <button  className="vv" onClick={() => addToCart('Mutton biryani', 320)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Mutton biryani')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Mutton biryani')}>Remove All</button>
        </li>
      </ul>
      <h3>Continental Breads</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg" alt="Garlic bread" />
         <h4> Garlic bread - ₹150</h4>
          <button  className="vv" onClick={() => addToCart('Garlic bread', 150)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Garlic bread')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Garlic bread')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg" alt="veg sandwich" />
         <h4> veg sandwich - ₹190</h4>
          <button  className="vv" onClick={() => addToCart('veg sandwich', 190)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('veg sandwich')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('veg sandwich')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/mayo-chicken-sandwich-recipe.jpg" alt="chicken sandwich" />
         <h4> chicken sandwich - ₹220</h4>
          <button  className="vv" onClick={() => addToCart('chicken sandwich', 220)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('chicken sandwich')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('chicken sandwich')}>Remove All</button>
        </li>
      </ul>
      <h3>Continental Desserts</h3>
      <ul  className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://www.allrecipes.com/thmb/Huh-I63aYc_zZ0NbLECEpFD0BcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/60564-StrawberryCakeFromScratch-ddfms-4X3-0291-1-cd8254e28ea14112b5fc49e25cd08ff6.jpg" alt="Strawberry cake" />
          <h4>Strawberry cake - ₹120</h4>
          <button  className="vv" onClick={() => addToCart('Strawberry cake', 120)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Strawberry cake')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Strawberry cake')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butterscotch-ice-cream-recipe.jpg" alt="Butterscotch ice cream" />
          <h4>Butterscotch ice cream - ₹199</h4>
          <button  className="vv" onClick={() => addToCart('Butterscotch ice cream', 199)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Butterscotch ice cream')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Butterscotch ice cream')}>Remove All</button>
        </li>
      </ul>
      <h3>Continental Drinks</h3>
      <ul>
        <li className='vv2'>
          <img  className="vv3" src="https://5.imimg.com/data5/UD/AN/IA/SELLER-28406699/1-25l-sprite-cold-drink.jpg" alt="Sprite" />
          <h4>Sprite - ₹80</h4>
          <button  className="vv" onClick={() => addToCart('Sprite', 80)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Sprite')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Sprite')}>Remove All</button>
        </li>
        <li className='vv2'>
          <img  className="vv3" src="https://5.imimg.com/data5/SELLER/Default/2023/3/UR/GE/RS/185952101/whatsapp-image-2023-03-11-at-1-48-21-pm.jpeg" alt="Thumbs up" />
          <h4>Thumbs up - ₹90</h4>
          <button  className="vv" onClick={() => addToCart('Thumbs up', 90)}>Add to Cart</button>
          <button  className="vv" onClick={() => decrementQuantity('Thumbs up')}>Remove One</button>
          <button  className="vv" onClick={() => removeFromCart('Thumbs up')}>Remove All</button>
        </li>
      </ul>




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
    </>
  );
};
export default V_continental;
