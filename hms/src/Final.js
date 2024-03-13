import React, { useState } from 'react';

function Final() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [selectedAddonService, setSelectedAddonService] = useState('');
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const [selectedFoodSubType, setSelectedFoodSubType] = useState('');
  const [selectedDineinTable, setSelectedDineinTable] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [tableData, setTableData] = useState([]);
  const [showNoDataPopup, setShowNoDataPopup] = useState(false);

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
    // Reset date inputs when type changes
    setFromDate('');
    setToDate('');
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
    // Dummy data
    const dummyData = [
      // Your dummy data here...
    ];

    let filteredData = [];
    if (selectedType === "roomservice") {
      filteredData = dummyData.filter(item => ['Premium Suite', 'Deluxe Suite', 'Classic Deluxe'].includes(item.type));
    } else if (selectedType === "Takeaway") {
      filteredData = dummyData.filter(item => item.type === 'Takeaway');
    } else {
      filteredData = dummyData.filter(item => {
        const bookingStartDate = new Date(item.fromDate);
        const bookingEndDate = new Date(item.toDate);
        const selectedFromDate = new Date(fromDate);
        const selectedToDate = new Date(toDate);
        const isWithinDateRange = bookingStartDate >= selectedFromDate && bookingEndDate <= selectedToDate;
        const isCorrectTable = item.tableNo === selectedDineinTable || selectedDineinTable === 'All';
        const isTableData = !item.type;
        return isWithinDateRange && isCorrectTable && isTableData;
      });
    }

    setTableData(filteredData);
    setShowNoDataPopup(filteredData.length === 0);
  };

  return (
    <div className="reports">
      <h2><b>Reports</b></h2>
      <div>
        <label htmlFor="categoryDropdown">Select the category: </label>
        <select id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">--Select--</option>
          <option value="hotel">Hotel</option>
          <option value="restaurant">Restaurant</option>
        </select>
      </div>
      {selectedCategory === "restaurant" && (
        <div>
          <label htmlFor="typeDropdown">Select the type: </label>
          <select id="typeDropdown" value={selectedType} onChange={handleTypeChange}>
            <option value="">--Select--</option>
            <option value="roomservice">Room Service</option>
            <option value="Takeaway">Takeaway</option>
            <option value="Dinein">Dine-in</option>
          </select>
        </div>
      )}

      {selectedType === "roomservice" && (
        <div>
          <label htmlFor="roomTypeDropdown">Select the room type: </label>
          <select id="roomTypeDropdown" value={selectedRoomType} onChange={handleRoomTypeChange}>
            <option value="">--Select--</option>
            <option value="Premium Suite">Premium Suite</option>
            <option value="Deluxe Suite">Deluxe Suite</option>
            <option value="Classic Deluxe">Classic Deluxe</option>
          </select>
        </div>
      )}
      {selectedType === "addonservices" && (
        <div>
          <label htmlFor="addonServiceDropdown">Select the add-on service: </label>
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
        <div>
          <label htmlFor="foodTypeDropdown">Select the food type: </label>
          <select id="foodTypeDropdown" value={selectedFoodType} onChange={handleFoodTypeChange}>
            <option value="">--Select--</option>
            <option value="Indian">Indian</option>
            <option value="Continental">Continental</option>
            <option value="Chinese">Chinese</option>
            <option value="Italian">Italian</option>
          </select>
        </div>
      )}
      {selectedType === "food" && (
        <div>
          <label htmlFor="foodSubTypeDropdown">Select the food sub-type: </label>
          <select id="foodSubTypeDropdown" value={selectedFoodSubType} onChange={handleFoodSubTypeChange}>
            <option value="">--Select--</option>
            <option value="Starter">Starter</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>
      )}
      {selectedType === "Dinein" && (
        <div>
          <label htmlFor="dineinTableDropdown">Select the table: </label>
          <select id="dineinTableDropdown" value={selectedDineinTable} onChange={handleDineinTableChange}>
            <option value="All">All</option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
          </select>
        </div>
      )}
      {(selectedType === "roomservice" || selectedType === "Dinein") && (
        <div>
          <label htmlFor="fromDate">From Date: </label>
          <input type="date" id="fromDate" value={fromDate} onChange={handleFromDateChange} />
        </div>
      )}
      {(selectedType === "roomservice" || selectedType === "Dinein") && (
        <div>
          <label htmlFor="toDate">To Date: </label>
          <input type="date" id="toDate" value={toDate} onChange={handleToDateChange} />
        </div>
      )}
      <button onClick={handleGenerateReport}>Generate Report</button>

      {/* Table to display the data */}
      {tableData.length > 0 && (
        <table>
          <thead>
            <tr>
              {/* Adjust these headers according to your data */}
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                {/* Adjust these cells according to your data */}
                <td>{item.column1}</td>
                <td>{item.column2}</td>
                <td>{item.column3}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Popup to display when there's no data */}
      {showNoDataPopup && (
        <div>
          <p>No data available for the selected criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Final;
