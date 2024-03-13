import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Admindashboard.css';

function PS() {
  const [formData, setFormData] = useState({
    room_type: '',
    room_features: '',
    ctc_price: null,
    gst:null,
    discount: null,
    net_total: null,
    addons: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data:', formData);

    axios.post('http://localhost:8080/api-v1/create', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Handle success, e.g., show a success message
      })
      .catch(error => {
        console.error('Error submitting form:', error.message);
        // Handle errors, e.g., show an error message
      });
  };
  return (
    <>
        <div className="body-container">
        <div className="header30">
                    <Link to='/Admindashboard' style={{ fontSize: 'xx-large', marginLeft: '13cm', textDecoration: 'none', color: 'white', fontStyle: "italic" }}>
                        <b>Admin Dashboard</b>
                    </Link>
                    <label style={{ fontSize: 'larger', marginLeft: '4.4cm', marginTop: "0.5cm" }}>
                        <b>Logged in:{"\t"}{"\t"}</b> Nikhil Tammineedi
                    </label>
                </div><br/>

                <div className="sidebar30" style={{marginTop:"-0.65cm"}}>
                    <aside className="aside1">
                        <Link to={'/Accomodations'} style={{ textDecoration: "none" }}>
                            <p style={sidebarLabelStyle}><b>Accommodations</b></p>
                        </Link><br/><br/>
                        <Link to={'/Createaccount'} style={{ textDecoration: "none" }}>
                            <p style={sidebarLabelStyle}><b>Create Account</b></p>
                        </Link><br/><br/>
                        <p style={sidebarLabelStyle}><b>Restaurant</b></p><br/><br/>
                        <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
                        <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
                        <p style={sidebarLabelStyle}><b>Sign-out</b></p>
                    </aside>
                </div>
             
    
       <img  className="img31" src="https://static.vecteezy.com/system/resources/previews/000/582/474/original/plus-icon-vector-illustration.jpg  " alt="loading.."  style={{ marginLeft: "26cm", marginTop: "7cm", float: "inline-end", marginRight: "1cm",width:"8cm", height:"5cm" }} /><br /> 
     
       
        <div style={{ marginTop: "2cm", marginLeft: "10cm", float: "inline-start" }}>
          <form onSubmit={handleSubmit}>
           <label><b>Room Type{"\t"}:{"\t"}</b></label>{"\t"}{"\t"}
           <input style={{marginLeft:"1.75cm",width:"10cm", textAlign: "center"}}
              type="text"
              placeholder="Enter Room type"
              name="room_type"
              value={formData.room_type}
              onChange={handleChange}
              required /><br /><br />

           <label><b>Room Features{"\t"}:</b></label>
          <input 
              type="text" sty
              placeholder="Enter room features"
              name="room_features"
              value={formData.room_features}
              style={{ width: "10cm", textAlign: "center",marginLeft:"1cm" }}
              onChange={handleChange}
              required /><br /><br />

          <label><b>CTC Price{"\t"}:</b></label>{"\t"}{"\t"}
            <input style={{marginLeft:"2.1cm", width:"10cm", textAlign: "center"}}
              type="number"
              placeholder="CTC Amount"
              name="ctc_price"
              value={formData.ctc_price}
              onChange={handleChange}
              required /><br /><br />

            <label><b>GST{"\t"}:</b></label>{"\t"}{"\t"}
            <input style={{marginLeft:"3.35cm",width:"10cm", textAlign: "center"}}
              type="number"
              placeholder="GST Amount"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              required /><br /><br />

            
        < label><b>Discount{"\t"}:</b></label>{"\t"}{"\t"}
            <input  style={{marginLeft:"2.24cm",width:"10cm", textAlign: "center"}}
              type="number"
              placeholder="Discount %"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              required /><br /><br />

            {/* <label><b>Net Total{"\t"}:</b></label>{"\t"}{"\t"}
            <input  style={{marginLeft:"1.9cm", width:"10cm"}}
              type="number"
              placeholder="Total Net Amount"
              name="net_total"
              value={formData.net_total}
              onChange={handleChange}
               /><br /><br /> */}

            <label><b>Available Add-on's{"\t"}:</b></label>{"\t"}{"\t"}
            <input
              type="text"
              placeholder="List of Add-on services"
              name="addons"
              value={formData.addons}
              style={{ width: "10cm", textAlign: "center",marginLeft:"0cm" }}
              onChange={handleChange}
              required /><br /><br /><br/>
              
            <Link to={'/Accomodations'} >
               <button type="button" style={{marginLeft:"2cm"}}>Back</button>
            </Link>
      
            <button type='submit' style={{marginLeft:"4.5cm"}}><b>Confirm</b></button>
          </form>
        </div>
      

       

            <div className="footer30">Admin Data</div>
        </div>
    </>
);
}
const sidebarLabelStyle = {
  color: 'white',
  marginLeft: '-0.1cm',
  fontSize: 'larger',
  marginTop: '-0.8cm',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};



export default PS;
