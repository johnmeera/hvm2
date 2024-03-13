// IndianMenu.js
import React, { useState } from 'react';
import './v_indianmenu.css';
import { Link } from 'react-router-dom';

const V_indian = () => {
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
    <>
    <Link to={'/Food'}>
    <button type='submit' style={{marginLeft:"3cm",marginTop:"1cm"}}>Back</button>
    </Link>
    <div className="indian-menu-container" style={{width:"18cm",marginLeft:"12cm"}}>
      <h3>Indian Breakfast</h3>
      <ul className='vv1'>
        <li className='vv2'>
          <img  className="vv3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcIUFfycngCH8w4TG14V2ZlbVm3faoAjcyg&usqp=CAU" alt="Dosa" />
          <h4> Dosa - ₹50</h4>
          <button  className="vv" onClick={() => addToCart('Dosa', 50)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Dosa')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Dosa')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqM7L8CCJ2BqmGgVligvrX-hCJ498uetPnw&usqp=CAU" alt="Idli" />
          <h4> Idli - ₹30</h4>
          <button className="vv"onClick={() => addToCart('Idli', 30)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Idli')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Idli')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpQDdYpbylHunAniQhb_loWOMQUw2je215w&usqp=CAU" alt="Upma" />
          <h4> Upma - ₹40</h4>
          <button className="vv"onClick={() => addToCart('Upma', 40)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Upma')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Upma')}>Remove All</button>
        </li>
      </ul>

      <h3>Indian Lunch</h3>
      <ul className="vv1">
        <li className="vv2">
          <img className="vv3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMGjtzF__e2A6qAIOYiM25908h9G9grUxSA&usqp=CAU" alt="Butter Chicken" />
          <h4>Butter Chicken - ₹150</h4>
          <button className="vv"onClick={() => addToCart('Butter Chicken', 150)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Butter Chicken')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Butter Chicken')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XnjTtfIyL_iozYtgdy0jlqiqi3LL8fiyqA&usqp=CAU" alt="Paneer Tikka Masala" />
          <h4>Paneer Tikka Masala - ₹120</h4>
          <button className="vv"onClick={() => addToCart('Paneer Tikka Masala', 120)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Paneer Tikka Masala')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Paneer Tikka Masala')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBLx3E5UaSkrncHYB8Qlc5HoTL5xwT90lGQ&usqp=CAU" alt="Rajma Chawal" />
          <h4> Rajma Chawal - ₹100</h4>
          <button className="vv"onClick={() => addToCart('Rajma Chawal', 100)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Rajma Chawal')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Rajma Chawal')}>Remove All</button>
        </li>
      </ul>

      <h3>Indian Dinner</h3>
      <ul className="vv1">
        <li className="vv2">
          <img className="vv3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMV3iLuHmGYCMDTw1l61hBNOOxab_2vi1CQQ&usqp=CAU" alt="Biryani" />
          <h4> Biryani - ₹180</h4>
          <button className="vv"onClick={() => addToCart('Biryani', 180)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Biryani')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQF_fHkXg6gx2XE9YbZWWFIsXg9kAF6dCLg&usqp=CAU" alt="Dal Makhani" />
          <h4>Dal Makhani - ₹90</h4>
          <button className="vv"onClick={() => addToCart('Dal Makhani', 90)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Dal Makhani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Dal Makhani')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugZql8ofWjC6OyaL2RnwBf9WDgur0gw206uWQLkAuy76lRh8rXMg5Ut8O8Nqwoy_ZrUQ&usqp=CAU" alt="Roti" />
          <h4>Roti - ₹10</h4>
          <button className="vv" onClick={() => addToCart('Roti', 10)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Roti')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Roti')}>Remove All</button>
        </li>
      </ul>
      <h3>Indian Soups</h3>
      <ul className="vv1">
        <li className="vv2">
          <img  className="vv3"src="https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg" alt="Tomato Soup" />
          <h4>Tomato Soup - ₹199</h4>
          <button className="vv"onClick={() => addToCart('Tomato Soup', 199)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Tomato Soup')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Tomato Soup')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/sweet-corn-soup.jpg" alt="Corn Soup" />
          <h4> Corn Soup - ₹220</h4>
          <button className="vv"onClick={() => addToCart('Corn Soup', 220)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Corn Soup')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Corn Soup')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.myspicykitchen.net/wp-content/uploads/2022/10/Chicken-Clear-Soup-SQ.jpg" alt="Chicken Soup" />
          <h4>Chicken Soup - ₹180</h4>
          <button className="vv"onClick={() => addToCart('Chicken Soup', 180)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Chicken Soup')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Chicken Soup')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://theindianclaypot.com/content/images/wp-content/uploads/2019/02/mutton-soup.jpg" alt="Mutton Soup" />
          <h4>Mutton Soup - ₹230</h4>
          <button className="vv"onClick={() => addToCart('Mutton Soup', 230)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Mutton Soup')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Mutton Soup')}>Remove All</button>
        </li>
      </ul>

      <h3>Indian Starters</h3>
      <ul className="vv1">
        <li className="vv2">
          <img className="vv3"src="https://carveyourcraving.com/wp-content/uploads/2016/01/hariyalikebab.jpg" alt="fry veg hariyali kebabs" />
          <h4> fry veg hariyali kebabs - ₹210</h4>
          <button className="vv"onClick={() => addToCart('fry veg hariyali kebabs', 210)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('fry veg hariyali kebabs')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('fry veg hariyali kebabs')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg" alt="veg paneer tikka" />
          <h4>veg paneer tikka - ₹240</h4>
          <button className="vv"onClick={() => addToCart('veg paneer tikka', 240)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('veg paneer tikka')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('veg paneer tikka')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://sulthansbiriyani.in/wp-content/uploads/2021/04/chicken-spring-rolls-Delicious-Indian-Non-Veg-Starters.jpg" alt="Non-veg chicken spring rolls" />
          <h4>Non-veg chicken spring rolls - ₹299</h4>
          <button className="vv"onClick={() => addToCart('Non-veg chicken spring rolls', 299)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Non-veg chicken spring rolls')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Non-veg chicken spring rolls')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://sulthansbiriyani.in/wp-content/uploads/2021/04/Fish-and-chicken-pakora-Delicious-Indian-Non-Veg-Starters.jpg" alt="Non-veg fish and chicken pakora" />
          <h4>Non-veg fish and chicken pakora - ₹320</h4>
          <button className="vv"onClick={() => addToCart('Non-veg fish and chicken pakora', 320)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Non-veg fish and chicken pakora')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Non-veg fish and chicken pakora')}>Remove All</button>
        </li>
      </ul>

      <h3>Indian MainCourse</h3>
      <ul className="vv1">
        <li className="vv2">
          <img className="vv3"src="https://ministryofcurry.com/wp-content/uploads/2019/02/Paneer-Vegetable-Biryani-2.jpg" alt="veg paneer biryani" />
          <h4>veg paneer biryani - ₹180</h4>
          <button className="vv"onClick={() => addToCart('veg paneer biryani', 180)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('veg paneer biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('veg paneer biryani')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/07/prawn-biryani.jpg" alt="veg prawn biryani" />
         <h4> veg prawn biryani - ₹199</h4>
          <button className="vv"onClick={() => addToCart('veg prawn biryani', 190)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('veg prawn biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('veg prawn biryani')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" alt="chicken biryani" />
          <h4>chicken biryani - ₹220</h4>
          <button className="vv"onClick={() => addToCart('chicken biryani', 220)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('chicken biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('chicken biryani')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp" alt="Mutton biryani" />
         <h4> Mutton biryani - ₹320</h4>
          <button className="vv"onClick={() => addToCart('Mutton biryani', 320)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Mutton biryani')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Mutton biryani')}>Remove All</button>
        </li>
      </ul>
      <h3>Indian Breads</h3>
      <ul className="vv1">
        <li className="vv2">
          <img className="vv3"src="https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg" alt="Garlic bread" />
         <h4> Garlic bread - ₹150</h4>
          <button className="vv"onClick={() => addToCart('Garlic bread', 150)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Garlic bread')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Garlic bread')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg" alt="veg sandwich" />
         <h4> veg sandwich - ₹190</h4>
          <button className="vv"onClick={() => addToCart('veg sandwich', 190)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('veg sandwich')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('veg sandwich')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/mayo-chicken-sandwich-recipe.jpg" alt="chicken sandwich" />
         <h4> chicken sandwich - ₹220</h4>
          <button className="vv"onClick={() => addToCart('chicken sandwich', 220)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('chicken sandwich')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('chicken sandwich')}>Remove All</button>
        </li>
      </ul>
      <h3>Indian Desserts</h3>
      <ul className="vv1">
        <li className="vv2">
          <img className="vv3"src="https://www.allrecipes.com/thmb/Huh-I63aYc_zZ0NbLECEpFD0BcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/60564-StrawberryCakeFromScratch-ddfms-4X3-0291-1-cd8254e28ea14112b5fc49e25cd08ff6.jpg" alt="Strawberry cake" />
          <h4>Strawberry cake - ₹120</h4>
          <button className="vv"onClick={() => addToCart('Strawberry cake', 120)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Strawberry cake')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Strawberry cake')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butterscotch-ice-cream-recipe.jpg" alt="Butterscotch ice cream" />
          <h4>Butterscotch ice cream - ₹199</h4>
          <button className="vv"onClick={() => addToCart('Butterscotch ice cream', 199)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Butterscotch ice cream')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Butterscotch ice cream')}>Remove All</button>
        </li>
      </ul>
      <h3>Indian Drinks</h3>
      <ul className="vv1">
        <li className="vv2">
          <img className="vv3"src="https://5.imimg.com/data5/UD/AN/IA/SELLER-28406699/1-25l-sprite-cold-drink.jpg" alt="Sprite" />
          <h4>Sprite - ₹80</h4>
          <button className="vv"onClick={() => addToCart('Sprite', 80)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Sprite')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Sprite')}>Remove All</button>
        </li>
        <li className="vv2">
          <img className="vv3"src="https://5.imimg.com/data5/SELLER/Default/2023/3/UR/GE/RS/185952101/whatsapp-image-2023-03-11-at-1-48-21-pm.jpeg" alt="Thumbs up" />
          <h4>Thumbs up - ₹90</h4>
          <button className="vv"onClick={() => addToCart('Thumbs up', 90)}>Add to Cart</button>
          <button className="vv"onClick={() => decrementQuantity('Thumbs up')}>Remove One</button>
          <button className="vv"onClick={() => removeFromCart('Thumbs up')}>Remove All</button>
        </li>
      </ul>




      <div className="vv4">
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
    <Link to={'/Food'}>
      <button type='submit' style={{marginRight:"-10cm",marginTop:"-25cm"}}>Back</button>
    </Link>
    </>
  );
};

export default V_indian;
