// import React from 'react';

//import './Orders.css';
// function Dineinn(){
//   return (
//     <div>
//       <h1><center>Orders</center></h1>
//       <div className="order-container"></div>
//    <form className="order-form">
//    <div><label htmlFor="type">Type : Dine-inn</label></div><br/>
  
//    <div className="side">
//    <label htmlFor="tale number">Tablenumber: </label>
//    <label htmlFor="items">Items: </label>
//    <label htmlFor="unit">Unit: </label>
//    <label htmlFor="price">Price: </label><br/></div>
//       <hr></hr>
//    <label htmlFor="total">Total : </label><br/>
//    <label htmlFor="gst">GST : </label><br/>
//    <label htmlFor="net total">Net Total : </label><br/>
   
//     </form>
    
//     </div>

//   );
// }
// export default Dineinn;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DineinnComponent() {
//     const [dineinnData, setDineinnData] = useState([]);

//     useEffect(() => {
//         // Fetch all dine-in data from the backend
//         axios.get('http://localhost:8105/api-v1/dineinn/getAll')
//             .then(response => {
//                 setDineinnData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching dine-in data:', error);
//             });
//     }, []);

//     return (
//         <div>
//             <center><h1>Dine-in Details</h1></center>

//             {/* Display all dine-in data */}
//             <div className='dineinn-list'>
//                 {dineinnData.map(dineinn => (
//                     <div key={dineinn.id} className='dineinn-item'>
//                         <h2>Dine-in ID: {dineinn.id}</h2>
//                         <p>Type: {dineinn.type}</p>
//                         <p>Table Number: {dineinn.tablenumber}</p>
//                         {/* Add other details here */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default DineinnComponent;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Roomservice.css';
// function Dineinn() {
//     const [dineinn, setdineinn] = useState(null);
//     const [AllDineinn, setAllDineinn] = useState([]);

//     const getDineinnById = async (id) => {
//       try {
//         const response = await axios.get(`http://localhost:8105/api-v1/1`);
//         setdineinn(response.data);
//       } catch (error) {
//         console.error('Error fetching dineinn by ID:', error);
//       }
//     };
//     const getAllDineinn = async () => {
//       try {
//         const response = await axios.get('http://localhost:8105/api-v1/getAll');
//         setAllDineinn(response.data);
//       } catch (error) {
//         console.error('Error fetching all dineinn:', error);
//       }
//     };
  
//     useEffect(() => {
//       // Fetch a single room service by ID (replace '1' with the actual ID you want to fetch)
//       getAllDineinn();
     
//       getDineinnById(1);
//     }, []);
  

//     return (
//       <div>
//       <center> <h1>Dineinn Details</h1></center>
 
//        {/* Display data for a single room service by ID */}
//        {dineinn && (
//          <div className='order-form'>
//            <h2>Dineinn ID: {dineinn.id}</h2>
//            <p>Type: {dineinn.type}</p>
//            <p>Table Number: {dineinn.tablenumber}</p>
//            <p>Items: {dineinn.items}</p>
//            <p>Unit: {dineinn.unit}</p>
//            <p>Price: {dineinn.price}</p>
//            <p>Total: {dineinn.total}</p>
//            <p>GST: {dineinn.gst}</p>
//            <p>Net Total: {dineinn.nettotal}</p>
//            <button type="submit">Back</button>
//             <button type="submit">Print</button>
//          </div>
//        )}
//   </div>
//         );
// }

// export default Dineinn;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Takeaway.css';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

// function TakeawayComponent() {
//   const [Dineinn, setDineinn] = useState(null);

//   const getDineinnById = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8081/api-v1/get/${id}`);
//       setDineinn(response.data);
//     } catch (error) {
//       console.error('Error fetching Dineinn by ID:', error);
//     }
//   };

//   useEffect(() => {
//     getDineinnById(2); // Fetching data with ID 2
//   }, []);

//   const getCurrentDateTime = () => {
//     const currentDate = new Date();
//     return currentDate.toLocaleString();
//   };


//   const printPdf = () => {
//     const input = document.getElementById('Dineinn-details');

//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/jpg');
//       const pdf = new jsPDF('p', 'mm', 'a1');
//       const width = pdf.internal.pageSize.getWidth();
//       const height = pdf.internal.pageSize.getHeight();
//       const scaleFactor = 0;
//       pdf.addImage(imgData, 'JPG', 0, 0, width*scaleFactor, height*scaleFactor);
//       pdf.save('Dineinn-details.pdf');
//     });
//   };

//   return (
//     <>
//     <div className="bill-container" id="Dineinn-details">
//       <div className="bill-heading">
//        {/* <h1 className="bill-heading">Takeaway Details</h1> */}

//         <img src="https://www.bestfreewebresources.com/wp-content/uploads/2012/02/hotel-logo-12.png" alt="HMS" className="logo" />
//           <div className='time'>
//       <p>{getCurrentDateTime()}</p>
//     </div>
//       </div>
      
//          <h3 className='heading'>Hotel Taj</h3>
//         <div className='left1'>2-4-234/45, </div>
//         <div className='left2'>Swaroop Nagar, Uppal,</div>
//         <div className='left'>Medchal-Malkajgiri-500039</div>
      
//         <div className="additional">
//         {Dineinn && (
//           <>
//             <p style={{marginLeft:"25cm",marginTop:"-2cm"}}><strong>Customer name:</strong> {Dineinn.customername}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Mobile number:</strong> {Dineinn.mobilenumber}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Id:</strong> {Dineinn.id}</p>
//           </>
//         )}
//       </div>
//       <table className="takeaway-table">
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Tablenumber</th>
//             <th>Items</th>
//             <th>Unit</th>
//             <th>Price</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Dineinn && (
//             <tr>
//               <td>{Dineinn.type}</td>
//               <td>{Dineinn.tablenumber}</td>
//               <td>{Dineinn.items}</td>
//               <td>{Dineinn.unit}</td>
//               <td>{Dineinn.price}</td>
//               <td>{Dineinn.total}</td>
//               </tr>
           
//           )}
//         </tbody>
//       </table>
//       <div className="additional-details">
//         {Dineinn && (
//           <>
//             <p style={{marginLeft:"25cm"}}><strong>Delivery Charge:</strong> {Dineinn.deliverycharge}</p>
//             <p style={{marginLeft:"25cm"}}><strong>GST:</strong> {Dineinn.gst}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Net Total:</strong> {Dineinn.nettotal}</p>
//           </>
//         )}
//       </div>
//     </div>
//     <div className="bill-buttons">
//     <button type="button" onClick={printPdf} className="print-button">Print</button>
//   </div>
//   </>
//   );
// }

// export default TakeawayComponent;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dineinn.css'; // Import CSS file for styling

const Dineinn = () => {
  const [dineinns, setDineinns] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8105/dineinn/all');
        setDineinns(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleSearch = () => {
    const foundDineinn = dineinns.find(dineinn => dineinn.id.toString() === searchId);
    setSearchResult(foundDineinn);
  };

  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString(); // Convert to local date and time string
  };

  return (
    <div className="dineinn-container">
      <h2>Dineinns</h2>
      <p className="date-time">{getCurrentDateTime()}</p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResult && (
        <div className="search-result">
          <h3>Search Result</h3>
          <table>
            <tbody>
              <tr>
                <td>Id:</td>
                <td>{searchResult.id}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>{searchResult.type}</td>
              </tr>
              <tr>
                <td>Table number:</td>
                <td>{searchResult.tablenumber}</td>
              </tr>
              <tr>
                <td>Customer Name:</td>
                <td>{searchResult.customername}</td>
              </tr>
              <tr>
                <td>Items:</td>
                <td>{searchResult.items ? searchResult.items.join(', ') : ''}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>{searchResult.price ? searchResult.price.join(', ') : ''}</td>
              </tr>
              <tr>
                <td>Quantity:</td>
                <td>{searchResult.quantity ? searchResult.quantity.join(', ') : ''}</td>
              </tr>
              <tr>
                <td>Mobile Number:</td>
                <td>{searchResult.mobilenumber}</td>
              </tr>
              <tr>
                <td>Service charge:</td>
                <td>{searchResult.servicecharge}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{searchResult.total}</td>
              </tr>
              <tr>
                <td>GST:</td>
                <td>{searchResult.gst}</td>
              </tr>
              <tr>
                <td>Nettotal:</td>
                <td>{searchResult.nettotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <table className="dineinn-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Table Number</th>
            <th>Customer Name</th>
            <th>Mobile Number</th>
            <th>Items</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>GST</th>
            <th>Net Total</th>
          </tr>
        </thead>
        <tbody>
          {dineinns.map(dineinn => (
            <tr key={dineinn.id}>
              <td>{dineinn.id}</td>
              <td>{dineinn.type}</td>
              <td>{dineinn.tablenumber}</td>
              <td>{dineinn.customername}</td>
              <td>{dineinn.mobilenumber}</td>
              <td>{dineinn.items ? dineinn.items.join(', ') : ''}</td>
              <td>{dineinn.price}</td> 
              <td>{dineinn.quantity}</td> 
              <td>{dineinn.total}</td>
              <td>{dineinn.gst}</td>
              <td>{dineinn.nettotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dineinn;
