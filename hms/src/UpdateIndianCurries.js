import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './UpdateIndianBreakfast.css';

function UpdateIndianCurries() {
    const { customerId } = useParams(); // Get customerId from URL
    const [item, setCurriesItem] = useState({
        curries: '',
        c_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurriesItem({ ...item, [name]: value });
    };

    const updateCurriesItem = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const { curries} = item;
        try {
            const response = await axios.put(`http://localhost:8100/indian/food/${customerId}`, item);
            if (response.status === 200) {
                console.log(`${curries} updated successfully`);
            } else {
                console.error(`Failed to update ${curries}}`);
            }
        } catch (error) {
            console.error('Error updating curries item:', error);
        }
    };

    return (
        <center>
            <div className="update">
                <form>
                    <div className="updateitems-container">
                        <div className="updateitems-options">
                           
                        <h3>Update items</h3>
                        <div className="su" type="Curries">
                                <label><b>Curries :</b></label>
                                <input type='text' name='curries' list='Curries' value={item.curries} onChange={handleChange} placeholder='Add new item'  /><br/><br></br>
                                <datalist id="Curries">
                                    <option value="Butter Chicken">Butter Chicken</option>
                                    <option value="Paneer Tikka Massala">Paneer Tikka Massala</option>
                                    <option value="Rajma Chawal">Rajma Chawal</option>
                                    <option value="Chicken Curry">Chicken Curry</option>
                                    <option value="Mutton Curry">Mutton Curry</option>
                                </datalist>
                            </div>
                            <div className="su" type="C_price">
                                <label><b>C_price :</b></label>
                                <input type='text' name='c_price' list="B_price" value={item.c_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                            </div>
                           
                           
                        </div> 
                    </div>
                    <button className='s' type='submit' onClick={updateCurriesItem}>Update</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='s'>Back</button>
                    </Link>
                </form>
            </div>
        </center>
    )
}

export default UpdateIndianCurries;
