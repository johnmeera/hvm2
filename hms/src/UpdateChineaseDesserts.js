import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './UpdateChineaseBreakfast.css';

function UpdateChineaseDesserts() {
    const { customerId } = useParams(); // Get customerId from URL
    const [item, setDessertsItem] = useState({
        desserts: '',
        d_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDessertsItem({ ...item, [name]: value });
    };

    const updateDessertsItem = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const { desserts } = item;
        try {
            const response = await axios.put(`http://localhost:8100/chinease/food/${customerId}`, item);
            if (response.status === 200) {
                console.log(`${desserts} updated successfully`);
            } else {
                console.error(`Failed to update ${desserts}`);
            }
        } catch (error) {
            console.error('Error updating desserts item:', error);
        }
    };

    return (
        <center>
            <div className="update">
                <form>

                <div className="updateitems-container">
                        <div className="updateitems-options">
                           
                        <h3>Update items</h3>
                        <div className="su" type="Desserts">
                                <label><b>Desserts :</b></label>
                                <input type='text' name='desserts' list='Desserts' value={item.desserts} onChange={handleChange} placeholder='Add new item'  /><br/><br></br>
                                <datalist id="Desserts">
                                <option value="Strawberry Cake">Strawberry Cake</option>
                                    <option value="ButterScotch Ice Cream">ButterScotch Ice Cream</option>
                                    <option value="Gulab Jabunm">Gulab Jabunm</option>
                                    <option value="Soy Milk Pudding">Soy Milk Pudding</option>
                                    <option value="Pumpkin Pancakes">Pumpkin Pancakes</option>
                                </datalist>
                            </div>
                            <div className="su" type="D_price">
                                <label><b>D_price :</b></label>
                                <input type='text' name='d_price' list="D_price" value={item.d_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                            </div>
                           
                           
                        </div> 
                    </div>
                    <button className='s' type='submit' onClick={updateDessertsItem}>Update</button><br/>
                    <Link to={'/ChineaseMenu'}>
                        <button className='s'>Back</button>
                    </Link>
                </form>
            </div>
        </center>
    )
}

export default UpdateChineaseDesserts;
