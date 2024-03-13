import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './UpdateIndianBreakfast.css';

function UpdateIndianStarters() {
    const { customerId } = useParams(); // Get customerId from URL
    const [item, setStartersItem] = useState({
        starters: '',
        s1_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStartersItem({ ...item, [name]: value });
    };

    const updateStartersItem = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const { starters } = item;
        try {
            const response = await axios.put(`http://localhost:8100/indian/food/${customerId}`, item);
            if (response.status === 200) {
                console.log(`${starters} updated successfully`);
            } else {
                console.error(`Failed to update ${starters}`);
            }
        } catch (error) {
            console.error('Error updating starters item:', error);
        }
    };

    return (
        <center>
            <div className="update">
                <form>
                <div className="updateitems-container">
                        <div className="updateitems-options">
                           
                        <h3>Update items</h3>
                        <div className="su" type="Starters">
                                <label><b>Starters :</b></label>
                                <input type='text' name='starters' list='Starters' value={item.starters} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Starters">
                                    <option value="Veg Paneer Tikka">Veg Paneer Tikka</option>
                                    <option value="Chicken Lollipops">Chicken Lollipops</option>
                                    <option value="Chicken Wings">Chicken Wings</option>
                                    <option value="Vada Pav">Vada Pav</option>
                                    <option value="Cabbage Pakora">Cabbage Pakora</option>
                                </datalist>
                            </div>
                            <div className="su" type="S1_price">
                                <label><b>S1_price :</b></label>
                                <input type='text' name='s1_price' list="S1_price" value={item.s1_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                            </div>
                           
                           
                        </div> 
                    </div>
                    <button className='s' type='submit' onClick={updateStartersItem}>Update</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='s'>Back</button>
                    </Link>
                </form>
            </div>
        </center>
    )
}

export default UpdateIndianStarters;
