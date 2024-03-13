import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MS_moghulaimenu.css';

const MS_moghulaimenu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemName, itemPrice) => {
    const existingItemIndex = cart.findIndex((item) => item.name === itemName);

    if (existingItemIndex !== -1) {
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
      removeFromCart(itemName);
    }
  };

  return (
    <>
    <div className='ms40'>
    <div className="Moghulai-menu-container-ms">
      <Link to={'/Restaurant'}>
      <button type='submit'>Back</button>
      </Link>
      <h1 align="center">Moghulai Breakfast</h1>
      <div class="row">
            
               <div class="column"> 
              <img
                className="ma55"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2ExoO9ArN3mJ13eP-4AoLHhmgYrDGXCL4Q&usqp=CAU"
                alt="Paratha"
              /><br></br>
              
            <b>Item: </b><i>paratha</i><br></br>
             <b>Price: </b> <i>₹40</i><br></br>
             
           
              
              <Link to={'/UpdateBreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Congee')}
                >
                  Update
                </button>
              </Link>
              
          
          </div>
          <br></br>
          <div class="column">
              <img
                className="ma55"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNrE__S_7im2y2rMH4QX8Nam671R99PMi_A&usqp=CAU"
                alt="Lassi"
              /><br></br>
             <b>Item: </b><i>Lassi</i><br></br>
            <b>Price: </b><i>₹30</i><br></br>
             
              <Link to={'/UpdateBreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Youtiao')}
                >
                  Update
                </button>
              </Link>
             
              </div>
              <br></br>
            <div class="column">
              <img
                className="ma55"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8zOW7QPCdbNxMWnhI-Ap8ooYX6QhTWGuDQ&usqp=CAU"
                alt="Samosa"
              /><br></br>
           <b>Item: </b> <i>Samosa</i><br></br>
            <b>Price: </b><i>₹50</i><br></br>
           
             
              <Link to={'/UpdateBreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Dim Sum')}
                >
                  Update
                </button>
              </Link>
              </div>
              <br></br> </div> 
            
          <Link to={'/AddBreakfast'}>
                <button className="msadd" onClick={() => addToCart()}>
                  Add
                </button>
              </Link> <br></br>
              
        

      <h1 align="center">Moghulai Curries</h1>
            <div class="row"> 
              <div class="column">
              <img
                className="ma55"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJcLvJyDkhiyJqH0ihzhd9L4ZlmK2ucqG9Q&usqp=CAU"
                alt="Palak paneer"
              /><br></br>
          <b>Item: </b><i>Palak paneer</i><br></br>
           <b>Price: </b><i>₹150</i><br></br>
            

              <Link to={'/UpdateCurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chicken Curry')}
                >
                  Update
                </button>
              </Link>
              
           </div>
           <br></br>
           <div class="column">
            
              <img
                className="ma55"
                src="https://www.yummytummyaarthi.com/wp-content/uploads/2016/07/1-53.jpg"
                alt="Mutton Curry"
              /><br></br>
           <b>Item: </b><i> Mutton Curry</i><br></br>
            <b>Price: </b><i>₹120</i><br></br>
        

              <Link to={'/UpdateCurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Beef Curry')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
              <div class="column">
           
              <img
                className="ma55"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBLx3E5UaSkrncHYB8Qlc5HoTL5xwT90lGQ&usqp=CAU"
                alt="Channa Massala"
              /><br></br>
              <b>Item: </b><i>Channa Massala</i><br></br>
              <b>Price: </b><i>₹40</i><br></br>
             
              <Link to={'/UpdateCurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Mushroom Curry')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
              </div> 
          <Link to={'/AddCurries'}>
                <button className="msadd" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
        
     
      <h1 align="center">Moghulai Soups</h1>
            <div class="row">
              <div class="column">
              <img
                className="ma55"
                src="https://www.thefullhelping.com/wp-content/uploads/2016/03/green-soup-6.jpg"
                alt="Green Soup"
              /><br></br>
           <b>Item: </b><i>Green soup</i><br></br>
              <b>Price: </b><i>₹199</i><br></br>
           
              
              <Link to={'/UpdateSoups'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Veg Manchow Soup')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
              <div class="column">
              <img
                className="ma55"
                src="https://content.jwplatform.com/thumbs/T8sDcWqi-720.jpg"
                alt="Dal Dhokli Soup"
              /><br></br>
           <b>Item: </b><i>Dal Dhokli Soup</i><br></br>
              <b>Price: </b><i>₹230</i><br></br>

              <Link to={'/UpdateSoups'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chicken Thukpa Soup')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
              </div> 
          <Link to={'/AddSoups'}>
                <button className="msadd" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
       

        <h1 align="center">Moghulai Starters</h1>
      <div class="row">
        <div class="column">
              <img
                className="ma55"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3F29sED9y-KV2fYVXdHZnSlHe3xheJqw6G458dmYGA&s"
                alt="Channa Chat"
              /><br></br>
            <b>Item: </b><i>Channa chat</i><br></br>
              <b>Price: </b><i>₹240</i><br></br>
             
              <Link to={'/UpdateStarters'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chilli Paneer Dry')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
           <div class="column">
              <img
                className="ma55"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkyqt45_IS_iX5J0q02MmpGVOZA7fbXvr_mj9uen1KA&s"
                alt="Cheese Chilli dry"
              /><br></br>
            <b>Item: </b><i>Cheese chilli dry</i><br></br>
              <b>Price: </b><i>₹299</i><br></br>
             
              <Link to={'/UpdateStarters'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chicken Manchurian Dry')}
                >
                  Update
                </button>
              </Link>
             
           </div><br></br>
           </div> 
          <Link to={'/AddStarters'}>
                <button className="msadd" onClick={() => addToCart()}>
                  Add
                </button>
              </Link>
       

        <h1 align="center">Moghulai MainCourse</h1>
        <div class="row">
     <div class="column">
              <img
                className="ma55"
                src="https://api.vip.foodnetwork.ca/wp-content/uploads/2022/02/hakka-fried-rice-feat.jpg"
                alt="Hakka Saka Chicken Rice"
              /><br></br>
            <b>Item: </b><i>Hakka Saka Chicken Rice</i><br></br>
              <b>Price: </b><i>₹180</i><br></br>
             
              <Link to={'/UpdateMainCourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Veg Haka noodle')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
            <div class="column">
              <img
                className="ma55"
                src="https://i.ytimg.com/vi/t0yLXcWy1a0/hqdefault.jpg"
                alt="Fish Parda Biryani"
              /><br></br>
            <b>Item: </b><i>Fish Parda Biryani</i><br></br>
              <b>Price: </b><i>₹220</i><br></br>

              <Link to={'/UpdateMainCourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chicken Chilli Garlic Noodle')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            <div class="column">
              <img
                className="ma55"
                src="https://cdn.tarladalal.com/members/9306/big/big_egg_biryani_recipe-16725.jpg"
                alt="Egg iryani"
              /><br></br>
           <b>Item: </b><i>Egg Biryani</i><br></br>
              <b>Price: </b><i>₹320</i><br></br>
              
              <Link to={'/UpdateMainCourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Jeera Rice')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            <div class="column">
              <img
                className="ma55"
                src="https://img.freepik.com/free-photo/pakistani-food-wooden-board-top-view_23-2148825093.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais"
                alt="Butter Naan"
              /><br></br>
           <b>Item: </b><i>Butter Naan</i><br></br>
              <b>Price: </b><i>₹140</i><br></br>
              <Link to={'/UpdateMainCourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Missi Roti')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
          <div class="column">
              <img
                className="ma55"
                src="https://img-global.cpcdn.com/recipes/f052eef106225186/680x482cq70/vegetable-parda-biryani-recipe-main-photo.jpg"
                alt="Veg Parda biryani"
              /><br></br>
            <b>Item: </b><i>veg parda biryani</i><br></br>
              <b>Price: </b><i>₹220</i><br></br>

              <Link to={'/UpdateMainCourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Khameri Roti')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
              </div> 
          <Link to={'/AddMainCourse'}>
                <button className="msadd" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
       

        <h1 align="center">Moghulai Desserts</h1>
        <div class="row">
      <div class="column">
              <img
                className="ma55"
                src="https://5.imimg.com/data5/VM/WO/FG/SELLER-1442638/mother-dairy-now-in-guwahati-1fda3a9cbd-500x500.jpg"
                alt="Strawberry Crush"
              /><br></br>
            <b>Item: </b><i>Strawberry Crush</i><br></br>
              <b>Price: </b><i>₹170</i><br></br>
              <Link to={'/UpdateDesserts'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Soy Milk Pudding')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            <div>
              <img
                className="ma55"
                src="https://www.shutterstock.com/image-photo/cranberry-drink-homemade-lemonade-sangria-260nw-436430755.jpg"
                alt="Fruit Punch"
              /><br></br>
            <b>Item: </b><i>Fruit Punch</i><br></br>
              <b>Price: </b><i>₹199</i><br></br>
              <Link to={'/UpdateDesserts'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('pumpkin pancakes')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
           
          <Link to={'/AddDesserts'}>
                <button className="msadd" onClick={() => addToCart()}>
                  Add
                </button>
              </Link></div>
        <br></br>

        <h1 align="center">Moghulai Drinks</h1>
        <div class="row">
          <div class="column">
              <img
                className="ma55"
                src="https://media.istockphoto.com/id/458716829/photo/red-bull.jpg?s=612x612&w=0&k=20&c=0CsBVsXdrA7PV1gkUF4VHBkPGh4Vtyq9uNJAMTQObBA="
                alt="Red Bull"
              /><br></br>
           <b>Item: </b><i>Red Bull</i><br></br>
              <b>Price: </b><i>₹90</i><br></br>
              
              <Link to={'/UpdateDrinkss'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Baijiu')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            
          <div class="column">
            
              <img
                className="ma55"
                src="https://m.media-amazon.com/images/I/71U6vPtGfML.jpg"
                alt="Real Juice"
              /><br></br>
           <b>Item: </b><i>Real Juice</i><br></br>
              <b>Price: </b><i>₹120</i><br></br>
              <Link to={'/UpdateDrinks'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Mijiu')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
              </div> 
          <Link to={'/AddDrinks'}>
                <button className="msadd" onClick={() => addToCart()}>
                  Add
                </button>
              </Link>
        
    </div>
    </div>
    </>
  );
};

export default MS_moghulaimenu;