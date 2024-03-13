import React, { useState } from 'react';
import axios from 'axios'; 
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [toEmail, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const navigate = (path) => {
    // Define your custom navigation function here
    window.location.href = path; // For example, you can use window.location.href to navigate
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8112/api/email/sendOtp', { toEmail });
      console.log('Password reset request sent successfully');
      alert('Successfully sent the Otp request');
      // Handle success, maybe display a message to the user
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Error sending otp. Please try again later.');
      // Handle error, display an error message to the user
    }
  };
  

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8112/api/email/verify-otp', { email: toEmail, otp });
      console.log('OTP verified successfully');
      alert('OTP verified successfully');
      navigate('/ResetPasswordForm'); // Use the custom navigate function
      // Handle OTP verification success, for example, navigate to the next step
      // You might want to set a state or redirect the user to a different page
      // depending on the flow after OTP verification
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Invalid OTP. Please try again.');
      // Handle OTP verification error, display an error message to the user
    }
  };

  return (
    <div className="background" style={{backgroundImage: `url('https://img.freepik.com/free-photo/dark-gray-wall-with-wooden-plank-product-background_53876-128557.jpg?t=st=1709102757~exp=1709106357~hmac=b6a91c73cadee3b98550de42cb2927b3423f113daf16f7ed00f64cb314e4098d&w=1060')`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
   
    <div id="forgot-password-card">
      <h2>Forgot Password</h2>
      <p style={{ color: 'white' }}>Enter your mail-Id to reset your password.</p>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Email"
          value={toEmail}
          onChange={handleEmailChange}
        />
        <button type="submit">Send OTP</button><br></br>
      </form>
      <form onSubmit={(e) => handleVerifyOtp(e)}>
        <input
          type="text"
          placeholder="Enter OTP sent to above mailId"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify OTP</button>
      </form>

      <p style={{ color: 'royalblue', fontWeight: '500' }}>
        Want to register? <a href="/RegistrationForm"><i style={{ color: 'royalblue', fontSize: '14px', textDecoration: 'underline' }}>Register here</i></a>
      </p>
    </div>
    </div>
  );
};

export default ForgotPassword;
