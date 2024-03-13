// import React, { useState, useEffect } from 'react';
// import Restaurantreports from "./Restaurantreports";
// import Hotelreports from './Hotelreports';

// function Reports() {
//   // State variables for managing selected category and component to render
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [componentToRender, setComponentToRender] = useState(null);
//   const [initialRender, setInitialRender] = useState(true);

//   // Effect to render component initially when "hotel" is selected
//   useEffect(() => {
//     if (initialRender) {
//       setComponentToRender(<Hotelreports />);
//       setInitialRender(false);
//     }
//   }, [initialRender]);

  
//   // Event handler for category change
//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     // Set the component to render based on the selected category
//     if (e.target.value === "restaurant") {
//       setComponentToRender(<Restaurantreports />);
//     } else if (e.target.value === "hotel") {
//       setComponentToRender(<Hotelreports />);
//     }
//   };

//   // Render the component
//   return (
//     <div className="reportsn">
//       <div>
//         {componentToRender ? (
//           <>
//             {componentToRender}
//           </>
//         ) : (
//           <>
//             <h2><b>Reports</b></h2>
//             <div>
//               <label htmlFor="categoryDropdown">Select the category: </label>
//               <select id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange}>
//                 <option value="">--Select--</option>
//                 <option value="hotel">Hotel</option>
//                 <option value="restaurant">Restaurant</option>
//               </select>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Reports;

// import React, { useState } from 'react';
// import Hotelreports from './Hotelreports';
// import Restaurantreports from './Restaurantreports';

// function Reports() {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedType, setSelectedType] = useState('');

//   const handleTypeChange = (e) => {
//     setSelectedType(e.target.value);
//   };

//   return (
//     <div className="reports">
//       {/* Render the reports heading */}
//       <h2><b>Reports</b></h2>
      
//       {/* Render sub-dropdowns and reports based on the selected category */}
//       {selectedCategory === "hotel" && (
//         <Hotelreports selectedType={selectedType} handleTypeChange={handleTypeChange} />
//       )}
//       {selectedCategory === "restaurant" && (
//         <Restaurantreports selectedType={selectedType} handleTypeChange={handleTypeChange} />
//       )}

//       {/* Render the category dropdown only if no category is selected */}
//       {!selectedCategory && (
//         <div>
//           <label htmlFor="categoryDropdown">Select the category: </label>
//           <select id="categoryDropdown" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//             <option value="">--Select--</option>
//             <option value="hotel">Hotel</option>
//             <option value="restaurant">Restaurant</option>
//           </select>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Reports;

import React, { useState } from 'react';
import Hotelreports from './Hotelreports';
import Restaurantreports from './Restaurantreports';

function Reports() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="reports">
      {/* Render sub-dropdowns and reports based on the selected category */}
      {selectedCategory === "hotel" && (
        <Hotelreports selectedType={selectedType} handleTypeChange={handleTypeChange} />
      )}
      {selectedCategory === "restaurant" && (
        <Restaurantreports selectedType={selectedType} handleTypeChange={handleTypeChange} />
      )}

      {/* Render the category dropdown only if no category is selected */}
      {!selectedCategory && (
        <div>
          <label htmlFor="categoryDropdown">Select the category: </label>
          <select id="categoryDropdown" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">--Select--</option>
            <option value="hotel">Hotel</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Reports;
