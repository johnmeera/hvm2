import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MoghulaiMenu.css';
import axios from 'axios'; 

const MoghulaiMenu = () => {
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [curriesItems, setCurriesItems] = useState([]);
  const [soupsItems, setSoupsItems] = useState([]); 
  const [startersItems, setStartersItems] = useState([]); 
  const [mainCourseItems, setMainCourseItems] = useState([]); 
  const [dessertsItems, setDessertsItems] = useState([]); 
  const [drinksItems, setDrinksItems] = useState([]); 
  const [cart, setCart] = useState([]);
  
  const addToCart = (itemName, itemPrice) => {
    // Your addToCart logic
  };
  
  const removeFromCart = (itemName) => {
    // Your removeFromCart logic
  };
  
  const decrementQuantity = (itemName) => {
    // Your decrementQuantity logic
  };
  
  useEffect(() => {
    fetchBreakfastItems();
    fetchCurriesItems();
    fetchSoupsItems();
    fetchStartersItems(); 
    fetchMainCourseItems(); 
    fetchDessertsItems(); 
    fetchDrinksItems(); 
  }, []);
  
  const fetchBreakfastItems = async () => {
    try {
      const response = await fetch('http://localhost:8100/moghulai/breakfast');
      if (response.ok) {
        const data = await response.json();
        console.log('Received breakfast data:', data);
        const itemsWithImage = data.map(item => ({ ...item, selectedImage: null }));
        setBreakfastItems(itemsWithImage);
      } else {
        console.error('Failed to fetch breakfast items');
      }
    } catch (error) {
      console.error('Error fetching breakfast items:', error);
    }
  };

  const fetchCurriesItems = async () => {
    try {
      const response = await fetch('http://localhost:8100/moghulai/curries');
      if (response.ok) {
        const data = await response.json();
        console.log('Received curries data:', data);
        const itemsWithImage = data.map(item => ({ ...item, selectedImage: null }));
        setCurriesItems(itemsWithImage);
      } else {
        console.error('Failed to fetch curries items');
      }
    } catch (error) {
      console.error('Error fetching curries items:', error);
    }
  };

  const fetchSoupsItems = async () => {
    try {
      const response = await fetch('http://localhost:8100/moghulai/soups');
      if (response.ok) {
        const data = await response.json();
        console.log('Received soups data:', data);
        const itemsWithImage = data.map(item => ({ ...item, selectedImage: null }));
        setSoupsItems(itemsWithImage);
      } else {
        console.error('Failed to fetch soups items');
      }
    } catch (error) {
      console.error('Error fetching soups items:', error);
    }
  };
  const fetchStartersItems = async () => {
    try {
      const response = await fetch('http://localhost:8100/moghulai/starters');
      if (response.ok) {
        const data = await response.json();
        console.log('Received starters data:', data);
        const itemsWithImage = data.map(item => ({ ...item, selectedImage: null }));
        setStartersItems(itemsWithImage); 
      } else {
        console.error('Failed to fetch starters items');
      }
    } catch (error) {
      console.error('Error fetching starters items:', error);
    }
  };
  const fetchMainCourseItems = async () => {
    try {
      const response = await fetch('http://localhost:8100/moghulai/maincourse');
      if (response.ok) {
        const data = await response.json();
        console.log('Received main course data:', data);
        const itemsWithImage = data.map(item => ({ ...item, selectedImage: null }));
        setMainCourseItems(itemsWithImage); 
      } else {
        console.error('Failed to fetch main course items');
      }
    } catch (error) {
      console.error('Error fetching main course items:', error);
    }
  };
  const fetchDessertsItems = async () => {
    try {
      const response = await fetch('http://localhost:8100/moghulai/desserts');
      if (response.ok) {
        const data = await response.json();
        console.log('Received desserts data:', data);
        const itemsWithImage = data.map(item => ({ ...item, selectedImage: null }));
        setDessertsItems(itemsWithImage);
      } else {
        console.error('Failed to fetch desserts items');
      }
    } catch (error) {
      console.error('Error fetching desserts items:', error);
    }
  };
  const fetchDrinksItems = async () => {
    try {
      const response = await fetch('http://localhost:8100/moghulai/drinks');
      if (response.ok) {
        const data = await response.json();
        console.log('Received drinks data:', data);
        const itemsWithImage = data.map(item => ({ ...item, selectedImage: null }));
        setDrinksItems(itemsWithImage); 
      } else {
        console.error('Failed to fetch drinks items');
      }
    } catch (error) {
      console.error('Error fetching drinks items:', error);
    }
  };

  const handleFileChange = (event, index, itemType) => {
    const file = event.target.files[0];
    const setterFunction = itemType === 'breakfast' ? setBreakfastItems : setCurriesItems;

    setterFunction(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].selectedImage = URL.createObjectURL(file);
      return updatedItems;
    });
  };

  const handleCurriesFileChange = (event, index) => {
    const file = event.target.files[0];
    
    setCurriesItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].selectedImage = URL.createObjectURL(file);
      return updatedItems;
    });
  };
  const deleteBreakfastItem = async (itemName,customerid) => {
    try {
      // Remove item from state
      console.log(customerid)
      setBreakfastItems(prevItems => prevItems.filter(item => item.breakfast !== itemName));
    
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to delete ${itemName}`);
      }    } catch (error) {
      console.error('Error deleting breakfast item:', error);
    }
  };
  const deleteCurriesItem = async (itemName, customerid) => {
    try {
      // Remove item from state
      console.log(customerid)
      setCurriesItems(prevItems => prevItems.filter(item => item.curries !== itemName));
    
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to delete ${itemName}`);
      }    } catch (error) {
      console.error('Error deleting curries item:', error);
    }
  };
  const deleteSoupsItem = async (itemName,customerid) => {
    try {
      // Remove item from state
      console.log(customerid)
      setSoupsItems(prevItems => prevItems.filter(item => item.soups !== itemName));
    
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to delete ${itemName}`);
      }    } catch (error) {
      console.error('Error deleting soups item:', error);
    }
  };
  const deleteStartersItem = async (itemName,customerid) => {
    try {
      // Remove item from state
      console.log(customerid)
      setStartersItems(prevItems => prevItems.filter(item => item.starters !== itemName));
    
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to delete ${itemName}`);
      }    } catch (error) {
      console.error('Error deleting starters item:', error);
    }
  };
  const deleteMainCourseItem = async (itemName,customerid) => {
    try {
      // Remove item from state
      console.log(customerid)
      setMainCourseItems(prevItems => prevItems.filter(item => item.mainCourse !== itemName));
    
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to delete ${itemName}`);
      }    } catch (error) {
      console.error('Error deleting mainCourse item:', error);
    }
  };
  const deleteDessertsItem = async (itemName,customerid) => {
    try {
      // Remove item from state
      console.log(customerid)
      setDessertsItems(prevItems => prevItems.filter(item => item.desserts !== itemName));
    
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to delete ${itemName}`);
      }    } catch (error) {
      console.error('Error deleting desserts item:', error);
    }
  };
  const deleteDrinksItem = async (itemName,customerid) => {
    try {
      // Remove item from state
      console.log(customerid)
      setDrinksItems(prevItems => prevItems.filter(item => item.drinks !== itemName));
    
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to delete ${itemName}`);
      }    } catch (error) {
      console.error('Error deleting drinks item:', error);
    }
  };
  const updateBreakfastItem = async (itemName,customerid) => {
    try {
     
      console.log(customerid)
      setBreakfastItems(prevItems => prevItems.filter(item => item.breakfast !== itemName));
    
      const response = await axios.update(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to update ${itemName}`);
      }    } catch (error) {
      console.error('Error updating breakfast item:', error);
    }
  };
  const updateCurriesItem = async (itemName,customerid) => {
    try {
     
      console.log(customerid)
      setCurriesItems(prevItems => prevItems.filter(item => item.curries !== itemName));
    
      const response = await axios.update(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to update ${itemName}`);
      }    } catch (error) {
      console.error('Error updating curries item:', error);
    }
  };
  const updateSoupsItem = async (itemName,customerid) => {
    try {
     
      console.log(customerid)
      setSoupsItems(prevItems => prevItems.filter(item => item.soups !== itemName));
    
      const response = await axios.update(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to update ${itemName}`);
      }    } catch (error) {
      console.error('Error updating soups item:', error);
    }
  };
  const updateStartersItem = async (itemName,customerid) => {
    try {
     
      console.log(customerid)
      setStartersItems(prevItems => prevItems.filter(item => item.starters !== itemName));
    
      const response = await axios.update(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to update ${itemName}`);
      }    } catch (error) {
      console.error('Error updating starters item:', error);
    }
  };
  const updatemainCourseItem = async (itemName,customerid) => {
    try {
     
      console.log(customerid)
      setMainCourseItems(prevItems => prevItems.filter(item => item.mainCourse !== itemName));
    
      const response = await axios.update(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to update ${itemName}`);
      }    } catch (error) {
      console.error('Error updating mainCourse item:', error);
    }
  };
  const updateDessertsItem = async (itemName,customerid) => {
    try {
     
      console.log(customerid)
      setDessertsItems(prevItems => prevItems.filter(item => item.desserts !== itemName));
    
      const response = await axios.update(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to update ${itemName}`);
      }    } catch (error) {
      console.error('Error updating desserts item:', error);
    }
  };
  const updateDrinksItem = async (itemName,customerid) => {
    try {
     
      console.log(customerid)
      setDrinksItems(prevItems => prevItems.filter(item => item.drinks !== itemName));
    
      const response = await axios.update(`http://localhost:8100/moghulai/food/${customerid}`);
  
      if (!response.status === 200) {
        console.error(`Failed to update ${itemName}`);
      }    } catch (error) {
      console.error('Error updating drinks item:', error);
    }
  };
  return (
    <>
      <div className="moghulai-menu-container">
        <Link to={'/Restaurant'}>
          <button type='submit'>Back</button>
        </Link>
        
        <h3>Moghulai Breakfast</h3>
        <table>
          <thead>
            <tr>
              <th>Breakfast</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {breakfastItems.map((item, index) => (
              <tr key={index}>
                <td>{item.breakfast}</td>
                <td>{item.b_price}</td>
                <td>
                  {item.selectedImage ? (
                    <img src={item.selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                  ) : (
                    <input type='file' onChange={(event) => handleFileChange(event, index, 'breakfast')} />
                  )}
                </td>
                <td>
                <Link Link to={`/updatemoghulaibreakfast/${item.customerid}`}>
                  <button className="s" onClick={() => updateBreakfastItem(item.breakfast, item.customerid)}> update </button>
                    
                  </Link>
                  <button className="s" onClick={() => deleteBreakfastItem(item.breakfast, item.customerid)}> Delete </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
     
        <div>
          <Link to={'/AddMoghulaiBreakfast'}>
            <button className="s" onClick={() => addToCart()}>
              Add
            </button>
          </Link>
        </div>
        <div>
  <h3>Moghulai Curries</h3>
  <table>
    <thead>
      <tr>
        <th>Curry</th>
        <th>Price</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {curriesItems.map((item, index) => (
        <tr key={index}>
          <td>{item.curries}</td>
          <td>{item.c_price}</td>
          <td>
            {item.selectedImage ? (
              <img src={item.selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            ) : (
              <input type='file' onChange={(event) => handleCurriesFileChange(event, index)} />
            )}
          </td>
          <td>
          <Link Link to={`/updatemoghulaiCurries/${item.customerid}`}>
                  <button className="s" onClick={() => updateCurriesItem(item.curries, item.customerid)}> update </button>
                    
                  </Link>
            <button className="s" onClick={() => deleteCurriesItem(item.curries, item.customerid)}> Delete </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
  <Link to={'/AddMoghulaiCurries'}>
    <button className="s" onClick={() => addToCart()}>
      Add
    </button>
  </Link>
</div>
<div>
  <h3>Moghulai Soups</h3>
  <table>
    <thead>
      <tr>
        <th>Soup</th>
        <th>Price</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {soupsItems.map((item, index) => (
        <tr key={index}>
          <td>{item.soups}</td>
          <td>{item.s_price}</td>
          <td>
            {item.selectedImage ? (
              <img src={item.selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            ) : (
              <input type='file' onChange={(event) => handleFileChange(event, index, 'soups')} />
            )}
          </td>
          <td>
          <Link Link to={`/updatemoghulaiSoups/${item.customerid}`}>
                  <button className="s" onClick={() => updateSoupsItem(item.soups, item.customerid)}> update </button>
                    
                  </Link>
            <button className="s" onClick={() => deleteSoupsItem(item.soups, item.customerid)}> Delete </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
  <Link to={'/AddMoghulaiSoups'}>
    <button className="s" onClick={() => addToCart()}>
      Add
    </button>
  </Link>
</div>
<div>
  <h3>Moghulai Starters</h3>
  <table>
    <thead>
      <tr>
        <th>Starter</th>
        <th>Price</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {startersItems.map((item, index) => (
        <tr key={index}>
          <td>{item.starters}</td>
          <td>{item.s1_price}</td>
          <td>
            {item.selectedImage ? (
              <img src={item.selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            ) : (
              <input type='file' onChange={(event) => handleFileChange(event, index, 'starters')} />
            )}
          </td>
          <td>
          <Link Link to={`/updatemoghulaiStarters/${item.customerid}`}>
                  <button className="s" onClick={() => updateStartersItem(item.starters, item.customerid)}> update </button>
                    
                  </Link>
            <button className="s" onClick={() => deleteStartersItem(item.starters, item.customerid)}> Delete </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
  <Link to={'/AddMoghulaiStarters'}>
    <button className="s" onClick={() => addToCart()}>
      Add
    </button>
  </Link>
</div>
<div>
  <h3>Moghulai Main Courses</h3>
  <table>
    <thead>
      <tr>
        <th>Main Course</th>
        <th>Price</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {mainCourseItems.map((item, index) => (
        <tr key={index}>
          <td>{item.maincourse}</td>
          <td>{item.m_price}</td>
          <td>
            {item.selectedImage ? (
              <img src={item.selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            ) : (
              <input type='file' onChange={(event) => handleFileChange(event, index, 'maincourse')} />
            )}
          </td>
          <td>
          <Link Link to={`/updatemoghulaimainCourse/${item.customerid}`}>
                  <button className="s" onClick={() => updatemainCourseItem(item.mainCourse, item.customerid)}> update </button>
                    
                  </Link>
            <button className="s" onClick={() => deleteMainCourseItem(item.mainCourse, item.customerid)}> Delete </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
  <Link to={'/AddMoghulaiMainCourse'}>
    <button className="s" onClick={() => addToCart()}>
      Add
    </button>
  </Link>
</div>
<div>
  <h3>Moghulai Desserts</h3>
  <table>
    <thead>
      <tr>
        <th>Dessert</th>
        <th>Price</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {dessertsItems.map((item, index) => (
        <tr key={index}>
          <td>{item.desserts}</td>
          <td>{item.d_price}</td>
          <td>
            {item.selectedImage ? (
              <img src={item.selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            ) : (
              <input type='file' onChange={(event) => handleFileChange(event, index, 'desserts')} />
            )}
          </td>
          <td>
          <Link Link to={`/updatemoghulaidesserts/${item.customerid}`}>
                  <button className="s" onClick={() => updateDessertsItem(item.desserts, item.customerid)}> update </button>
                    
                  </Link>
            <button className="s" onClick={() => deleteDessertsItem(item.desserts, item.customerid)}> Delete </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
  <Link to={'/AddMoghulaiDesserts'}>
    <button className="s" onClick={() => addToCart()}>
      Add
    </button>
  </Link>
</div>
<div>
  <h3>Moghulai Drinks</h3>
  <table>
    <thead>
      <tr>
        <th>Drink</th>
        <th>Price</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {drinksItems.map((item, index) => (
        <tr key={index}>
          <td>{item.drinks}</td>
          <td>{item.d1_price}</td>
          <td>
            {item.selectedImage ? (
              <img src={item.selectedImage} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            ) : (
              <input type='file' onChange={(event) => handleFileChange(event, index, 'drinks')} />
            )}
          </td>
          <td>
          <Link Link to={`/updatemoghulaidrinks/${item.customerid}`}>
                  <button className="s" onClick={() => updateDrinksItem(item.drinks, item.customerid)}> update </button>
                    
                  </Link>
            <button className="s" onClick={() => deleteDrinksItem(item.drinks, item.customerid)}> Delete </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div>
  <Link to={'/AddMoghulaiDrinks'}>
    <button className="s" onClick={() => addToCart()}>
      Add
    </button>
  </Link>
</div>
        
        
      </div>
    </>
  );
};

export default MoghulaiMenu;
