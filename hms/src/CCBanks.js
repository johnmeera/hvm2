import React from "react";
import { Link } from "react-router-dom";

function CCBanks(){
    return(
        <>
         <div className="form-container" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(https://img.freepik.com/free-vector/blue-geometric-minimal-background_53876-99573.jpg?w=900&t=st=1707477985~exp=1707478585~hmac=5515c6c7cbcfc920f011915731395341d9aa551342b58b14284a17ea0cfcfe47)",
        backgroundSize: "cover",
        height: "100vh",
      }}>
         <form className="formn" style={{
          marginTop: "-5cm",
          width: "19cm",
          height: "14cm",
          borderRadius: "50px",
          color: "whitesmoke",
          border: "2px solid black", // Border color of the form
          marginBottom:"-4cm"
        }}> 
            <h1 style={{marginLeft:"5.5cm",marginTop:"2cm",color:"black"}}><b>Credit Card Payment</b></h1><br/><br/><br/>

            <p style={{marginLeft:"3cm",color:"black"}}><b>Credit Card Payments Banks</b></p><br/>
            <Link to={'/RupayCreditcard'}>
            <button type="button"  className="btn btn-light" style={{marginTop:"0.5cm",width:"3cm",height:"1cm",marginLeft:"4cm",float:"left",backgroundColor:"white",border:"1px solid black"}}><b><img src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-12610,resizemode-75,msid-106297731/wealth/personal-finance-news/indias-first-corporate-credit-card-on-rupay-network-launched-upi-transactions-and-more.jpg" width="112cm" height="35cm" style={{marginLeft:"0cm",marginTop:"-0.28cm",width:"2cm"}}></img></b></button> 
            </Link>
            <Link to={'/visaCreditcard'} >
            <button type="button"  className="btn btn-light" style={{width:"3cm",height:"1cm",marginLeft:"10cm",marginTop:"0.5cm",backgroundColor:"white", border:"1px solid black"}}><b><img src="https://cdn.vox-cdn.com/thumbor/FtAV-Waa1rTPheAkxv3o4i0MVf0=/0x0:1000x1000/1200x800/filters:focal(421x430:581x590)/cdn.vox-cdn.com/uploads/chorus_image/image/62800797/Mastercard_logo.0.jpg" width="112cm" height="31cm" style={{marginLeft:"0cm",marginTop:"-0.28cm",width:"2cm"}}></img></b></button>  
            </Link>
            
            <div className="back" style={{marginTop:"1cm"}}>
                  <a href="http://localhost:3000/Payments" style={{marginLeft:"2cm",color:"black",textDecoration:"none"}}><b>Back</b></a>
                </div>
            </form>
        </div>
        </>
    )
}
export default CCBanks;