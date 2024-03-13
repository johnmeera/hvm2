import React from 'react';
import './Orders.css';
import { Link } from "react-router-dom";


const Restaurantmenu = () => {
  return (
    <div className="containerad">
      
      <div className="search-container">
        <input type='search' placeholder='Search...' className='search-input' />
      </div>
      <div className="sidebar">
        <ul>
        <Link to={"/Allorders"} style={{textDecoration:"none"}}>
          <li><a href="#" style={{marginLeft:"-0.2cm"}}>Orders</a></li>
          </Link>
          <Link to={'/Repostat'}>
          <li><a href="#" style={{marginLeft:"-0.3cm"}}>Reports</a></li>
          </Link>
          <Link to={'/Restaurantmenu'}>
          <li><a href="#" style={{marginLeft:"-0.7cm"}}>MenuItems</a></li>
          </Link>
          <Link to={'/LoginCard'}>
          <li><a href='/LoginCard' style={{marginLeft:"-0.4cm"}}>Signout</a></li>
          </Link>
        </ul>
      </div>
      <div style={{ textAlign: 'center' }}>
          <div className="restaurant-containerms">
            <div className="restaurant-optionsms" style={{width:"10cm",height:"10cm",border:"1px solid white",marginLeft:"3cm"}}>
              <h1 style={{color:"whitesmoke"}}>Restaurant Menu</h1><br /><br /><br/>
              <ul className='s1'>
                <li className='s2' style={{ color: "black",marginTop:"-1.5cm" }}><Link to={"/MS_indianmenu"} style={{color:"white",textDecoration:"none"}}> IndianMenu</Link></li><br /><br /><br />
                <li className='s2' style={{marginTop:"-0.8cm"}}> <Link to={"/MS_continentalmenu"} style={{color:"white",textDecoration:"none"}}>ContinentalMenu</Link></li><br /><br /><br />
                <li className='s2' style={{marginTop:"-0.8cm"}}><Link to={"/MS_moghulaimenu"} style={{color:"white",textDecoration:"none"}}> MoghulaiMenu</Link></li><br /><br /><br />
                <li className='s2' style={{marginTop:"-0.8cm"}}><Link to={"/MS_chineasemenu"} style={{color:"white",textDecoration:"none"}}> ChineaseMenu</Link></li><br /><br /><br />
              </ul>
            </div>
           
          </div>
          </div>

     
</div>

  )};

export default Restaurantmenu;





