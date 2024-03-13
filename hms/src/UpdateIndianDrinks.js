import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './UpdateIndianBreakfast.css';

function UpdateIndianDrinks() {
    const { customerId } = useParams(); // Get customerId from URL
    const [item, setDrinksItem] = useState({
        drinks: '',
        d1_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDrinksItem({ ...item, [name]: value });
    };

    const updateDrinksItem = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const { drinks } = item;
        try {
            const response = await axios.put(`http://localhost:8100/indian/food/${customerId}`, item);
            if (response.status === 200) {
                console.log(`${drinks} updated successfully`);
            } else {
                console.error(`Failed to update ${drinks}`);
            }
        } catch (error) {
            console.error('Error updating drinks item:', error);
        }
    };

    return (
        <center>
            <div className="update">
                <form>
                <div className="updateitems-container">
                        <div className="updateitems-options">
                           
                        <h3>Update items</h3>
                        <div className="su" type="Drinks">
                                <label><b>Drinks :</b></label>
                                <input type='text' name='drinks' list='Drinks' value={item.drinks} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Drinks">
                                    <option value="Sprite">Sprite</option>
                                    <option value="Thumbs Up">Thumbs Up</option>
                                    <option value="Pulpy">Pulpy</option>
                                    <option value="Fanta">Fanta</option>
                                    <option value="Coco Cola">Coco Cola</option>
                                </datalist>
                            </div>
                            <div className="su" type="D1_price">
                                <label><b>D1_price :</b></label>
                                <input type='text' name='d1_price' list="D1_price" value={item.d1_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                            </div>
                           
                           
                        </div> 
                    </div>
                    <button className='s' type='submit' onClick={updateDrinksItem}>Update</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='s'>Back</button>
                    </Link>
                </form>
            </div>
        </center>
    )
}

export default UpdateIndianDrinks;
