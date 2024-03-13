// import {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import './Admindashboard.css';
// import './Repostat.css'

// function Repostat() {
//     const [customers, setCustomers] = useState([]);

//     useEffect(() => {
    
//         axios.get('http://localhost:8100/customers/getAll')
//           .then(response => {
//             // Set the data in the state
//             setCustomers(response.data);
//           })
//           .catch(error => {
//             console.error('Error fetching data:', error);
//           });
//       }, []);
//       const currentDate = new Date();
  
//       // Format the date and time
//       const formattedDate = currentDate.toLocaleDateString();
//       const formattedTime = currentDate.toLocaleTimeString();
//     return (
//         <>
//            <div className="containerad">
//           <div className="sidebar">
//         <ul>
//         <Link to={"/Allorders"} style={{textDecoration:"none"}}>
//           <li><a href="#" style={{marginLeft:"-0.2cm"}}>Orders</a></li>
//           </Link>
//           <Link to={'/Repostat'}>
//           <li><a href="#" style={{marginLeft:"-0.3cm"}}>Reports</a></li>
//           </Link>
//           <li><a href="#" style={{marginLeft:"-0.7cm"}}>MenuItems</a></li>
//           <Link to={'/LoginCard'}>
//           <li><a href='/LoginCard' style={{marginLeft:"-0.4cm"}}>Signout</a></li>
//           </Link>
//         </ul>
//       </div>
        
//                 </div>
//                     <h3 className="customer" style={{marginTop:"0cm"}}>Date:{formattedDate} </h3>
//                     <h3 className="customer" style={{marginTop:"1cm"}}>Time:{formattedTime} </h3>
                
//                 <h3 className="customers" style={{marginTop:"2cm"}}>Customer ID :</h3>
//                 <div className='container'>
//                         <h1 className='text-center' style={{marginTop:"2cm",marginLeft:"4cm"}}>Status</h1><br/>
//                         <div className="table-responsive">
//                         <table className='table table-striped table-sm' style={{marginLeft:"2cm"}}>
//                             <thead>
//                             <tr>
//                                 <th>date</th>
//                                 <th>booked</th>
//                                 <th>available</th>
//                                 <th>check_out</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {customers.map((customer) => (
//                                 <tr key={customer.date}>
//                                 <td>{customer.date}</td>
//                                 <td>{customer.booked}</td>
//                                 <td>{customer.available}</td>
//                                 <td>{customer.check_out}</td>
//                                 </tr>
//                             ))}
//                             </tbody>
//                         </table>
//                         <Link to={'/Orders'}>
//                         <button type='submit' style={{marginTop:"8cm",marginLeft:"2cm"}}>Back</button>
//                         </Link>
//                         </div>
                       
//                     </div>

           
                

              
           
            
//         </>
//     );
// }


// export default Repostat;
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Admindashboard.css';
import './Repostat.css'

function Repostat() {
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
      
      { orderId: 4, customerId: 4, customerName: 'Alex Turner', fromDate: '2024-02-24',  time: '6:00 PM', bill: 25, type: 'Takeaway' },
      { orderId: 5, customerId: 5, customerName: 'Sophia Anderson', fromDate: '2024-02-25',  time: '5:30 PM', bill: 30, type: 'Takeaway' },
  
      { orderId: 11, tableNo: 'Table 1', customerId: 11, customerName: 'John Doe', fromDate: '2024-02-21',  time: '12:00 PM', bill: 200 },
      { orderId: 12, tableNo: 'Table 2', customerId: 12, customerName: 'Jane Smith', fromDate: '2024-02-22',  time: '11:00 AM', bill: 220 },
      { orderId: 13, tableNo: 'Table 3', customerId: 13, customerName: 'Michael Johnson', fromDate: '2024-02-20', time: '10:30 AM', bill: 190 },
      { orderId: 14, tableNo: 'Table 4', customerId: 14, customerName: 'Emily Davis', fromDate: '2024-02-23', time: '1:00 PM', bill: 210 },
      { orderId: 15, tableNo: 'Table 5', customerId: 15, customerName: 'David Brown', fromDate: '2024-02-19',  time: '12:30 PM', bill: 195 }
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
  
      const currentDate = new Date();
  
      // Format the date and time
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();
    return (
        <>
           <div className="containerad">
          <div className="sidebar">
        <ul>
        <Link to={"/Allorders"} style={{textDecoration:"none"}}>
          <li><a href="#" style={{marginLeft:"-0.2cm"}}>Orders</a></li>
          </Link>
          <Link to={'/Repostat'}>
          <li><a href="#" style={{marginLeft:"-0.3cm"}}>Reports</a></li>
          </Link>
          <li><a href="#" style={{marginLeft:"-0.7cm"}}>MenuItems</a></li>
          <Link to={'/LoginCard'}>
          <li><a href='/LoginCard' style={{marginLeft:"-0.4cm"}}>Signout</a></li>
          </Link>
        </ul>
      </div>
        
                </div>
                    <h3 className="customer" style={{marginTop:"0cm"}}>Date:{formattedDate} </h3>
                    <h3 className="customer" style={{marginTop:"1cm"}}>Time:{formattedTime} </h3>
                
                {/* <h3 className="customers" style={{marginTop:"2cm"}}>Customer ID :</h3> */}
                <div className='container'>
                        <h1 className='text-center' style={{marginTop:"0cm",marginLeft:"4cm"}}>Status</h1><br/>
                        <div className="table-responsive">
                       
                        <div className="reports">
      {/* <h2><b>Reports</b></h2> */}
      <div className="r1" style={{marginLeft:"5cm",marginTop:"1cm"}}>
        <label htmlFor="categoryDropdown">Select the category: </label>
        <select id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">--Select--</option>
          {/* <option value="hotel">Hotel</option> */}
          <option value="restaurant">Restaurant</option>
        </select>
      </div>
      {selectedCategory === "restaurant" && (
        <div className="r2" style={{marginLeft:"5cm",marginTop:"0.3cm"}}>
          <label htmlFor="typeDropdown">Select the type: </label>
          <select id="typeDropdown" value={selectedType} onChange={handleTypeChange}>
            <option value="">--Select--</option>
            <option value="roomservice">Room Service</option>
            <option value="Takeaway">Takeaway</option>
            <option value="Dinein">Dine-in</option>
          </select>
        </div>
      )}

      {selectedType === "Dinein" && (
        <>
          <div className="r3" style={{marginLeft:"5cm",marginTop:"0.3cm"}}>
            <label htmlFor="dineinTable">Select Dine-in Table: </label>
            <select id="dineinTable" value={selectedDineinTable} onChange={handleDineinTableChange}>
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
          <div className="r4" style={{marginLeft:"5cm",marginTop:"0.3cm"}}>
            <label htmlFor="fromDate">From Date: </label>
            <input type="date" id="fromDate" value={fromDate} onChange={handleFromDateChange} />
          </div>
          <div className="r5" style={{marginLeft:"5cm",marginTop:"0.3cm"}}>
            <label htmlFor="toDate">To Date: </label>
            <input type="date" id="toDate" value={toDate} onChange={handleToDateChange} />
          </div>
        </>
      )}

      <div className="r6" style={{marginLeft:"6.5cm",marginTop:"1cm"}}>
        <button onClick={handleGenerateReport}><b>Submit</b></button>
      </div>

      {tableData.length > 0 && (
        <div>
          <h3 style={{marginLeft:"1cm"}}>Generated Report</h3>
          <table style={{width:"31cm",marginLeft:"2cm"}}>
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
                        <Link to={'/Orders'}>
                        <button type='submit' style={{marginTop:"1cm",marginLeft:"2cm"}}>Back</button>
                        </Link>
                        </div>
                       
                    </div>

           {showNoDataPopup && (
        <div className="popup">
          <p>No reports available for the selected criteria.</p>
          <button onClick={() => setShowNoDataPopup(false)}>Close</button>
        </div>
      )}
    </div>
    </>
  );
}

export default Repostat;
