import React from "react";
import { Link } from "react-router-dom";

function Banktransfer(){
    return (
        <>
         <div className="form-container" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(https://img.freepik.com/free-vector/blue-geometric-minimal-background_53876-99573.jpg?w=900&t=st=1707477985~exp=1707478585~hmac=5515c6c7cbcfc920f011915731395341d9aa551342b58b14284a17ea0cfcfe47)",
        backgroundSize: "cover",
        height: "100vh",
      }}>
          <form className="formn" style={{marginTop:"-1cm",width:"15cm",height:"10cm",borderRadius:"50px",border:"2px solid black"}}>   
            <h1 style={{marginLeft:"5cm",float:"left", color:"black"}}><b>Bank Transfer</b></h1><br/>
               <div>
                    <Link to={'/Sbibank'}>
                    <button type="submit" to={"/"} className="btn btn-light" style={{marginTop:"2cm",width:"3cm",height:"1cm",marginLeft:"4cm",backgroundColor:"white",border:"1px solid black"}}><b><img src="https://i.pinimg.com/736x/bb/3c/01/bb3c0117b37cd57106299270bd2c2d12.jpg" width="109cm" height="31cm" style={{marginLeft:"-0.2cm",marginTop:"-0.2cm"}}></img></b></button>  
                    </Link>
                    <Link to={'/Hdfcbank'}>
                    <button type="submit"  className="btn btn-light" style={{marginTop:"-1cm",width:"3cm",height:"1cm",marginLeft:"8cm",backgroundColor:"white",border:"1px solid black"}}><b><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/1200px-HDFC_Bank_Logo.svg.png" width="120cm" height="31cm" style={{marginLeft:"-0.65cm",marginTop:"-0.3cm",width:"3cm",height:"0.9cm"}}></img></b></button> 
                    </Link> <br/>
                    <Link to={'/Icicibank'}>
                    <button type="submit" to={"/"} className="btn btn-light" style={{marginLeft:"4.03cm",marginTop:"0cm",width:"3cm",height:"1cm",backgroundColor:"white",border:"1px solid black"}}><b><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png" width="109cm" height="31cm" style={{marginLeft:"-0.2cm",marginTop:"-0.3cm"}}></img></b></button>  
                    </Link>
                </div> 

                 <div className="back" >
                  <a href="http://localhost:3000/Payments" style={{marginLeft:"2cm",color:"black",textDecoration:"none"}}><b>Back</b></a>
                </div>  
            </form>
        </div>
        </>
    )
}
export default Banktransfer;