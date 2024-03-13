import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartPage from './CartPage';
import "./Food.css";

const INDIANmenu = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (itemName, itemPrice) => {
    const existingItemIndex = cart.findIndex((item) => item.name === itemName);

    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
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

  const incrementQuantity = (itemName) => {
    const existingItemIndex = cart.findIndex((item) => item.name === itemName);

    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1, price: item.price + item.price / item.quantity };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  const handleCartClick = () => {
    setShowCart(!showCart); // Toggle the value of showCart
  };

  const handleCloseCart = () => {
    setShowCart(false); // Close the cart popup
  };

  const handleCheckout = () => {
    // Logic to handle checkout
    alert('Redirecting to checkout page...');
  };

  const renderCart = () => {
    return (
      <CartPage
        cart={cart}
        removeFromCart={removeFromCart}
        decrementQuantity={decrementQuantity}
        incrementQuantity={incrementQuantity}
        onClose={handleCloseCart} // Pass the close function
      />
    );
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };






  return (
    
       <div>
        <div className='cardnav'> 
           <div className='imglogo'>
           <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1408/yupiramos140801125/30843448-hotel-design-over-gray-background-vector-illustration.jpg?ver=6" alt="imglogo" style={{height:"120px",width:"150px",borderRadius:"120px"}} />
            <h2 style={{ marginLeft: "10px",marginTop:"3px" }}>Hotel Name</h2>
            <div>
      <h3 className="cardnavdate" style={{marginTop:"-140px",marginLeft:"1250px"}}>Date: {formattedDate} </h3>
      <br />
      <h3 className="cardnavdate" style={{marginTop:"-90px",marginLeft:"1250px"}}>Time: {formattedTime}</h3>
      <div>
        <img src="https://www.freeiconspng.com/uploads/profile-icon-9.png" alt="loading.." style={{width:"50px",height:"50px",marginLeft:"1250px"}}/><br/><br/>
     </div>
      <h3 style={{marginLeft:"1250px",marginTop:"-15px"}}>Id:</h3>
    </div>
       </div>
       </div>
       <div className='navbarfood'>
         
       <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
                    <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
            <a href="#info" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s",marginLeft:"400px"}}>Info</a>
            </li>
            <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
          <a href="#rooms" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s",marginLeft:"40px" }}>Rooms</a>
          </li>
          <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
          <a href="/Food" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s",marginLeft:"40px" }}>Food</a>
          </li>
          <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
          <a href="/Addcust" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s",marginLeft:"40px" }}>Addon's</a>
          </li>
          <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
          <a href="/Area" style={{ color: "whitesmoke", textDecoration: "none", transition: "color 0.3s",marginLeft:"40px" }}>Areainfo</a>
          </li>
          <li style={{ marginLeft: "0cm", marginTop: "0.5cm", fontSize: "larger" }}>
          <a href="/LoginCard" style={{ color: "whitesmoke", textDecoration: "none" ,marginLeft:"40px"}}>Sign-Out</a>
          </li>
         </ul>
         <div className="menu-icon hover-effect" onClick={toggleMenu} style={{ position: "absolute", top: "4.8cm", right: "1.5cm", color: "whitesmoke", zIndex: "1000",fontSize:"40px" }}>
                {isMenuOpen ? <span>&#x2715;</span> : <span> &#9776;</span>}
            </div>

                
                {isMenuOpen && (
                    <div className="menu30" style={{ position: "absolute", bottom:"1", right: "0", backgroundColor: "black", zIndex: "999", width: "250px", padding: "10px" ,marginRight:"0.25cm",height:"10cm",color:"whitesmoke"}}>
                        <ul>
                            <li style={{fontFamily:"cursive",fontSize:"x-large"}}>
                                <a href="/Profile" style={{color:"whitesmoke"}}><b>Profile</b></a>
                                </li><br/>
                            <li style={{fontFamily:"cursive",fontSize:"x-large"}}>
                            <a href="/Mybookings" style={{color:"whitesmoke"}}><b>Booking-History</b></a>
                            </li><br/>
                            <li style={{fontFamily:"cursive",fontSize:"larger"}}><b>FAQ's</b></li><br/>
                            <li style={{fontFamily:"cursive",fontSize:"X-large"}}><b>ContactUs</b></li><br/>
                        </ul>
                    </div>
                )}
       </div>
      
      <div className='cardcontent'>
        <div>
          <h3 className='text'>Indian Menu</h3>
        </div>
        
        <div className="cart-icon2" onClick={handleCartClick} >
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length > 0 && <span className="cart-count2">{cart.length}</span>}
        </div>
       
      </div>
        <div className='cardtiffin'>
        <li>
          <img src="https://tse4.mm.bing.net/th?id=OIP.rPbFAuyjn3xAYzBCzofbswHaE7&pid=Api&P=0&h=180" alt="Dosa" className='tiffins' style={{marginTop:"40px"}}/>
          
         <div className='cardbreaktext'> 
          <h1>Our Indianmenu items</h1>
          <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
         </div>

        </li>
        </div>
       <div className='cardtiffinitems'>
      <ul> 
        <h1 style={{textAlign:"center"}}>Breakfast</h1>
      <div className='row'>
      <div className='carddosa'>
        
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcIUFfycngCH8w4TG14V2ZlbVm3faoAjcyg&usqp=CAU" alt="Dosa" className='dosa' />
          <h4 > Dosa - ₹50</h4>
          <div className='buttoncart'>
          <button onClick={() => addToCart('Dosa', 50)}>Add to Cart</button >
          </div>
      </div> 
     
     <div className='cardidly'>
      
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqM7L8CCJ2BqmGgVligvrX-hCJ498uetPnw&usqp=CAU" alt="Idli" className='idli'/>
          <h4 > Idli - ₹30</h4>
          <div className='buttoncart'>
          <button onClick={() => addToCart('Idli', 30)}>Add to Cart</button>
          </div>
      
        </div>
        <div className='cardupma'>
       
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpQDdYpbylHunAniQhb_loWOMQUw2je215w&usqp=CAU" alt="Upma" className='upma'/>
          <h4> Upma - ₹40</h4>
          <div className='buttoncart'>
          <button onClick={() => addToCart('Upma', 40)}>Add to Cart</button>
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          “Breakfast is everything. The beginning, the first thing. It is the mouthful that is the commitment to a new day, a continuing life.”
        </div>
        </div>
      </ul>
      </div>
      <div className='cardlunch'>
      <img src="https://thumbs.dreamstime.com/b/ready-healthy-food-catering-menu-lunch-boxes-meat-vegetable-packages-black-table-background-as-meal-diet-plan-236875615.jpg" alt="Dosa" className='lunch' />
      <div className='cardlunchtext'> 
          <h2 style={{marginTop:"-250px",marginLeft:"30px"}}>Our Indian Lunchmenu items</h2>
          <div >Tandoori chicken is cooked in a clay oven or tandoor, hence the name. The rice is fluffy and soft yet the spices are just right.Dinner tonight? Look no further. #Indianfood</div>
         </div>
      </div>
      <div className='cardlunchitems'>
      <h1 style={{textAlign:'center'}}>Our Indian Lunch items</h1>

      <div className='cardlunitems'>
        <div className='carditem1'> 
        <img src="https://tse4.mm.bing.net/th?id=OIP.xgHb2kA6gurK3RunAcDA1wHaHa&pid=Api&P=0&h=180" alt="Butter Chicken" className='item1'/>
        <h4 style={{textAlign:'center'}}> Butter Chicken - ₹150</h4>
        <div className='buttoncart'>
        <button onClick={() => addToCart('Butter Chicken', 150)}>Add to Cart</button>
        </div>
        </div>
        <div className='carditem2'>
        <img src="https://vaya.in/recipes/wp-content/uploads/2018/03/Paneer-Butter-Masala.jpg" alt="Paneer Tikka Masala" className='item2'/>
        <h4 style={{textAlign:'center'}}> Paneer Tikka Masala  - ₹120</h4>
        <div className='buttoncart'>
        <button onClick={() => addToCart('Paneer Tikka Masala', 120)}>Add to Cart</button>
        </div>
        </div>
        <div className='carditem3'>
        <img src="https://thumbs.dreamstime.com/b/rajma-chawal-rajma-jeera-chawal-rice-traditional-north-indian-food-consisting-cooked-red-kidney-beans-thick-gravy-195487791.jpg" alt="Rajma Chawal" className='item3'/>
        <h4 style={{textAlign:'center'}}> Rajma Chawal  - ₹100</h4>
        <div className='buttoncart'>
        <button onClick={() => addToCart('Rajma Chawal', 100)}>Add to Cart</button>
        </div>
        </div>
        <div className='carditem4'>
        <img src="https://theveganreview.com/wp-content/uploads/2021/01/VegBiryani1.jpg" alt="Biryani" className='item4'/>
        <h4 style={{textAlign:'center'}}> Biryani - ₹180</h4>
        <div className='buttoncart'>
        <button onClick={() => addToCart('Biryani', 180)}>Add to Cart</button>
        </div>
        </div>

        <div className='cardstaitems'>
        <div className='carditem5' >
        <img src="https://delhiclubadelaide.com.au/wp-content/uploads/2020/11/Roti.jpg" alt="Roti" className='item5'/>
        <h4 style={{textAlign:'center'}}> Roti - ₹80</h4>
        <div className='buttoncart'>
        <button onClick={() => addToCart('Roti', 80)}>Add to Cart</button>
        </div>
        </div>
        <div className='carditem6'>
        <img src="https://zuseat.co.uk/wp-content/uploads/2018/01/Chicken-Spring-Roll-2.jpg" alt="Non-veg chicken spring rolls" className='item6'/>
        <h4 style={{textAlign:'center'}}>  chicken springrolls  - ₹299</h4>
        <div className='buttoncart'>
        <button onClick={() => addToCart('Non-veg chicken spring rolls', 299)}>Add to Cart</button>
        </div>
        </div>
        <div className='carditem7'>
        <img src="https://www.nicepng.com/png/full/964-9642029_veg-biryani-biryani.png" alt="veg paneer biryani" className='item7'/>
        <h4 style={{textAlign:'center'}}> veg paneer biryani  - ₹180</h4>
        <div className='buttoncart'>
        <button onClick={() => addToCart('veg paneer biryani', 180)}>Add to Cart</button>
        </div>
        </div>
        <div className='carditem8'>
        <img src="https://i.pinimg.com/originals/a2/c2/3d/a2c23df280294816d6b5cb99e69fabad.jpg" alt="fry veg hariyali kebabs" className='item8'/>
        <h4 style={{textAlign:'center'}}> fry veg hariyali kebabs - ₹210</h4>
        <div className='buttoncart'>
        <button onClick={() => addToCart('fry veg hariyali kebabs', 210)}>Add to Cart</button>
        </div>
        </div>
        
        </div>
        <div className='cardfooter'>
        <h3 style={{marginLeft:"600px",color:"white"}}>ContactUs</h3>
        <li style={{marginLeft:"15cm",marginTop:"0cm"}}><a href="#" style={{color:"white",textDecoration:"none"}} >mailto:anarghyacommunications@gmail.com</a></li>
        <li style={{marginLeft:"15cm"}}><a href="#" style={{color:"white",textDecoration:"none"}}>Call now : 9845612340</a></li>
        <div class="footer__bar22" >
                © 2023-2024 Anarghya Communications. All Rights Reserved.
                </div>
                </div>
      </div>
      </div>
      
       
      {showCart && (
        <div className="cart-popup2">
          {renderCart()}
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={handleCloseCart}>Close Cart</button>
        </div>
      )}
       
    </div>
  );
};

export default INDIANmenu;
