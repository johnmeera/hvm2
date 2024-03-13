// Createaccount.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Admindashboard.css';

function Createaccount() {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        phone: '',
        email: '',
        accountType: '',
        permissions: [],
        userId: '',
        password: '',
        confirmPassword: '',
        changePassword: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePermissionChange = (e, permission) => {
        const { checked } = e.target;

        if (checked) {
            setFormData({ ...formData, permissions: [...formData.permissions, permission] });
        } else {
            setFormData({ ...formData, permissions: formData.permissions.filter(p => p !== permission) });
        }
    };

    const handleCreateAccount = () => {
        console.log(formData);
        axios.post('http://localhost:8084/api-v1/create', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log(response.data);
                // Handle success, e.g., show a success message or redirect
            })
            .catch((error) => {
                console.error('Error creating account:', error);
                // Handle error, e.g., show an error message
            });
    };

    return (
        <>
            <div className="body-container">
            <div className="header30">
                    <Link to='/Admindashboard' style={{ fontSize: 'xx-large', marginLeft: '15cm', textDecoration: 'none', color: 'white', fontStyle: "italic" }}>
                        <b>Admin Dashboard</b>
                    </Link>
                    <label style={{ fontSize: 'larger', marginLeft: '1cm', marginTop: "0.5cm" }}>
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
                        <Link to={'/Restaurant'}>
                        <p style={sidebarLabelStyle}><b>Restaurant</b></p>
                        </Link><br/><br/>
                        <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
                        <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
                        <p style={sidebarLabelStyle}><b>Sign-out</b></p>
                    </aside>
                </div>

                <div style={{marginLeft:"3cm"}}>
                    <label style={{ marginLeft: "12cm", marginTop: "0cm" }}><b>Name:</b></label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Name of the person" style={{ marginLeft: "2.9cm", width: "10cm", textAlign: "center" }}
                    required /><br /><br />

                <label style={{ marginLeft: "12cm" }}><b>Designation:</b></label>
                <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="Account holder designation" style={{ marginLeft: "1.7cm", width: "10cm", textAlign: "center" }}
                    required /><br /><br />

                <label style={{ marginLeft: "12cm" }}><b>Mobile No:</b></label>
                <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91" style={{ marginLeft: "2cm", width: "10cm" , textAlign: "center"}}
                    required /><br /><br />

                <label style={{ marginLeft: "12cm" }}><b>Email:</b></label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address" style={{ marginLeft: "3cm", width: "10cm" , textAlign: "center"}}
                    required /><br /><br />

                <label style={{ marginLeft: "12cm" }}><b>Account Type:</b></label>
                <select
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleInputChange}
                    style={{ marginLeft: "1.35cm", width: "10cm", alignItems: "center", textAlign: "center" }}>
                    <option>--select--</option>
                    <option>Admin</option>
                    <option>Staff</option>
                    <option>Accounts</option>
                    <option>Restaurant</option>
                </select><br /><br />

                <label style={{ marginLeft: "12cm" }}><b>Permissions:</b></label>
                <input
                    type="checkbox" 
                    name="readPermission"
                    checked={formData.permissions.includes('Read')}
                    onChange={(e) => handlePermissionChange(e, 'Read')}
                    style={{ marginLeft: "1.7cm" }} />
                <label style={{ marginLeft: "0.2cm" }}><b>Read </b></label>
                <input
                    type="checkbox"
                    name="writePermission"
                    checked={formData.permissions.includes('Write')}
                    onChange={(e) => handlePermissionChange(e, 'Write')}
                    style={{ marginLeft: "0.5cm" }} />
                <label style={{ marginLeft: "0.2cm" }}><b>Write</b></label>
                <input
                    type="checkbox"
                    name="printPermission"
                    checked={formData.permissions.includes('Print')}
                    onChange={(e) => handlePermissionChange(e, 'Print')}
                    style={{ marginLeft: "0.5cm" }} />
                <label style={{ marginLeft: "0.2cm" }}><b>Print</b></label>
                <input
                    type="checkbox"
                    name="deletePermission"
                    checked={formData.permissions.includes('Delete')}
                    onChange={(e) => handlePermissionChange(e, 'Delete')}
                    style={{ marginLeft: "0.5cm" }} />
                <label style={{ marginLeft: "0.2cm" }}><b>Delete</b></label><br /><br />

                <label style={{ marginLeft: "12cm" }}><b>UserId:</b></label>
                <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                    placeholder="Enter Id " style={{ marginLeft: "2.75cm", width: "10cm", textAlign: "center" }} /><br /><br />

                <label style={{ marginLeft: "12cm" }}><b>Password:</b></label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter Password " style={{ marginLeft: "2.15cm", width: "10cm", textAlign: "center" }} /><br /><br />

                <label style={{ marginLeft: "12cm" }}><b>Confirm Password:</b></label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Enter Confirm password " style={{ marginLeft: "0.4cm", width: "10cm", textAlign: "center" }} /><br /><br/><br/>

                    <input
                        type="checkbox"
                        name="changePassword"
                        checked={formData.changePassword}
                        onChange={(e) => handleInputChange({ target: { name: 'changePassword', value: e.target.checked } })}
                        style={{ marginLeft: "12cm", marginTop: "-1cm" }} />
                    <label style={{ marginLeft: "0.2cm" }}>Change Password </label><br /><br/>

                    <button onClick={handleCreateAccount} className="create-account-button" style={{marginLeft:"19cm", marginTop:"-3cm"}}><b>Create Account</b></button>
                </div><br/><br/><br/>

                <div className="footer30">Admin Data</div>
            </div>
        </>
    );
}

const sidebarLabelStyle = {
    color: 'white',
    marginLeft: '-0.1cm',
    fontSize: 'larger',
    marginTop: '-0.2cm',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default Createaccount;
