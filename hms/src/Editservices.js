// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './Editservices.css';

// function Editservices() {
//   const { serviceno } = useParams();
//   const [serviceData, setServiceData] = useState({
//     serviceno: serviceno, // Initialize with the extracted serviceno
//     servicename: '',
//     price: '',
//   });
  

//   // useEffect(() => {
//   //   // Make a GET request to fetch the specific service data
//   //   axios.get(`http://localhost:8098/employee/${serviceno}`)
    
    
//   //     .then(response => {
//   //       // Set the data in the state
//   //       setServiceData(response.data);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching service data:', error);
//   //     });
//   // }, [serviceno]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setServiceData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     // Make a PUT request to update the service data
//     // axios.put(`http://localhost:8098/employee/update/46`, serviceData)
//     axios.put(`http://localhost:8098/employee/update/`, serviceData)
//       .then(response => {
//         // Handle successful update
//         console.log('Service updated successfully:', response.data);
//         // Optionally, you can redirect or show a success message
//       })
//       .catch(error => {
//         console.error('Error updating service:', error);
//         // Optionally, you can show an error message to the user
//       });
//   };
  
// return (
//     <div className="container-edit-form">
//       <h4 className="editservice">Edit Service</h4>
//       <form>
//       <div className="form-group-edit">

// <label htmlFor="serviceno">Service No:</label>
// <input
//   type="text"
//   className="form-control"
//   id="serviceno"
//   name="serviceno"
//   value={serviceData.serviceno}
//   onChange={handleInputChange}
// />
// </div>
//         <div className="form-group-edit">

//           <label htmlFor="servicename">Service Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="servicename"
//             name="servicename"
//             value={serviceData.servicename}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group-edit">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="price"
//             name="price"
//             value={serviceData.price}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleUpdate}
//         >
//           Update Service
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Editservices;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './Editservices.css';

// function Editservices() {
//   const { serviceno } = useParams();
//   const [serviceData, setServiceData] = useState({
//     serviceno: serviceno,
//     servicename: '',
//     price: '',
//   });

//   useEffect(() => {
//     // Fetch service data when the component mounts
//     axios.get(`http://localhost:8098/employee/${serviceno}`)
//       .then(response => {
//         setServiceData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching service data:', error);
//       });
//   }, [serviceno]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setServiceData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     // Make a PUT request to update the service data
//     axios.put(`http://localhost:8098/employee/update/${serviceno}`, serviceData)
//       .then(response => {
//         console.log('Service updated successfully:', response.data);
//       })
//       .catch(error => {
//         console.error('Error updating service:', error);
//       });
//   };

//   return (
//     <div className="container-edit-form">
//       <h4 className="editservice">Edit Service</h4>
//       <form>
//         <div className="form-group-edit">
//           <label htmlFor="serviceno">Service No:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="serviceno"
//             name="serviceno"
//             value={serviceData.serviceno}
//             onChange={handleInputChange}
//             readOnly // Assuming serviceno is not editable
//           />
//         </div>
//         <div className="form-group-edit">
//           <label htmlFor="servicename">Service Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="servicename"
//             name="servicename"
//             value={serviceData.servicename}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group-edit">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="price"
//             name="price"
//             value={serviceData.price}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleUpdate}
//         >
//           Update Service
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Editservices;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import { Link } from 'react-router-dom';
import './Editservices.css';

function Editservices() {
  const [formData, setFormData] = useState({
    serviceno: null,
    servicename: '',
    price: null,
  });

  const navigate = useNavigate(); // Initialize useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data:', formData);
    axios.put('http://localhost:8100/employees/update', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Redirect back to Servicescomponent page
        navigate('/Servicescomponent');
      })
      .catch(error => {
        console.error('Error submitting form:', error.message);
        // Handle errors, e.g., show an error message
      });
  };

  return (
    <div className="container-edit-formes">
      <h4 className="editservicees">Edit Service</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group-edites">
          <label className="es" htmlFor="serviceno">Service no:</label>
          <input
            type="text"
            className="form-control"
            id="serviceno"
            name="serviceno"
            value={formData.serviceno}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-edites">
          <label className="es" htmlFor="servicename">Service Name:</label>
          <input
            type="text"
            className="form-control"
            id="servicename"
            name="servicename"
            value={formData.servicename}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-edites">
          <label className="es" htmlFor="price">Price:</label>

          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        
        <div className="text-center"> 
          <button className="btn btn-primary" style={{marginTop:"6cm",marginLeft:"-13.5cm",color:"black"}}>
            Update Service
          </button>
        </div>
      </form>
    </div>
  );
}

export default Editservices;


