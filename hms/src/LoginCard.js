// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './LoginCard.css';

// const LoginCard = ({ handleLogin }) => {
//   const navigate = useNavigate();
//   const [emailid, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [popupMessage, setPopupMessage] = useState('');
//   const [showPopup, setShowPopup] = useState(false);

//   const handleEmailIdChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8112/hotelmanagement/login', {
//         emailid,
//         password,
//       });
  
//       const dashboardType = response.data; // Get the type of dashboard from the response
  
//       switch (dashboardType) {
//         case 'Admin Dashboard':
//           navigate('/Admindashboard'); // Navigate to admin dashboard
//           alert('Navigating to Admin Dashboard');
//           break;
//         case 'Restaurant Dashboard':
//           navigate('/Orders'); // Navigate to restaurant dashboard
//           alert('Navigating to Restaurant Dashboard');
//           break;
//         case 'User Dashboard':
//           navigate('/Customerdashboard'); // Navigate to user dashboard
//           alert('Navigating to User Dashboard');
//           break;
//         default:
//           console.error('Invalid dashboard type:', dashboardType);
//       }
      
  
//       setPopupMessage('Login successful!');
//       setShowPopup(true);
//       console.log('Login successful');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setPopupMessage('Invalid email or password. Please try again.');
//       } else {
//         setPopupMessage('An error occurred during login. Please try again later.');
//       }
//       setShowPopup(true);
//       console.error('Error during login:', error);
//     }
//   };
  

//   return (
//     <div className="login-box">
//       <h2>Login Page</h2>
//       <form onSubmit={handleLoginSubmit}>
//         <div className="user-box">
//           <input
//             type="text"
//             placeholder="Enter EmailId"
//             name="email"
//             value={emailid}
//             onChange={handleEmailIdChange}
//             required
//           />
//           <label>Email</label>
//         </div>
//         <div className="user-box">
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//           <label>Password</label>
//         </div>
//         <button type="submit" className="submit" style={{marginLeft:'25%',width:'50%'}}>Submit</button>
//       </form>
//       <p style={{color:'royalblue',fontWeight:'500'}}>
//         Want to register? <br></br><Link to="/RegistrationForm" style={{color:'royalblue',fontWeight:'500',fontSize:'13px',textDecoration:'underline'}}>Register here!</Link>
//       </p>
//       <p>
//         <Link to="/ForgotPassword" style={{color:'royalblue',fontWeight:'100',fontSize:'13px',textDecoration:'underline'}}>Forgot Password?</Link>
//       </p>
//       {showPopup && <div className="popup">{popupMessage}</div>}
//     </div>
//   );
// };

// export default LoginCard;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginCard.css';

const LoginCard = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailIdChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8112/hotelmanagement/login', {
        email,
        password,
      });
  
      const dashboardType = response.data; // Get the type of dashboard from the response
      console.log('Dashboard type:', dashboardType);
  
      switch (dashboardType) {
        case 'admin dashboard':
          console.log('Navigating to admin dashboard');
          navigate('/Admindashboard'); // Navigate to admin dashboard
          break;
        case 'restaurant dashboard':
          console.log('Navigating to restaurant dashboard');
          navigate('/Orders'); // Navigate to restaurant dashboard
          break;
        case 'customer dashboard':
          console.log('Navigating to customer dashboard');
          navigate('/Customerdashboard'); // Navigate to customer dashboard
          break;
        default:
          console.error('Invalid dashboard type:', dashboardType);
      }
  
      setPopupMessage('Login successful!');
      setShowPopup(true);
      console.log('Login successful');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setPopupMessage('Invalid email or password. Please try again.');
      } else {
        setPopupMessage('An error occurred during login. Please try again later.');
      }
      setShowPopup(true);
      console.error('Error during login:', error);
    }
  };
  
  

  return (
    <div className="background" style={{backgroundImage: `url('https://img.freepik.com/free-photo/dark-gray-wall-with-wooden-plank-product-background_53876-128557.jpg?t=st=1709102757~exp=1709106357~hmac=b6a91c73cadee3b98550de42cb2927b3423f113daf16f7ed00f64cb314e4098d&w=1060')`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
   
    <div className="login-box">
      <h2 style={{color:"whitesmoke"}}>Login Page</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="user-box">
          <input
            type="text"
            placeholder="Enter EmailId"
            name="email"
            value={email}
            onChange={handleEmailIdChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit" className="submit" style={{marginLeft:'25%',width:'50%',backgroundColor:"lightgray",color:"black"}}>Submit</button>
      </form>
      <p style={{color:'whitesmoke',fontWeight:'300'}}>
        Want to register? <br></br><Link to="/RegistrationForm" style={{color:'whitesmoke',fontWeight:'500',fontSize:'13px',textDecoration:'underline'}}>Register here!</Link>
      </p>
      <p>
        <Link to="/ForgotPassword" style={{color:'whitesmoke',fontWeight:'100',fontSize:'13px',textDecoration:'underline'}}>Forgot Password?</Link>
      </p>
      {showPopup && <div className="popup">{popupMessage}</div>}
    </div>
    </div>
  );
};

export default LoginCard;

