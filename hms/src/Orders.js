import React from 'react';
import Graph from './Graph';
import Graphroom from './Graphroom';
import GraphDine from './GraphDine';
import { Link} from "react-router-dom";
import './Orders.css';

const Orders = () => {
  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString(); // Convert to local date and time string
  };

  
  return (
    <div className="containerad" style={{overflow:"hidden"}} >

<div className='navfood'>

       <h2 style={{marginLeft:"540px",color:"white",marginTop:"30px",}}>Restaurant Dashboard</h2>

       <h3 style={{marginLeft:"1080px",marginTop:"-20px",color:"white"}}>Loggedin: Durga</h3>
       <p className="date-time" style={{marginRight:"7cm",color:"white"}}>{getCurrentDateTime()}</p>

       </div>
       <div className="sidebar">
       <ul>
        
          <li><a href="#" style={{marginLeft:"-0.2cm",color:"white"}}>Orders</a></li>
          
          <Link to={'/Repostat'} style={{textDecoration:'none'}}>
          <li><a href="#" style={{marginLeft:"-0.3cm",color:"white"}}>Reports</a></li>
          </Link>
          <Link to={'/Restaurantmenu'} style={{textDecoration:'none'}}>
          <li><a href="#" style={{marginLeft:"-0.7cm",color:"white"}}>MenuItems</a></li>
          </Link>
          <Link to={'/Dinecard'} style={{textDecoration:'none'}}>
          <li><a href="#" style={{marginLeft:"-0.7cm",color:"white"}}>Dineinn</a></li>
          </Link>
          <Link to={'/LoginCard'} style={{textDecoration:'none'}}>
          <li><a href='/LoginCard' style={{marginLeft:"-0.4cm",color:"white"}}>Signout</a></li>
          </Link>
        </ul>
       </div>
       <div className='card3slides'>
          <Link to={'/Roomservice'} style={{textDecoration:"none",color:"white  "}}>
         <div className='cardroom1'>
            <h3 className='slidetext1'>Roomservice</h3>
         </div>
         </Link>
         <Link to={'/Takeaway'} style={{textDecoration:"none"}}>
         <div className='cardtake1'>
            <h3 style={{textAlign:"center",color:"white"}}>Takeaway</h3>
         </div>
         </Link>
         <Link to={'/Dineinn'} style={{textDecoration:"none",color:"white"}}>
         <div className='carddine1'>
            <h3 style={{textAlign:"center",color:"white"}}>Dineinn</h3>
         </div>
         </Link>
       </div>
      {/* <div className='cardgraph'>
         <div className='cardgraph1' style={{marginTop:"40px"}}>
         <Graph/>
         </div>
         <div className='cardgraph2' style={{marginTop:"-200px"}}>
         <Graphroom/>
         </div>
         <div className='cardgraph3' >
         <GraphDine/>
         </div>
      </div> */}
    </div>
    
  );
};

export default Orders;
