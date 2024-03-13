// ResetPasswordForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResetPasswordForm.css'; // Create a CSS file for styling if needed

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    // Add your logic for resetting the password
    console.log('Resetting password with new password:', newPassword);
  };

  return (
    <div className="background" style={{backgroundImage: `url('https://img.freepik.com/free-photo/dark-gray-wall-with-wooden-plank-product-background_53876-128557.jpg?t=st=1709102757~exp=1709106357~hmac=b6a91c73cadee3b98550de42cb2927b3423f113daf16f7ed00f64cb314e4098d&w=1060')`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
   
    <div id="reset-password-card">
      <h2 style={{color:'whitesmoke'}}>Reset Password</h2><br/><br/>
      <form onSubmit={handleResetPasswordSubmit}>
        <div className="user-box">
          <input style={{color:"white"}}
            type="password"
            placeholder=" Enter New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
         
        </div>
        <div className="user-box">
          <input style={{color:"white"}}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}y
            required
          />
        
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#009688', 
            color: '#fff', 
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            
          }}
          // Add inline hover effect
          onMouseOver={(e) => { e.target.style.backgroundColor = '#00796b'; }} // Change background color on hover
          onMouseOut={(e) => { e.target.style.backgroundColor = '#009688'; }} // Revert back to original color on mouse out
        >
          Reset Password
        </button><br/><br/>
        <p>
        <Link to="/LoginCard" style={{color:'whitesmoke',fontWeight:'100',fontSize:'13px',textDecoration:'underline'}}>Remember Password?</Link>
      </p>
      </form>
    </div>
    </div>
  );
};

export default ResetPasswordForm;
