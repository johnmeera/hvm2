import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MS_indianmenu.css';

const MS_indianmenu = () => {
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
      <button type='submit'>Back</button><br/><br/>
      </Link><br/>
      <div className='cardms1' style={{width:"38.5cm",height:"11cm",backgroundColor:"lightgrey"}}>
      <h1 align="center">Indian Breakfast</h1>
      <div class="row">
        <div class="column">
              <img
                className="ms10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpQDdYpbylHunAniQhb_loWOMQUw2je215w&usqp=CAU"
                alt="Upma"
                style={{marginLeft:"2cm"}}
              /><br></br>
            <b style={{marginLeft:"4cm"}}>Item: </b> <i>Upma</i><br></br>
            <b style={{marginLeft:"4cm"}}>Price: </b><i>₹40</i><br></br>
              <Link to={'/Updatebreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Upma')}
                  style={{marginLeft:"4cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            <div class="column">
              <img
                className="ms10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqM7L8CCJ2BqmGgVligvrX-hCJ498uetPnw&usqp=CAU"
                alt="Idli"
                style={{marginLeft:"4cm"}}
              /><br></br>

            <b style={{marginLeft:"6cm"}}>Item: </b> <i>Idly</i><br></br>
            <b style={{marginLeft:"6cm"}}>Price: </b><i>₹30</i><br></br>
              <Link to={'/Updatebreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Idli')}
                  style={{marginLeft:"6cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            <div class="column">
              <img
                className="ms10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcIUFfycngCH8w4TG14V2ZlbVm3faoAjcyg&usqp=CAU"
                alt="Dosa"
                style={{marginLeft:"6cm"}}
              /><br></br>
            <b style={{marginLeft:"8cm"}}>Item: </b> <i>Dosa</i><br></br>
            <b style={{marginLeft:"8cm"}}>Price: </b><i>₹50</i><br></br>

              <Link to={'/Updatebreakfast'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Dosa')}
                  style={{marginLeft:"8cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br></div><br/>
            <Link to={'/Addbreakfast'}>
                <button className="ms3" onClick={() => addToCart('Upma', 40)}>
                  Add
                </button>
              </Link><br></br>
              </div><br/><br/><br/>

              <div className='cardms1' style={{width:"38.5cm",height:"11cm",backgroundColor:"lightgrey"}}>
      <h1 align="center">Indian Curries</h1>
      <div class="row">
        <div class="column">
            
              <img
                className="ms10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMGjtzF__e2A6qAIOYiM25908h9G9grUxSA&usqp=CAU"
                alt="Butter Chicken"
                style={{marginLeft:"2cm"}}
              /><br></br>
            <b  style={{marginLeft:"4cm"}}>Item: </b> <i>Butter Chicken</i><br></br>
            <b  style={{marginLeft:"4cm"}}>Price: </b><i>₹150</i><br></br>

              <Link to={'/Updatecurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Butter Chicken')}
                  style={{marginLeft:"4cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
              <div class="column">
            
              <img
                className="ms10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XnjTtfIyL_iozYtgdy0jlqiqi3LL8fiyqA&usqp=CAU"
                alt="Paneer Tikka Masala"
                style={{marginLeft:"4cm"}}
              /><br></br>
           <b style={{marginLeft:"5cm"}}>Item: </b> <i>Paneer Tikka Masala</i><br></br>
            <b style={{marginLeft:"6cm"}}>Price: </b><i>₹120</i><br></br>
              
              <Link to={'/Updatecurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Paneer Tikka Masala')}
                  style={{marginLeft:"6cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
              <div class="column">
            
              <img
                className="ms10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBLx3E5UaSkrncHYB8Qlc5HoTL5xwT90lGQ&usqp=CAU"
                alt="Rajma Chawal"
                style={{marginLeft:"6cm"}}
              /><br></br>
            <b style={{marginLeft:"7cm"}}>Item: </b> <i>Rajma Chawal</i><br></br>
            <b style={{marginLeft:"8cm"}}>Price: </b><i>₹40</i><br></br>
             
              <Link to={'/Updatecurries'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Rajma Chawal')}
                  style={{marginLeft:"8cm"}}
                >
                  Update
                </button>
              </Link>
             </div><br></br></div><br/>
            <Link to={'/AddCurries'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
      </div><br/><br/><br/>

      <div className='cardms1' style={{width:"38.5cm",height:"11cm",backgroundColor:"lightgrey"}}>
      <h1 align="center">Indian Soups</h1>
      <div class="row">
      
      <div class="column">
              <img
                className="ms10"
                src="https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg"
                alt="Tomato Soup"
                style={{marginLeft:"2cm"}}
              /><br></br>
            <b  style={{marginLeft:"4cm"}}>Item: </b> <i>Tomato Soup</i><br></br>
            <b  style={{marginLeft:"4cm"}}>Price: </b><i>₹199</i><br></br>
              <Link to={'/Updatesoups'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Tomato Soup')}
                  style={{marginLeft:"4cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
            
            <div class="column">
              <img
                className="ms10"
                src="https://theindianclaypot.com/content/images/wp-content/uploads/2019/02/mutton-soup.jpg"
                alt="Mutton Soup"
                style={{marginLeft:"4cm"}}
              /><br></br>
            <b  style={{marginLeft:"6cm"}}>Item: </b> <i>Mutton Soup</i><br></br>
            <b  style={{marginLeft:"6cm"}}>Price: </b><i>₹230</i><br></br>
              
              <Link to={'/Updatesoups'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Mutton Soup')}
                  style={{marginLeft:"6cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br></div><br/>
            <Link to={'/AddSoups'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br/><br/><br/>

              <div className='cardms1' style={{width:"38.5cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Indian Starters</h1> 
        <div class="row">
          <div class="column">
            
              <img
                className="ms10"
                src="https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg"
                alt="Veg Paneer Tikka"
                style={{marginLeft:"2cm"}}
              /><br></br>
            <b style={{marginLeft:"4cm"}}>Item: </b> <i>Veg Paneer Tikka</i><br></br>
            <b style={{marginLeft:"4cm"}}>Price: </b><i>₹240</i><br></br>
              <Link to={'/Updatestarters'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Veg Paneer Tikka')}
                  style={{marginLeft:"4cm"}}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
           
           <div class="column">
              <img
                className="ms10"
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-lollipop.jpg.webp"
                alt="Chicken Lollipops"
                style={{marginLeft:"4cm"}}
              /><br></br>
            <b style={{marginLeft:"6cm"}}>Item: </b> <i>Chicken Lollipops</i><br></br>
            <b style={{marginLeft:"6cm"}}>Price: </b><i>₹299</i><br></br>
             
              <Link to={'/Updatestarters'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chicken Lollipops')}
                  style={{marginLeft:"6cm"}}
                >
                  Update
                </button>
              </Link>
             </div><br></br></div><br/>
             <Link to={'/Addstarters'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br/><br/><br/>

              <div className='cardms1' style={{width:"38.5cm",height:"20cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Indian MainCourse</h1>
        <div class="row">
          <div class="column">
      
              <img
                className="ms10"
                src="https://ministryofcurry.com/wp-content/uploads/2019/02/Paneer-Vegetable-Biryani-2.jpg"
                alt="Veg Paneer Biryani"
                style={{marginLeft:"2cm"}}
              /><br></br>
            <b  style={{marginLeft:"4cm"}}>Item: </b> <i>Veg Paneer Biryani</i><br></br>
            <b style={{marginLeft:"4cm"}}>Price: </b><i>₹180</i><br></br>
              <Link to={'/Updatemaincourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Veg Paneer Biryani')}
                  style={{marginLeft:"4cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
              <div class="column">
            
              <img
                className="ms10"
                src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
                alt="Chicken Biryani"
                style={{marginLeft:"4cm"}}
              /><br></br>
            <b  style={{marginLeft:"6cm"}}>Item: </b> <i>Chicken Biryani</i><br></br>
            <b  style={{marginLeft:"6cm"}}>Price: </b><i>₹220</i><br></br>
              <Link to={'/Updatemaincourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chicken Biryani')}
                  style={{marginLeft:"6cm"}}
                >
                  Update
                </button>
              </Link>
             </div><br></br>
              <div class="column">
            
              <img
                className="ms10"
                src="https://t4.ftcdn.net/jpg/04/41/20/03/240_F_441200344_iTkgSlBqkep1bcSmdWXTA1ZkCRFl9J6a.jpg"
                alt="Mutton Biryani"
                style={{marginLeft:"6cm"}}
              />
              <br></br>
            <b  style={{marginLeft:"8cm"}}>Item: </b> <i>Mutton Biryani</i><br></br>
            <b style={{marginLeft:"8cm"}}>Price: </b><i>₹320</i><br></br>
              <Link to={'/Updatemaincourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Mutton Biryani')}
                  style={{marginLeft:"8cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
              <div class="column">
              <img
                className="ms10"
                src="https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg"
                alt="Garlic Bread"
                style={{marginLeft:"2cm"}}
              /><br></br>
            <b  style={{marginLeft:"4cm"}}>Item: </b> <i>Garlic Bread</i><br></br>
            <b style={{marginLeft:"4cm"}}>Price: </b><i>₹150</i><br></br>
              <Link to={'/Updatemaincourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Garlic Bread')}
                  style={{marginLeft:"4cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
              <div class="column">
            
              <img
                className="ms10"
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/mayo-chicken-sandwich-recipe.jpg"
                alt="Chicken Sandwich"
                style={{marginLeft:"4cm"}}
              /><br></br>
            <b  style={{marginLeft:"6cm"}}>Item: </b> <i>Chicken Sandwich</i><br></br>
            <b  style={{marginLeft:"6cm"}}>Price: </b><i>₹220</i><br></br>
              <Link to={'/Updatemaincourse'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Chicken Sandwich')}
                  style={{marginLeft:"6cm"}}
                >
                  Update
                </button>
              </Link>
             </div><br/></div><br/>
            <Link to={'/Addmaincourse'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br/><br/><br/>

              <div className='cardms1' style={{width:"38.5cm",height:"11cm",backgroundColor:"lightgrey"}}>
        <h1 align="center">Indian Desserts</h1>
        <div class="row">
          <div class="column">
     
              <img
                className="ms10"
                src="https://www.allrecipes.com/thmb/Huh-I63aYc_zZ0NbLECEpFD0BcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/60564-StrawberryCakeFromScratch-ddfms-4X3-0291-1-cd8254e28ea14112b5fc49e25cd08ff6.jpg"
                alt="Strawberry Cake"
                style={{marginLeft:"2cm"}}
              /><br></br>
            <b  style={{marginLeft:"4cm"}}>Item: </b> <i>Strawberry Cake</i><br></br>
            <b  style={{marginLeft:"4cm"}}>Price: </b><i>₹120</i><br></br>
              <Link to={'/Updatedesserts'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Strawberry Cake')}
                  style={{marginLeft:"4cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
              <div class="column">
            
              <img
                className="ms10"
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butterscotch-ice-cream-recipe.jpg"
                alt="Butterscotch ice Cream"
                style={{marginLeft:"4cm"}}
              /><br></br>
            <b  style={{marginLeft:"6cm"}}>Item: </b> <i>Butterscotch ice cream</i><br></br>
            <b  style={{marginLeft:"6cm"}}>Price: </b><i>₹199</i><br></br>
              <Link to={'/Updatedesserts'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Butterscotch ice Cream')}
                  style={{marginLeft:"6cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br></div>
            <Link to={'/Adddesserts'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br></br>
              </div><br/><br/><br/>

              <div className='cardms1' style={{width:"38.5cm",height:"11cm",backgroundColor:"lightgrey"}}> 
        <h1 align="center">Indian Drinks</h1>
        <div class="row">
          <div class="column">
              <img
                className="ms10"
                src="https://5.imimg.com/data5/UD/AN/IA/SELLER-28406699/1-25l-sprite-cold-drink.jpg"
                alt="Sprite"
                style={{marginLeft:"2cm"}}
              /><br></br>
            <b  style={{marginLeft:"4cm"}}>Item: </b> <i>Sprite</i><br></br>
            <b  style={{marginLeft:"4cm"}}>Price: </b><i>₹40</i><br></br>
              <Link to={'/Updatedrinks'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Sprite')}
                  style={{marginLeft:"4cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br>
         
            <div class="column">
              <img
                className="ms10"
                src="https://5.imimg.com/data5/SELLER/Default/2023/3/UR/GE/RS/185952101/whatsapp-image-2023-03-11-at-1-48-21-pm.jpeg"
                alt="Thumbs Up"
                style={{marginLeft:"4cm"}}
              /><br></br>
            <b  style={{marginLeft:"6cm"}}>Item: </b> <i>Thumbs up</i><br></br>
            <b style={{marginLeft:"6cm"}}>Price: </b><i>₹40</i><br></br>
              <Link to={'/Updatedrinks'}>
                <button
                  className="ms"
                  onClick={() => decrementQuantity('Thumbs Up')}
                  style={{marginLeft:"6cm"}}
                >
                  Update
                </button>
              </Link>
              </div><br></br></div><br/>
            <Link to={'/Adddrinks'}>
                <button className="ms3" onClick={() => addToCart()}>
                  Add
                </button>
              </Link><br/><br/><br/>
    </div>
    </div>
    </div>
    
    </>
  );
};

export default MS_indianmenu;
