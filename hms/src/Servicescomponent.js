import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Servicescomponent.css";

function Servicescomponent() {
  const [employees, setEmployees] = useState([]);
  const [newService, setNewService] = useState({
    servicename: '',
    price: '',
  });

  useEffect(() => {
    // Make a GET request to the backend endpoint to fetch data
    axios.get('http://localhost:8100/employees/employees')
      .then(response => {
        // Set the data in the state
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs once on component mount

  const handleDelete = (serviceno) => {
    // Confirm before deleting
    const confirmDelete = window.confirm('Are you sure you want to delete this service?');
    if (!confirmDelete) return;

    // Make a DELETE request to remove a service
    axios.delete(`http://localhost:8100/employees/delete/${serviceno}`)
      .then(response => {
        console.log('Service deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting service:', error);
      });
    };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };
  const currentDate = new Date();
  
 
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();


  return (
    <>
    <div className="body-container">
                <div className="header30">
                    <Link to='/Admindashboard' style={{ fontSize: 'xx-large', marginLeft: '15cm', textDecoration: 'none', color: 'white', fontStyle: "italic" }}>
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
                        <Link to={'/Restaurant'}>
                        <p style={sidebarLabelStyle}><b>Restaurant</b></p>
                        </Link><br/><br/>
                        <Link to={'/Adminreports'}>
                        <p style={sidebarLabelStyle}><b>Reports</b></p><br/><br/>
                        </Link>
                        <Link to={'/Servicescomponent'}>
                        <p style={sidebarLabelStyle}><b>Add-On's</b></p><br/><br/><br/>
                        </Link>
                        <Link to={'/LoginCard'}>
                        <p style={sidebarLabelStyle}><b>Sign-out</b></p>
                        </Link>
                    </aside>
                </div>
    <h3 className="customerab"style={{marginTop:"2cm",marginLeft:"6cm"}}>Date&time : {formattedDate} {formattedTime}</h3>
      <br />
      {/* <h3 className="customersab"style={{marginTop:"2cm",marginLeft:"6cm"}}>Customer ID :</h3> */}
      <div className='coab'>
        <h1 className='text-centerab' style={{marginLeft:"3cm",marginTop:"1cm"}}>Add-on services</h1><br/>
       
      
      <Link to={'/Addservices'}>
     <button type='submit'  className="btn" style={{marginLeft:"29.5cm",marginTop:"1cm",color:"black"}}>Add</button>
     </Link>
     <Link to={'/Editservices'}>
     <button type='submit'  className="btn" style={{marginLeft:"32cm",marginTop:"-1.3cm",color:"black"}}>Edit</button>
     </Link>
      

        <div className="table-responsiveab">
        <table className='table table-striped table-sm' style={{marginLeft:"-3cm",marginTop:"2cm"}}>
        <thead>
        <tr>
        <th>serviceno</th>
        <th>servicename</th>
        <th>price</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((employee) => (
        <tr key={employee.serviceno}>
        <td>{employee.serviceno}</td>
        <td>{employee.servicename}</td>
        <td>{employee.price}</td>
        <td>  

                   
        <button
            className="btn btn-danger btn-sm"
            style={{ marginLeft: '8px' }}
            onClick={() => handleDelete(employee.serviceno)} >
            Delete
            </button>

            </td>
            </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
       {/* <Link to='/Editservices' className='btn btn-primary btn-sm mr-2' >
          Update
        </Link> */}
      <Link to={'/Admindashboard'}>
        <button type='submit' style={{marginLeft:"7cm",marginTop:"5cm"}}><b>Back</b></button>
        </Link>
      <div className="footer30">Admin Data</div>
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

export default Servicescomponent;
