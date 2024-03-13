import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MS_chineasemenu.css';

const MS_chineasemenu = () => {
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
    <div className="chinease-menu-container-ms">
      <Link to={'/Restaurantmenu'}>
      <button type='submit'>Back</button>
      </Link>
      <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
      <h1 align="center">Chinease Breakfast</h1>
      <div class="row">
            
               <div class="column"> 
              <img
                className="ms11"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEZnMX3wa4bN8MJJqNeR3TURTAkUry9FOcw&usqp=CAU"
                alt="Congee"
              /><br></br>
              
            <b>Item: </b><i>Congee</i><br></br>
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
                className="ms11"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpR1kMn-0oz5Pez3ks_KCrEXusMw4lWKWPQ&usqp=CAU"
                alt="Youtiao"
              /><br></br>
             <b>Item: </b><i>Youtiao</i><br></br>
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
                className="ms11"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjdLbLvajovCL6mWWwrA9oULxNbTuybWlkg&usqp=CAU"
                alt="Dim Sum"
              /><br></br>
           <b>Item: </b> <i>Dim Sum</i><br></br>
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
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link> <br></br>
              </div> <br></br>
              
              <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>

      <h1 align="center">Chinease Curries</h1>
            <div class="row"> 
              <div class="column">
              <img
                className="ms11"
                src="https://vikalinka.com/wp-content/uploads/2019/02/Chinese-chicken-curry-7-Edit.jpg"
                alt="Chicken Curry"
              /><br></br>
          <b>Item: </b><i>Chicken Curry</i><br></br>
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
                className="ms11"
                src="https://img-global.cpcdn.com/recipes/5d2cd5847f6fc5f5/1200x630cq70/photo.jpg"
                alt="Beef Curry"
              /><br></br>
           <b>Item: </b><i> Beef Curry</i><br></br>
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
                className="ms11"
                src="https://uploads-ssl.webflow.com/5e24a10fb966d92fb58e187c/63c7e896d1fd196fa19a46ea_IMG_3792.jpg"
                alt="Mushroom Curry"
              /><br></br>
              <b>Item: </b><i>Mushroom Curry</i><br></br>
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
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
        </div><br></br>
        <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
      <h1 align="center">Chinease Soups</h1>
            <div class="row">
              <div class="column">
              <img
                className="ms11"
                src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Veg-Manchow-Soup-scaled.jpeg?v=1621618246"
                alt="Veg Manchow Soup"
              /><br></br>
           <b>Item: </b><i>Veg Manchow Soup</i><br></br>
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
                className="ms11"
                src="https://myfoodstory.com/wp-content/uploads/2021/02/Instant-Pot-Chicken-Thukpa-2.jpg"
                alt="Chicken Thukpa Soup"
              /><br></br>
           <b>Item: </b><i>Chicken Thupka Soup</i><br></br>
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
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
       </div><br></br>
       <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Chinease Starters</h1>
      <div class="row">
        <div class="column">
              <img
                className="ms11"
                src="https://www.yummytummyaarthi.com/wp-content/uploads/2023/06/chilli-paneer-1.jpeg"
                alt="Chilli Paneer Dry"
              /><br></br>
            <b>Item: </b><i>Chilli Paneer Dry</i><br></br>
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
                className="ms11"
                src="https://www.kannammacooks.com/wp-content/uploads/chicken-manchurian-recipe-dry-restaurant-style-1.jpg"
                alt="Chicken Manchurian Dry"
              /><br></br>
            <b>Item: </b><i>Chicken Manchurian Dry</i><br></br>
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
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link>
       </div><br></br>
       <div className='cardms1' style={{width:"32cm",height:"20cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Chinease MainCourse</h1>
        <div class="row">
     <div class="column">
              <img
                className="ms11"
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg"
                alt="Veg Haka noodle"
              /><br></br>
            <b>Item: </b><i>Veg Haka noodle</i><br></br>
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
                className="ms11"
                src="https://cloudinary-cdn.whisk.com/image/upload/g_auto,c_fill,q_60,f_auto,h_600,w_800/v1632477954/recipe/d166da67eb241222ab1cee245c6615c0.jpg"
                alt="Chicken Chilli Garlic Noodle"
              /><br></br>
            <b>Item: </b><i>Chicken Chilli Garlic Noodle</i><br></br>
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
                className="ms11"
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/12/jeera-rice-recipe-500x500.jpg"
                alt="Jeera Rice"
              /><br></br>
           <b>Item: </b><i>Jeera Rice</i><br></br>
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
                className="ms11"
                src="https://cdn.tarladalal.com/members/9306/big/big_missi_rotis-7385.jpg"
                alt="Missi Roti"
              /><br></br>
           <b>Item: </b><i>Missi Roti</i><br></br>
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
                className="ms11"
                src="https://i.ndtvimg.com/i/2017-09/khameeri-roti_650x400_61504593610.jpg"
                alt="Khameri Roti"
              /><br></br>
            <b>Item: </b><i>Khameri Roti</i><br></br>
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
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
       </div><br></br>
       <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Chinease Desserts</h1>
        <div class="row">
      <div class="column">
              <img
                className="ms11"
                src="https://cdn.kuali.com/wp-content/uploads/2021/09/21210309/840x560-Soy-Pudding.jpg"
                alt="Soy Milk Pudding"
              /><br></br>
            <b>Item: </b><i>Soy Milk Pudding</i><br></br>
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
                className="ms11"
                src="https://www.allrecipes.com/thmb/dWCWPR2DRClKJCxdGtdOKT_b_OY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17036-pumpkin-pancakes-DDMFS-4x3-4d3a11ea4d354fd29f1e2beab40e76cd.jpg"
                alt="pumpkin pancakes"
              /><br></br>
            <b>Item: </b><i>Pumpkin Pancakes</i><br></br>
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
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link></div>
        <br></br>
</div><dr></dr>
<div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Chinease Drinks</h1>
        <div class="row">
          <div class="column">
              <img
                className="ms11"
                src="https://images.slurrp.com/prodarticles/jjc62i6zuxc.webp"
                alt="Baijiu"
              /><br></br>
           <b>Item: </b><i>Baijiu</i><br></br>
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
                className="ms11"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Rice_Wine.jpg/1200px-Rice_Wine.jpg"
                alt="Mijiu"
              /><br></br>
           <b>Item: </b><i>Mijju</i><br></br>
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
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link>
        
    </div>
    </div>
    </div>
    </>
  );
};

export default MS_chineasemenu;