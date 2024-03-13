import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './UpdateBreakfast.css';

function UpdateMainCourse() {
    const [item, setItem] = useState({
        breakfast: '',
        curries: '',
        desserts: '',
        drinks: '',
        maincourse: '',
        soups: '',
        starters: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('item :', item);
        try {
            const response = await axios.put('http://localhost:8100/indian/save', item);
            console.log('Item updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return (
        <>
         <div className="ms80">
            <center>
                <div className="update-ms">
                    <div className="updateitems-container-ms">
                        <div className="updateitems-options-ms">
                           
                        <h3>Update items</h3>
                        <div className="ms" type="Main Course">
                        <label><b>Main Course :</b></label>
                                <input type='text' name='maincourse' list='Main Course' value={item.maincourse} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Main Course">
                                    <option value="Veg Paneer Biryani">Veg Paneer Biryani</option>
                                    <option value="Chicken Biryani">Chicken Biryani</option>
                                    <option value="Corn Pizza">Corn Pizza</option>
                                    <option value="Chicken Sandwich">Chicken Sandwich</option>
                                    <option value="Chicken Burger">Chicken Burger</option>
                                </datalist>
                            </div>
                            <div className="ms" type="M_price">
                                <label><b>M_price :</b></label>
                                <input type='text' name='m_price' list="M_price" value={item.m_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                            </div>
                            <button className='ms1' type='submit' onClick={handleSubmit}>Update</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='ms1' type='submit' >Back</button>
                    </Link>
                           
                        </div> 
                    </div>
                    
                </div>
            </center>
            </div>
        </>
    )
}

export default UpdateMainCourse;
