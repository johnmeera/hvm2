import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './UpdateIndianBreakfast.css';

function UpdateIndianBreakfast() {
    const { customerId } = useParams(); // Get customerId from URL
    const [item, setBreakfastItem] = useState({
        breakfast: '',
        b_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBreakfastItem({ ...item, [name]: value });
    };

    const updateBreakfastItem = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const { breakfast } = item;
        try {
            const response = await axios.put(`http://localhost:8100/indian/food/${customerId}`, item);
            if (response.status === 200) {
                console.log(`${breakfast} updated successfully`);
            } else {
                console.error(`Failed to update ${breakfast}`);
            }
        } catch (error) {
            console.error('Error updating breakfast item:', error);
        }
    };

    return (
        <center>
            <div className="update">
                <form>
                    <div className="updateitems-container">
                        <div className="updateitems-options">
                            <h3>Update items</h3>
                            <div className="su" type="Breakfast">
                                <label><b>Breakfast :</b></label>
                                <input type='text' name='breakfast' list="Breakfast" value={item.breakfast} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Breakfast">
                                    <option value="Dosa">Dosa</option>
                                    <option value="Upma">Upma</option>
                                    <option value="Idli">Idli</option>
                                    <option value="Samosa">Samosa</option> 
                                    <option value="Poori">Poori</option>  
                                </datalist>
                            </div>
                            <div className="su" type="B_price">
                                <label><b>B_price :</b></label>
                                <input type='text' name='b_price' value={item.b_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                            </div>
                        </div> 
                    </div>
                    <button className='s' type='submit' onClick={updateBreakfastItem}>Update</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='s'>Back</button>
                    </Link>
                </form>
            </div>
        </center>
    )
}

export default UpdateIndianBreakfast;
