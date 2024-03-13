import React, { useState ,Link} from 'react';
import Restaurantreports from './Restaurantreports';

function Hotelreports() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [selectedAddonService, setSelectedAddonService] = useState('');
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const [selectedFoodSubType, setSelectedFoodSubType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [tableData, setTableData] = useState([]);
  const [showNoDataPopup, setShowNoDataPopup] = useState(false);
 const [renderRestaurantReports, setRenderRestaurantReports] = useState(false);


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedType('');
    setSelectedRoomType('');
    setSelectedAddonService('');
    setSelectedFoodType('');
    setSelectedFoodSubType('');
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedRoomType('');
    setSelectedAddonService('');
    setSelectedFoodType('');
    setSelectedFoodSubType('');
  };

  const handleRoomTypeChange = (e) => {
    setSelectedRoomType(e.target.value);
    setSelectedAddonService('');
  };

  const handleAddonServiceChange = (e) => {
    setSelectedAddonService(e.target.value);
  };

  const handleFoodTypeChange = (e) => {
    setSelectedFoodType(e.target.value);
    setSelectedFoodSubType('');
  };

  const handleFoodSubTypeChange = (e) => {
    setSelectedFoodSubType(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleGenerateReport = () => {
    // Dummy data
    const dummyData = [
      { customerId: 1, customerName: 'John Doe', roomType: 'Premium Suite', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 500 },
      { customerId: 2, customerName: 'Jane Smith', roomType: 'Deluxe Suite', fromDate: '2024-02-22', toDate: '2024-02-26', amount: 600 },
      { customerId: 3, customerName: 'Alice Johnson', roomType: 'Classic Deluxe', fromDate: '2024-02-23', toDate: '2024-02-27', amount: 700 },
      { customerId: 4, customerName: 'Bob Brown', serviceType: 'Laundry', fromDate: '2024-02-24', toDate: '2024-02-28', amount: 100 },
      { customerId: 5, customerName: 'Emily Davis', serviceType: 'Spa', fromDate: '2024-02-25', toDate: '2024-02-29', amount: 150 },
      { customerId: 6, customerName: 'Tom Johnson', serviceType: 'Swimming Pool', fromDate: '2024-02-26', toDate: '2024-02-27', amount: 50 },
      { customerId: 7, customerName: 'Grace Wilson', serviceType: 'Gym', fromDate: '2024-02-27', toDate: '2024-02-28', amount: 80 },
      { customerId: 8, customerName: 'John cena', foodType: 'Indian', foodSubType: 'Breakfast', itemName: 'Dosa', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 20 },
      { customerId: 9, customerName: 'staillion Smith', foodType: 'Moghulai', foodSubType: 'Main Course', itemName: 'Chicken Tikka Masala', fromDate: '2024-02-22', toDate: '2024-02-26', amount: 30 },
      { customerId: 10, customerName: 'rog Johnson', foodType: 'Continental', foodSubType: 'Desserts', itemName: 'Chocolate Cake', fromDate: '2024-02-23', toDate: '2024-02-27', amount: 25 },
      { customerId: 11, customerName: 'george', foodType: 'Indian', foodSubType: 'Curries', itemName: 'Butter Chicken', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 120 },
      { customerId: 12, customerName: 'samson', foodType: 'Indian', foodSubType: 'Starters', itemName: 'Samosa', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 220 },
      { customerId: 13, customerName: 'Nikhil', foodType: 'Indian', foodSubType: 'Desserts', itemName: 'Gulab Jamun', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 120 },
      { customerId: 14, customerName: 'vijay', foodType: 'Indian', foodSubType: 'Soups', itemName: 'Tomato Soup', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 200 },
      { customerId: 15, customerName: 'durga', foodType: 'Continental', foodSubType: 'Breakfast', itemName: 'Croissant', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 20 },
      { customerId: 16, customerName: 'durga', foodType: 'Continental', foodSubType: 'Curries', itemName: 'Pasta', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 20 },
      { customerId: 17, customerName: 'durga', foodType: 'Continental', foodSubType: 'Starters', itemName: 'Garlic Bread', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 20 },
      { customerId: 18, customerName: 'durga', foodType: 'Continental', foodSubType: 'Soups', itemName: 'Minestrone Soup', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 20 },
      { customerId: 19, customerName: 'durga', foodType: 'Continental', foodSubType: 'Main Course', itemName: 'Grilled Chicken', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 20 },
      { customerId: 20, customerName: 'John', foodType: 'Moghulai', foodSubType: 'Breakfast', itemName: 'Paratha', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 25 },
      { customerId: 21, customerName: 'John', foodType: 'Moghulai', foodSubType: 'Curries', itemName: 'Biryani', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 25 },
      { customerId: 22, customerName: 'John', foodType: 'Moghulai', foodSubType: 'Starters', itemName: 'Seekh Kebab', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 25 },
      { customerId: 23, customerName: 'John', foodType: 'Moghulai', foodSubType: 'Soups', itemName: 'Mulligatawny Soup', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 25 },
      { customerId: 24, customerName: 'John', foodType: 'Moghulai', foodSubType: 'Main Course', itemName: 'Paneer Butter Masala', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 25 },
      { customerId: 25, customerName: 'Jane', foodType: 'Chinease', foodSubType: 'Breakfast', itemName: 'Dim Sum', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 30 },
      { customerId: 26, customerName: 'Jane', foodType: 'Chinease', foodSubType: 'Curries', itemName: 'Sweet and Sour Chicken', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 30 },
      { customerId: 27, customerName: 'Jane', foodType: 'Chinease', foodSubType: 'Starters', itemName: 'Spring Rolls', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 30 },
      { customerId: 28, customerName: 'Jane', foodType: 'Chinease', foodSubType: 'Soups', itemName: 'Hot and Sour Soup', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 30 },
      { customerId: 29, customerName: 'Jane', foodType: 'Chinease', foodSubType: 'Main Course', itemName: 'Chow Mein', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 30 },
      { customerId: 30, customerName: 'Nikhil', foodType: 'Indian', foodSubType: 'Main Course', itemName: 'Biryani', fromDate: '2024-02-21', toDate: '2024-02-25', amount: 220 },
      ];


    const filteredData = dummyData.filter(item => {
      const bookingStartDate = new Date(item.fromDate);
      const bookingEndDate = new Date(item.toDate);
      const selectedFromDate = new Date(fromDate);
      const selectedToDate = new Date(toDate);
      const overlaps = bookingStartDate <= selectedToDate && bookingEndDate >= selectedFromDate;

      if (selectedType === 'rooms') {
        return item.roomType === selectedRoomType && overlaps;
      } else if (selectedType === 'addonservices') {
        return item.serviceType === selectedAddonService && overlaps;
      } else if (selectedType === 'food') {
        return item.foodType === selectedFoodType && item.foodSubType === selectedFoodSubType && overlaps;
      }
    });

    const finalData = filteredData.map(item => {
        if (selectedType === 'roomservice') {
            return { ...item, roomType: item.type };
        }
        return item;
    });

    console.log("Filtered Data:", finalData);
    setTableData(finalData);
    setShowNoDataPopup(finalData.length === 0);
    setTableData(filteredData);
    setShowNoDataPopup(filteredData.length === 0);
  };

  return (
    <div className="reportsn">
      <h2><b>Reports</b></h2>
      <div>
      <div className='hr1' style={{marginLeft:"15cm",marginTop:"-1.5cm"}}>
         <label htmlFor="categoryDropdown" style={{fontSize:"larger"}}><b>Select the category{'\t'}:</b> </label>
         <select id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange} style={{ width: "5cm", textAlign: "center", marginLeft: "0.2cm" }}>
           <option value="">--Select--</option>
          <option value="hotel">Hotel</option>
          <option value="restaurant">Restaurant</option>
        </select>
     </div>
     {selectedCategory && (
     <div className='hr2' style={{marginLeft:"9cm",marginTop:"1cm"}}>
         {/* <label htmlFor="typeDropdown"><b>Select the type:</b> </label> */}
        <select id="typeDropdown" value={selectedType} onChange={handleTypeChange} style={{ width: "5cm", textAlign: "center", marginLeft: "0.2cm" }}>
            <option value="">--Select--</option>
          {selectedCategory === 'hotel' && (
            <>
              <option value="rooms">Rooms</option>
              <option value="addonservices">Add-on Services</option>
              <option value="food">Food</option>
            </>
          )}
        </select>
      </div>
      )}
      {selectedType === "rooms" && (
        <div className='hr3' style={{marginLeft:"16cm",marginTop:"-0.65cm"}}>
          {/* <label htmlFor="roomTypeDropdown"><b>Select the room type{'\t'}:</b> </label> */}
          <select id="roomTypeDropdown" value={selectedRoomType} onChange={handleRoomTypeChange} style={{width:"4.5cm",textAlign:"center"}}>
            <option value="">--Select--</option>
            <option value="Premium Suite">Premium Suite</option>
            <option value="Deluxe Suite">Deluxe Suite</option>
            <option value="Classic Deluxe">Classic Deluxe</option>
          </select>
        </div>
      )}
      {selectedType === "addonservices" && (
        <div className='hr7' style={{marginLeft:"16cm",marginTop:"-0.65cm"}}>
          {/* <label htmlFor="addonServiceDropdown">Select the add-on service: </label> */}
          <select id="addonServiceDropdown" value={selectedAddonService} onChange={handleAddonServiceChange}>
            <option value="">--Select--</option>
            <option value="Laundry">Laundry</option>
            <option value="Spa">Spa</option>
            <option value="Swimming Pool">Swimming Pool</option>
            <option value="Gym">Gym</option>
          </select>
        </div>
      )}
      {selectedType === "food" && (
        <div className='hr8' style={{marginLeft:"15cm",marginTop:"-0.65cm"}}>
          {/* <label htmlFor="foodTypeDropdown">Select the food type: </label> */}
          <select id="foodTypeDropdown" value={selectedFoodType} onChange={handleFoodTypeChange} style={{width:"4.5cm",textAlign:"center"}}>
            <option value="">--Select--</option>
            <option value="Indian">Indian</option>
            <option value="Moghulai">Moghulai</option>
            <option value="Continental">Continental</option>
            <option value="Chinease">Chinease</option>
          </select>
          {selectedFoodType && (
            <div className='hr9' style={{marginLeft:"5.5cm",marginTop:"-0.7cm"}}>
              {/* <label htmlFor="foodSubTypeDropdown">Select the food sub type: </label> */}
              <select id="foodSubTypeDropdown" value={selectedFoodSubType} onChange={handleFoodSubTypeChange}>
                <option value="">--Select--</option>
                {selectedFoodType === "Indian" && (
                  <>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Curries">Curries</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Starters">Starters</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Soups">Soups</option>
                  </>
                )}
                {selectedFoodType === "Moghulai" && (
                  <>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Curries">Curries</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Starters">Starters</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Soups">Soups</option>
                  </>
                )}
                {selectedFoodType === "Continental" && (
                  <>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Starters">Starters</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Soups">Soups</option>
                  </>
                )}
                {selectedFoodType === "Chinease" && (
                  <>
                    <option value="Main Course">Main Course</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Starters">Starters</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Soups">Soups</option>
                  </>
                )}
              </select>
            </div>
          )}
        </div>
      )}
      {(selectedType === "rooms" || selectedType === "addonservices" || selectedType === "food") && (
        <>
          <div className='hr4' style={{marginLeft:"24.5cm",marginTop:"-0.69cm"}}>
            {/* <label htmlFor="fromDate">From Date: </label> */}
            <input type="date" id="fromDate" value={fromDate} onChange={handleFromDateChange} style={{width:"4.5cm",textAlign:"center"}}/>
          </div>
          <div className='hr5' style={{marginLeft:"30cm",marginTop:"-0.7cm"}}>
            {/* <label htmlFor="toDate">To Date: </label> */}
            <input type="date" id="toDate" value={toDate} onChange={handleToDateChange} />
          </div>
        </>
      )}
      <div className='hr6' style={{marginLeft:"35cm",marginTop:"-0.7cm"}}>
        <button onClick={handleGenerateReport} style={{width:"3cm"}}><b>Submit</b></button>
      </div>
      {tableData.length > 0 && (
        <div>
          <h3>Generated Report</h3>
          <table style={{width:"32.5cm",marginLeft:"7cm",marginTop:"1cm"}}>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Type</th>
                {selectedType === "food" && <th>Item Name</th>}
                <th>From Date</th>
                <th>To Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.customerId}</td>
                  <td>{data.customerName}</td>
                  <td>{data.roomType || data.serviceType || data.foodType}</td>
                  {selectedType === "food" && <td>{data.itemName}</td>}
                  <td>{data.fromDate}</td>
                  <td>{data.toDate}</td>
                  <td>{data.amount}</td>
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
    </div>
  );
}

export default Hotelreports;
