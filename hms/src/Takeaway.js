// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Takeaway.css';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

// function TakeawayComponent() {
//   const [takeaway, setTakeaway] = useState(null);

//   const getTakeawayById = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8081/api-v1/get/${id}`);
//       setTakeaway(response.data);
//     } catch (error) {
//       console.error('Error fetching takeaway by ID:', error);
//     }
//   };

//   useEffect(() => {
//     getTakeawayById(2); // Fetching data with ID 2
//   }, []);

//   const getCurrentDateTime = () => {
//     const currentDate = new Date();
//     return currentDate.toLocaleString();
//   };


//   const printPdf = () => {
//     const input = document.getElementById('takeaway-details');

//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/jpg');
//       const pdf = new jsPDF('p', 'mm', 'a1');
//       const width = pdf.internal.pageSize.getWidth();
//       const height = pdf.internal.pageSize.getHeight();
//       const scaleFactor = 0;
//       pdf.addImage(imgData, 'JPG', 0, 0, width*scaleFactor, height*scaleFactor);
//       pdf.save('takeaway-details.pdf');
//     });
//   };

//   return (
//     <>
//     <div className="bill-container" id="takeaway-details">
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
//         {takeaway && (
//           <>
//             <p style={{marginLeft:"25cm",marginTop:"-2cm"}}><strong>Customer name:</strong> {takeaway.customername}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Mobile number:</strong> {takeaway.mobilenumber}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Id:</strong> {takeaway.id}</p>
//           </>
//         )}
//       </div>
//       <table className="takeaway-table">
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Payment Type</th>
//             <th>Items</th>
//             <th>Unit</th>
//             <th>Price</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {takeaway && (
//             <tr>
//               <td>{takeaway.type}</td>
//               <td>{takeaway.paymenttype}</td>
//               <td>{takeaway.items}</td>
//               <td>{takeaway.unit}</td>
//               <td>{takeaway.price}</td>
//               <td>{takeaway.total}</td>
//               </tr>
           
//           )}
//         </tbody>
//       </table>
//       <div className="additional-details">
//         {takeaway && (
//           <>
//             <p style={{marginLeft:"25cm"}}><strong>Delivery Charge:</strong> {takeaway.deliverycharge}</p>
//             <p style={{marginLeft:"25cm"}}><strong>GST:</strong> {takeaway.gst}</p>
//             <p style={{marginLeft:"25cm"}}><strong>Net Total:</strong> {takeaway.nettotal}</p>
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
import './Takeaway.css'; // Import CSS file for styling

const Takeaway = () => {
  const [takeaways, setTakeaways] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchTakeaways = async () => {
      try {
        const response = await axios.get('http://localhost:8105/takeaway/all');
        setTakeaways(response.data);
      } catch (error) {
        console.error('Error fetching takeaways:', error);
      }
    };

    fetchTakeaways();
  }, []);

  const handleSearch = () => {
    const foundTakeaway = takeaways.find(takeaway => takeaway.id.toString() === searchId);
    setSearchResult(foundTakeaway);
  };
  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString(); // Convert to local date and time string
  };



  return (
    <div className="takeaway-container"> {/ Apply container class /}
      <h2>Takeaways</h2>
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
          <p>ID: {searchResult.id}</p>
          <p>Type: {searchResult.type}</p>
          <p>Customer Name: {searchResult.customername}</p>
          <p>Mobile Number: {searchResult.mobilenumber}</p>
          <p>Items: {searchResult.items}</p>
          <p>Price: {searchResult.price}</p>
          <p>Quantity: {searchResult.quantity}</p>
          <p>Total: {searchResult.total}</p>
          <p>GST: {searchResult.gst}</p>
          <p>Net Total: {searchResult.nettotal}</p>
        </div>
      )}
      <table className="takeaway-table"> {/ Apply table class /}
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
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
          {takeaways.map(takeaway => (
            <tr key={takeaway.id}>
              <td>{takeaway.id}</td>
              <td>{takeaway.type}</td>
              <td>{takeaway.customername}</td>
              <td>{takeaway.mobilenumber}</td>
              <td>{takeaway.items}</td>
              <td>{takeaway.price}</td>
              <td>{takeaway.quantity}</td>
              <td>{takeaway.total}</td>
              <td>{takeaway.gst}</td>
              <td>{takeaway.nettotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Takeaway;



