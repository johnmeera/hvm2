// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Roomservice.css';

// function Roomservice() {
  
//   const [roomService, setRoomService] = useState(null);

  
//   const [AllRoomServices, setAllRoomServices] = useState([]);

  
//   const getRoomServiceById = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8181/api-v1/get/${id}`);
//       setRoomService(response.data);
//     } catch (error) {
//       console.error('Error fetching room service by ID:', error);
//     }
//   };

  
//   const getAllRoomServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:8181/api-v1/updateStatus');
//       setAllRoomServices(response.data);
//     } catch (error) {
//       console.error('Error fetching all room services:', error);
//     }
//   };

  
//   useEffect(() => {
//     getRoomServiceById(1);

//     getAllRoomServices();
//   }, []);

//   return (
//     <div>
      
//      <center> <h1>Room Service Details</h1></center>
     
      
//       {roomService && (
//         <div className='order-form'>
//           <h1>Hotel bills</h1>
//           <h3>Room Service ID: {roomService.id}</h3>
          
//           <p>Type: {roomService.type}</p>
//           <p>Room: {roomService.room}</p>
//           <p>Customer Name: {roomService.customername}</p>
//           <p>Mobile Number: {roomService.mobilenumber}</p>
//           <p>Order Placed: {roomService.orderplaced}</p>
//           <p>Status: {roomService.status}</p>
//           <p>Items: {roomService.items}</p>
//           <p>Unit: {roomService.unit}</p>
//           <p>Price: {roomService.price}</p>
//           <p>Service Charge: {roomService.servicecharge}</p>
//           <p>Total: {roomService.total}</p>
//           <p>GST: {roomService.gst}</p>
//           <p>Net Total: {roomService.nettotal}</p>
//           <p>Bill: {roomService.bill}</p>
//           <button type="submit">Back</button>
//             <button type="submit">Print</button>
            
//         </div>
//       )}
//  </div>
     
   
//   );
// }

// export default Roomservice;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Takeaway.css';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

// function Roomservice() {
//   const [roomService, setRoomService] = useState(null);

//   const getRoomServiceById = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8081/api-v1/get/${id}`);
//       setRoomService(response.data);
//     } catch (error) {
//       console.error('Error fetching room service by ID:', error);
//     }
//   };

//   useEffect(() => {
//     getRoomServiceById(2); // Fetching data with ID 2
//   }, []);

//   const getCurrentDateTime = () => {
//     const currentDate = new Date();
//     return currentDate.toLocaleString();
//   };


//   const printPdf = () => {
//     const input = document.getElementById('roomservice-details');

//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/jpg');
//       const pdf = new jsPDF('p', 'mm', 'a1');
//       const width = pdf.internal.pageSize.getWidth();
//       const height = pdf.internal.pageSize.getHeight();
//       const scaleFactor = 0;
//       pdf.addImage(imgData, 'JPG', 0, 0, width*scaleFactor, height*scaleFactor);
//       pdf.save('roomservice-details.pdf');
//     });
//   };

//   return (
//     <>
//     <div className="bill-container" id="roomservice-details">
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
//         {roomService && (
//           <>
//             <p style={{marginLeft:"25cm",marginTop:"-2cm"}}><strong>Customer name:</strong> {roomService.customername}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Mobile number:</strong> {roomService.mobilenumber}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Id:</strong> {roomService.id}</p>
//           </>
//         )}
//       </div>
//       <table className="takeaway-table">
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Room</th>
//             <th>customername</th>
//             <th>mobilenumber</th>
//             <th>Orderplaced</th>
//             <th>Status</th>
//             <th>Bill</th>
//             <th>Items</th>
//             <th>Unit</th>
//             <th>Price</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {roomService && (
//             <tr>
//               <td>{roomService.type}</td>
//               <td>{roomService.room}</td>
//               <td>{roomService.customername}</td>
//               <td>{roomService.mobilenumber}</td>
//               <td>{roomService.orderplaced}</td>
//               <td>{roomService.status}</td>
//               <td>{roomService.bill}</td>
//               <td>{roomService.items}</td>
//               <td>{roomService.unit}</td>
//               <td>{roomService.price}</td>
//               <td>{roomService.total}</td>
//               </tr>
           
//           )}
//         </tbody>
//       </table>
//       <div className="additional-details">
//         {roomService && (
//           <>
//             <p style={{marginLeft:"25cm"}}><strong>Delivery Charge:</strong> {roomService.deliverycharge}</p>
//             <p style={{marginLeft:"25cm"}}><strong>GST:</strong> {roomService.gst}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Net Total:</strong> {roomService.nettotal}</p>
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

// export default Roomservice;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Roomservice.css';

function Roomservice() {
  const [roomserviceData, setRoomserviceData] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    // Fetch Roomservice data from backend when component mounts
    axios.get('http://localhost:8105/room/all')
      .then(response => {
        // Assuming the response data structure contains deserialized items, price, and quantity
        setRoomserviceData(response.data);
      })
      .catch(error => {
        console.error('Error fetching Roomservice data:', error);
      });
  }, []); // Empty dependency array to run effect only once

  const handleSearch = () => {
    // Find room service data by ID
    const foundRoomservice = roomserviceData.find(item => item.id === parseInt(searchId));
    setSearchResult(foundRoomservice);
  };

  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString(); // Convert to local date and time string
  };

  return (
    <div className="roomservice-container">
      <h1>Roomservice Data</h1>
      <p className="date-time">{getCurrentDateTime()}</p>
      
      {/ Input field for entering ID /}
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter ID"
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResult && (
        <div className="search-result">
          <h2>Details for ID: {searchId}</h2>
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
                <td>Room Type:</td>
                <td>{searchResult.roomtype}</td>
              </tr>
              <tr>
                <td>Customer Name:</td>
                <td>{searchResult.customername}</td>
              </tr>
              <tr>
                <td>Items:</td>
                <td>{searchResult.items.join(', ')}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>{searchResult.price.join(', ')}</td>
              </tr>
              <tr>
                <td>Quantity:</td>
                <td>{searchResult.quantity.join(', ')}</td>
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

      <h2>All Roomservice Data</h2>
      <table className="roomservice-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Room Type</th>
            <th>Customer Name</th>
            <th>Items</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Mobile Number</th>
            <th>Service charge</th>
            <th>Total</th>
            <th>GST</th>
            <th>Nettotal</th>
          </tr>
        </thead>
        <tbody>
          {roomserviceData.map(roomservice => (
            <tr key={roomservice.id}>
              <td>{roomservice.id}</td>
              <td>{roomservice.type}</td>
              <td>{roomservice.roomtype}</td>
              <td>{roomservice.customername}</td>
              <td>{roomservice.items.join(', ')}</td>
              <td>{roomservice.price.join(', ')}</td>
              <td>{roomservice.quantity.join(', ')}</td>
              <td>{roomservice.mobilenumber}</td>
              <td>{roomservice.servicecharge}</td>
              <td>{roomservice.total}</td>
              <td>{roomservice.gst}</td>
              <td>{roomservice.nettotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Roomservice;