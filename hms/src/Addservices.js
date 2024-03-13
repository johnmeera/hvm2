import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Addservices.css'; // Import the CSS file

function Addservices({ setEmployees }) {
  const [newService, setNewService] = useState({
    servicename: '',
    price: '',
  });

  const handleAdd = () => {
    // Make a POST request to add a new service
    axios.post('http://localhost:8100/employees/save', newService)
      .then(response => {
        // Refresh the list of services after adding a new one
        setNewService({
          servicename: '',
          price: '',
        });
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error adding service:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };


  return (
    <>
      <div className="add-service-formabas">
        <h4 className="addnewserviceabas">Add New Service</h4>
        <div className="form-groupabas">
        <label className="labelabas" htmlFor="servicename">Service Name:</label>
          <input
          className='abas'
            type="text"
            id="servicename"
            name="servicename"
            value={newService.servicename}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-groupabas">
        <label className="labelabas" htmlFor="price">Price:</label>
          <input
          className='abas'
            type="text"
            id="price"
            name="price"
            value={newService.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="text-center"> 
        <Link to={'/Servicescomponent'}>
          <button className="btn btn-primary" onClick={handleAdd} style={{marginTop:"5.5cm",marginLeft:"-13.5cm",color:"black"}}>
            Add Service
          </button>
        </Link>
        </div>

      </div>
    </>
  );
}

export default Addservices;
