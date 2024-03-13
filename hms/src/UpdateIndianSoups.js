import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './UpdateIndianBreakfast.css';

function UpdateIndianSoups() {
    const { customerId } = useParams(); // Get customerId from URL
    const [item, setSoupsItem] = useState({
        soups: '',
        s_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSoupsItem({ ...item, [name]: value });
    };

    const updateSoupsItem = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const { soups } = item;
        try {
            const response = await axios.put(`http://localhost:8100/indian/food/${customerId}`, item);
            if (response.status === 200) {
                console.log(`${soups} updated successfully`);
            } else {
                console.error(`Failed to update ${soups}`);
            }
        } catch (error) {
            console.error('Error updating soups item:', error);
        }
    };

    return (
        <center>
            <div className="update">
                <form>
                <div className="updateitems-container">
                        <div className="updateitems-options">
                           
                        <h3>Update items</h3>
                        <div className="su" type="Soups">
                                <label><b>Soups :</b></label>
                                <input type='text' name='soups' list='Soups' value={item.soups} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Soups">
                                    <option value="Tomato">Tomato</option>
                                    <option value="Mutton">Mutton</option>
                                    <option value="Corn">Corn</option>
                                    <option value="Green">Green</option>
                                    <option value="Carrot Ginger">Carrot Ginger</option>
                                </datalist>
                            </div>
                            <div className="su" type="S_price">
                                <label><b>S_price :</b></label>
                                <input type='text' name='s_price' list="S_price" value={item.s_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                            </div>
                           
                           
                        </div> 
                    </div>
                    <button className='s' type='submit' onClick={updateSoupsItem}>Update</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='s'>Back</button>
                    </Link>
                </form>
            </div>
        </center>
    )
}

export default UpdateIndianSoups;
