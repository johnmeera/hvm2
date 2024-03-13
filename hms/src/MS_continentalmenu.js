import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MS_continentalmenu.css';

const MS_continentalmenu = () => {
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
      <h1 align="center">Continental Breakfast</h1>
      <div class="row">
      <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYekkoR4Y508aYt-28Q4enmppjPCqGnSCOA&usqp=CAU"
                alt="Croissant"
              /><br>
              </br>
             <b>Item: </b><i>Crossiant</i><br></br>
             <b>Price: </b> <i>₹60</i><br></br>
           
             
              <Link to={'/UpdateBreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Croissant')}
                >
                  Update
                </button>
              </Link>
             
            </div><br></br>
            <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbnh5a6QOXaIR6FTPQ_XkvuwmZbwvTmuiqQ&usqp=CAU"
                alt="Omelette "
              /><br></br>
              <b>Item: </b><i>Omelette</i><br></br>
             <b>Price: </b> <i>₹40</i><br></br>
           
              
              <Link to={'/UpdateBreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Omelette ')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
         
            <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcIUFfycngCH8w4TG14V2ZlbVm3faoAjcyg&usqp=CAU"
                alt="Yogurt Parfait"
              /><br></br>
              <b>Item: </b><i>Yogurt Parfait</i><br></br>
             <b>Price: </b> <i>₹50</i><br></br>
          
             
              <Link to={'/UpdateBreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Yogurt Parfait')}
                >
                  Update
                </button>
              </Link>
              </div></div><br></br>
             <Link to={'/AddBreakfast'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br></br>
              <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
      <h1 align="center">Continental Curries</h1>
      <div class="row">
            <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNge5-dgiqPGd1d2K6a4LkRpg1ECUIUyCOzg&usqp=CAU"
                alt="Caesar Salad"
              /><br></br>
            <b>Item: </b><i>Caesar Salad</i><br></br>
             <b>Price: </b> <i>₹80</i><br></br>

              <Link to={'/UpdateCurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Caesar Salad')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
            
            <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAE3jftfXydrwZAyfx9xLbhMpQJqjhfMR7A&usqp=CAU"
                alt="Pasta Carbonara"
              /><br></br>
            <b>Item: </b><i>Pasta Carbonara</i><br></br>
             <b>Price: </b> <i>₹90</i><br></br>
             
              <Link to={'/UpdateCurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Pasta Carbonara')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            
            <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBMNaH849NqBsKgvm3WOc5ZoZjpSB3_fXUQ&usqp=CAU"
                alt="Quiche Lorraine"
              /><br></br>
            <b>Item: </b><i>Quiche Lorraine</i><br></br>
             <b>Price: </b> <i>₹70</i><br></br>
              
              <Link to={'/UpdateCurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Quiche Lorraine')}
                >
                  Update
                </button>
              </Link>
             </div><br></br></div>
             <Link to={'/AddCurries'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br></br>
              <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
      <h1 align="center">Continental Soups</h1>
      <div class="row">
      
      <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1xR41pYlb9KB8M7fU7-5SYI802xST6B3HsvTA-sNpt2cIqa177AovGqxT6844Rf38qM&usqp=CAU"
                alt="Kale Soup"
              /><br></br>
           <b>Item: </b><i>Kale Soup</i><br></br>
             <b>Price: </b> <i>₹199</i><br></br>
             
              <Link to={'/UpdateSoups'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Kale Soup')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
           
           <div class="column">
              <img
                className="ms12"
                src="https://www.continentalhealthyrecipes.com/wp-content/uploads/2021/08/sweet-corn-soup.jpg"
                alt="Taco Soup"
              /><br></br>
           <b>Item: </b><i>Taco Soup</i><br></br>
             <b>Price: </b> <i>₹230</i><br></br>
             
              <Link to={'/UpdateSoups'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Taco Soup')}
                >
                  Update
                </button>
              </Link>
              </div><br></br></div>
            <Link to={'/AddSoups'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link>
        <br></br>
        </div><br></br>
        <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h3>Continental Starters</h3>
        <div class="row">
          <div class="column">
      
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQzVjGRC3OrczKFbgiY69-rqkoO0nHpDnbA&usqp=CAU"
                alt="Gobhi Manchurian"
              /><br></br>
            <b>Item: </b><i>Gobhi Manchurian</i><br></br>
             <b>Price: </b> <i>₹240</i><br></br>
             
              <Link to={'/UpdateStarters'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Gobhi Manchurian')}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            
            <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMkqNDPlepGc_ED8s1DbHaxhvHjHs4vgZ3w&usqp=CAU"
                alt="Corn & Paneer Enchiladas"
              /><br></br>
            <b>Item: </b><i>Corn & Paneer Enchiladas</i><br></br>
             <b>Price: </b> <i>₹299</i><br></br>
              
              <Link to={'/UpdateStarters'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Corn & Paneer Enchiladas')}
                >
                  Update
                </button>
              </Link>
              </div><br></br></div>
             <Link to={'/AddStarters'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br></br>
              <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Continental MainCourse</h1>
        <div class="row">
          <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7nKfzpVEjEIn1wfd733fDLXJHToC4AcF-A&usqp=CAU"
                alt="Steak with Mushroom Sauce"
              /><br></br>
            <b>Item: </b><i>Steak with Mushroom Sauce</i><br></br>
             <b>Price: </b> <i>₹120</i><br></br>
              <Link to={'/UpdateMainCourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Steak with Mushroom Sauce')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
              <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGK3SangctPD-XDtODd9q5yw8BHkOmDFJB-A&usqp=CAU" 
                alt="Salmon Risotto"
              /><br></br>
            <b>Item: </b><i>Salmon Risotto</i><br></br>
             <b>Price: </b> <i>₹110</i><br></br>

              <Link to={'/UpdateMainCourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Salmon Risotto')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
              <div class="column">
  
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgnkzI5FlSj4eEFJYpsL_7klk-xRlunFrjQ&usqp=CAU"
                alt="Ratatouille"
              /><br></br>
            <b>Item: </b><i>Ratatouille</i><br></br>
             <b>Price: </b> <i>₹100</i><br></br>
              
              <Link to={'/UpdateMainCourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Ratatouille')}
                >
                  Update
                </button>
              </Link>
              </div><br></br></div>
            <Link to={'/AddMainCourse'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br></br>
              <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Continental Desserts</h1>
       <div class="row">
        <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtcbC2tCxtxQbXk1cd6GRPBV8VInQl8fINEsFObtpDMPEAGdHZa7InBI-vIgFoGXLziY&usqp=CAU"
                alt="Cheese Cake"
              /><br></br>
            <b>Item: </b><i>Cheese cake</i><br></br>
             <b>Price: </b> <i>₹120</i><br></br>
              
              <Link to={'/UpdateDesserts'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Cheese Cake')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
            
            <div class="column">
              <img
                className="ms12"
                src="https://static.toiimg.com/thumb/84014919.cms?imgsize=306932&width=800&height=800"
                alt="Butterscotch ice Cream"
              /><br></br>
            <b>Item: </b><i>Butterscotch ice cream</i><br></br>
             <b>Price: </b> <i>₹199</i><br></br>

              <Link to={'/UpdateDesserts'}>
                <button
                  className="s"
                  onClick={() => decrementQuantity('Butterscotch ice Cream')}
                >
                  Update
                </button>
              </Link>
            </div><br></br></div>
            <Link to={'/AddDesserts'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br></br>
              <div className='cardms1' style={{width:"32cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Continental Drinks</h1>
        <div class="row">
          <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCNVh_cZMEaacSBIMwVnR21oGNNm-N9qHPw&usqp=CAU"
                alt="Blue Lagoun Mocktail"
              /><br></br>
           <b>Item: </b><i>Blue Lagoun Mocktail</i><br></br>
             <b>Price: </b> <i>₹90</i><br></br>

              <Link to={'/UpdateDrinks'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Blue Lagoun Mocktail')}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
      
            <div class="column">
              <img
                className="ms12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSno89DlkX2rg33CIP16j62e3USLJx89zpQqA&usqp=CAU"
                alt="Chapman Drink"
              /><br></br>
            <b>Item: </b><i>Chapman Drink</i><br></br>
             <b>Price: </b> <i>₹80</i><br></br>
              
              <Link to={'/UpdateDrinks'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chapman Drink')}
                >
                  Update
                </button>
              </Link>
              </div><br></br></div>
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

export default MS_continentalmenu;
