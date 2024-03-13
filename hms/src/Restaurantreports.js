// import React, { useState } from 'react';

// function Restaurantreports() {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [selectedRoomServiceType, setSelectedRoomServiceType] = useState('');
//   const [selectedDineinTable, setSelectedDineinTable] = useState('All');
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [tableData, setTableData] = useState([]);
//   const [showNoDataPopup, setShowNoDataPopup] = useState(false);

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     setSelectedType('');
//     setSelectedRoomServiceType('');
//   };

//   const handleTypeChange = (e) => {
//     setSelectedType(e.target.value);
//     setSelectedRoomServiceType('');
//     setFromDate('');
//     setToDate('');
//     if (e.target.value === "Dinein") {
//       setSelectedType("Dinein");
//     }
//   };

//   const handleRoomServiceTypeChange = (e) => {
//     setSelectedRoomServiceType(e.target.value);
//   };

//   const handleDineinTableChange = (e) => {
//     setSelectedDineinTable(e.target.value);
//   };

//   const handleFromDateChange = (e) => {
//     setFromDate(e.target.value);
//   };

//   const handleToDateChange = (e) => {
//     setToDate(e.target.value);
//   };

//   const handleGenerateReport = () => {
//     fetchReportData(selectedRoomServiceType, selectedDineinTable, fromDate, toDate);
//   };

//   const fetchReportData = (roomServiceType, dineinTable, fromDate, toDate) => {
//     const dummyData = [
//       { orderId: 4, customerId: 4, customerName: 'Alex Turner', fromDate: '2024-02-24',  time: '6:00 PM', bill: 25, type: 'Takeaway' },
//       { orderId: 5, customerId: 5, customerName: 'Sophia Anderson', fromDate: '2024-02-25',  time: '5:30 PM', bill: 30, type: 'Takeaway' },
  
//       { orderId: 11, tableNo: 'Table 1', customerId: 11, customerName: 'John Doe', fromDate: '2024-02-21',  time: '12:00 PM', bill: 200 },
//       { orderId: 12, tableNo: 'Table 2', customerId: 12, customerName: 'Jane Smith', fromDate: '2024-02-22',  time: '11:00 AM', bill: 220 },
//       { orderId: 13, tableNo: 'Table 3', customerId: 13, customerName: 'Michael Johnson', fromDate: '2024-02-20', time: '10:30 AM', bill: 190 },
//       { orderId: 14, tableNo: 'Table 4', customerId: 14, customerName: 'Emily Davis', fromDate: '2024-02-23', time: '1:00 PM', bill: 210 },
//       { orderId: 15, tableNo: 'Table 5', customerId: 15, customerName: 'David Brown', fromDate: '2024-02-19',  time: '12:30 PM', bill: 195 }
//     ];
  
//     let filteredData = [];
//     if (selectedType === "roomservice") {
//       filteredData = dummyData.filter(item => ['Premium Suite', 'Deluxe Suite', 'Classic Deluxe'].includes(item.type));
//     } else if (selectedType === "Takeaway") {
//       filteredData = dummyData.filter(item => item.type === 'Takeaway');
//     } else if (selectedType === "Dinein") {
//       filteredData = dummyData.filter(item => {
//         return item.tableNo && (item.tableNo === dineinTable || dineinTable === 'All');
//       });
//     }
  
//     setTableData(filteredData);
//     setShowNoDataPopup(filteredData.length === 0);
//   };
  
  
  
  

//   return (
//     <div className="reports">
//       <h2><b>Reports</b></h2>
//       <div>
//         <label htmlFor="categoryDropdown">Select the category: </label>
//         <select id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange}>
//           <option value="">--Select--</option>
//           <option value="hotel">Hotel</option>
//           <option value="restaurant">Restaurant</option>
//         </select>
//       </div>
//       {selectedCategory === "restaurant" && (
//         <div>
//           <label htmlFor="typeDropdown">Select the type: </label>
//           <select id="typeDropdown" value={selectedType} onChange={handleTypeChange}>
//             <option value="">--Select--</option>
//             <option value="roomservice">Room Service</option>
//             <option value="Takeaway">Takeaway</option>
//             <option value="Dinein">Dine-in</option>
//           </select>
//         </div>
//       )}

//       {selectedType === "Dinein" && (
//         <>
//           <div>
//             <label htmlFor="dineinTable">Select Dine-in Table: </label>
//             <select id="dineinTable" value={selectedDineinTable} onChange={handleDineinTableChange}>
//               <option value="All">All</option>
//               <option value="Table 1">Table 1</option>
//               <option value="Table 2">Table 2</option>
//               <option value="Table 3">Table 3</option>
//               <option value="Table 4">Table 4</option>
//               <option value="Table 5">Table 5</option>
//             </select>
//           </div>
//         </>
//       )}

//       {(selectedType === "roomservice" || selectedType === "Takeaway" || selectedType === "Dinein") && (
//         <>
//           <div>
//             <label htmlFor="fromDate">From Date: </label>
//             <input type="date" id="fromDate" value={fromDate} onChange={handleFromDateChange} />
//           </div>
//           <div>
//             <label htmlFor="toDate">To Date: </label>
//             <input type="date" id="toDate" value={toDate} onChange={handleToDateChange} />
//           </div>
//         </>
//       )}

//       <div>
//         <button onClick={handleGenerateReport}><b>Submit</b></button>
//       </div>

//       {tableData.length > 0 && (
//         <div>
//           <h3>Generated Report</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 {(selectedType === "roomservice" || selectedType === "Dinein") && <th>{selectedType === "roomservice" ? "Room No" : "Table No"}</th>}
//                 <th>Customer ID</th>
//                 <th>Customer Name</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Bill</th>
//                 {selectedType === "roomservice" && <th>Room Type</th>}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((data, index) => (
//                 <tr key={index}>
//                   <td>{data.orderId}</td>
//                   {(selectedType === "roomservice" || selectedType === "Dinein") && <td>{selectedType === "roomservice" ? data.roomNo : data.tableNo}</td>}
//                   <td>{data.customerId}</td>
//                   <td>{data.customerName}</td>
//                   <td>{data.fromDate}</td>
//                   <td>{data.time}</td>
//                   <td>{data.bill}</td>
//                   {selectedType === "roomservice" && <td>{data.type}</td>}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {showNoDataPopup && (
//         <div className="popup">
//           <p>No reports available for the selected criteria.</p>
//           <button onClick={() => setShowNoDataPopup(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Restaurantreports;
import React, { useState } from 'react';

function Restaurantreports() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedRoomServiceType, setSelectedRoomServiceType] = useState('');
  const [selectedDineinTable, setSelectedDineinTable] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [tableData, setTableData] = useState([]);
  const [showNoDataPopup, setShowNoDataPopup] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedType('');
    setSelectedRoomServiceType('');
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedRoomServiceType('');
    setFromDate('');
    setToDate('');
    if (e.target.value === "Dinein") {
      setSelectedType("Dinein");
    }
  };

  const handleRoomServiceTypeChange = (e) => {
    setSelectedRoomServiceType(e.target.value);
  };

  const handleDineinTableChange = (e) => {
    setSelectedDineinTable(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleGenerateReport = () => {
    fetchReportData(selectedRoomServiceType, selectedDineinTable, fromDate, toDate);
  };

  const fetchReportData = (roomServiceType, dineinTable, fromDate, toDate) => {
    const dummyData = [
      {  orderId: 1,customerId: 1, customerName: 'John Doe',roomNo: 101, type: 'Premium Suite', fromDate: '2024-02-21', toDate: '2024-02-25',time: '12:00 PM', bill: 500 },
      {  orderId: 2,customerId: 2, customerName: 'Jane Smith',roomNo: 102, type: 'Deluxe Suite', fromDate: '2024-02-22', toDate: '2024-02-26',time: '12:00 PM', bill: 600 },
      {  orderId: 3,customerId: 3, customerName: 'Alice Johnson',roomNo: 103, type: 'Classic Deluxe', fromDate: '2024-02-23', toDate: '2024-02-27',time: '12:00 PM', bill: 700 },
      { orderId: 4, customerId: 4, customerName: 'Alex Turner', fromDate: '2024-02-24',toDate: '2024-02-24',  time: '6:00 PM', bill: 25, type: 'Takeaway' },
      { orderId: 5, customerId: 5, customerName: 'Sophia Anderson', fromDate: '2024-02-25',toDate: '2024-02-25',  time: '5:30 PM', bill: 30, type: 'Takeaway' },

      { orderId: 11, tableNo: 'Table 1', customerId: 11, customerName: 'John Doe', fromDate: '2024-02-21',toDate: '2024-02-21',  time: '12:00 PM', bill: 200 },
      { orderId: 12, tableNo: 'Table 2', customerId: 12, customerName: 'Jane Smith', fromDate: '2024-02-22',toDate: '2024-02-22',  time: '11:00 AM', bill: 220 },
      { orderId: 13, tableNo: 'Table 3', customerId: 13, customerName: 'Michael Johnson', fromDate: '2024-02-20',toDate: '2024-02-20', time: '10:30 AM', bill: 190 },
      { orderId: 14, tableNo: 'Table 4', customerId: 14, customerName: 'Emily Davis', fromDate: '2024-02-23',toDate: '2024-02-23', time: '1:00 PM', bill: 210 },
      { orderId: 15, tableNo: 'Table 5', customerId: 15, customerName: 'David Brown', fromDate: '2024-02-19',toDate: '2024-02-19',  time: '12:30 PM', bill: 195 }
    ];
  
    let filteredData = [];
    if (selectedType === "roomservice") {
      filteredData = dummyData.filter(item => ['Premium Suite', 'Deluxe Suite', 'Classic Deluxe'].includes(item.type));
    } else if (selectedType === "Takeaway") {
      filteredData = dummyData.filter(item => item.type === 'Takeaway');
    } else if (selectedType === "Dinein") {
      filteredData = dummyData.filter(item => {
        return item.tableNo && (item.tableNo === dineinTable || dineinTable === 'All');
      });
    }
  
    setTableData(filteredData);
    setShowNoDataPopup(filteredData.length === 0);
  };

  return (
    <div className="reports">
      <h2><b>Reports</b></h2>
      <div className='rr1' style={{marginLeft:"15cm",marginTop:"0cm"}}>
        <label htmlFor="categoryDropdown"><b>Select the category{'\t'}: </b></label>
        <select id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange} style={{marginLeft:"0.2cm",width:"4cm",textAlign:"center"}}>
          <option value="">--Select--</option>
          <option value="hotel">Hotel</option>
          <option value="restaurant">Restaurant</option>
        </select>
      </div>
      {selectedCategory === "restaurant" && (
        <div className='rr2'style={{marginLeft:"8cm",marginTop:"1cm"}}>
          {/* <label htmlFor="typeDropdown">Select the type: </label> */}
          <select id="typeDropdown" value={selectedType} onChange={handleTypeChange} style={{width:"4cm",textAlign:"center"}}>
            <option value="">--Select--</option>
            <option value="roomservice">Room Service</option>
            <option value="Takeaway">Takeaway</option>
            <option value="Dinein">Dine-in</option>
          </select>
        </div>
      )}

      {selectedType === "Dinein" && (
        <>
          <div className='rr5' style={{marginLeft:"13cm",marginTop:"-0.6cm"}}>
            {/* <label htmlFor="dineinTable">Select Dine-in Table: </label> */}
            <select id="dineinTable" value={selectedDineinTable} onChange={handleDineinTableChange} style={{width:"3.5cm"}}>
              <option value="All">All</option>
              <option value="Table 1">Table 1</option>
              <option value="Table 2">Table 2</option>
              <option value="Table 3">Table 3</option>
              <option value="Table 4">Table 4</option>
              <option value="Table 5">Table 5</option>
            </select>
          </div>
        </>
      )}

      {(selectedType === "roomservice" || selectedType === "Takeaway" || selectedType === "Dinein") && (
        <>
          <div className='rr3' style={{marginLeft:"17cm",marginTop:"-0.69cm"}}>
            {/* <label htmlFor="fromDate">From Date: </label> */}
            <input type="date" id="fromDate" value={fromDate} onChange={handleFromDateChange} style={{width:"4.5cm",textAlign:"center"}}/>
          </div>
          <div className='rr4' style={{marginLeft:"24cm",marginTop:"-0.69cm"}}>
            {/* <label htmlFor="toDate">To Date: </label> */}
            <input type="date" id="toDate" value={toDate} onChange={handleToDateChange} />
          </div>
        </>
      )}

      <div className='rr4' style={{marginLeft:"30cm",marginTop:"-0.65cm"}}>
        <button onClick={handleGenerateReport}><b>Submit</b></button>
      </div>

      {tableData.length > 0 && (
        <div>
          <h3>Generated Report</h3>
          <table style={{width:"31cm",marginLeft:"7cm"}}>
            <thead>
              <tr>
                <th>Order ID</th>
                {(selectedType === "roomservice" || selectedType === "Dinein") && <th>{selectedType === "roomservice" ? "Room No" : "Table No"}</th>}
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Bill</th>
                {selectedType === "roomservice" && <th>Room Type</th>}
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.orderId}</td>
                  {(selectedType === "roomservice" || selectedType === "Dinein") && <td>{selectedType === "roomservice" ? data.roomNo : data.tableNo}</td>}
                  <td>{data.customerId}</td>
                  <td>{data.customerName}</td>
                  <td>{data.fromDate}</td>
                  <td>{data.time}</td>
                  <td>{data.bill}</td>
                  {selectedType === "roomservice" && <td>{data.type}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showNoDataPopup && (
        <div className="popup">
          <p>No reports available for the selected criteria.</p>
          <button onClick={() => setShowNoDataPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Restaurantreports;
