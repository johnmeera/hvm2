import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './UpdateIndianBreakfast.css';

function UpdateIndianMainCourse() {
    const { customerId } = useParams(); // Get customerId from URL
    const [item, setmainCourseItem] = useState({
        maincourse: '',
        m_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setmainCourseItem({ ...item, [name]: value });
    };

    const updatemainCourseItem = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const { maincourse } = item;
        try {
            const response = await axios.put(`http://localhost:8100/indian/food/${customerId}`, item);
            if (response.status === 200) {
                console.log(`${maincourse} updated successfully`);
            } else {
                console.error(`Failed to update ${maincourse}`);
            }
        } catch (error) {
            console.error('Error updating maincourse item:', error);
        }
    };

    return (
        <center>
            <div className="update">
                <form>
                <div className="updateitems-container">
                        <div className="updateitems-options">
                           
                        <h3>Update items</h3>
                        <div className="su" type="Main Course">
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
                            <div className="su" type="M_price">
                                <label><b>M_price :</b></label>
                                <input type='text' name='m_price' list="M_price" value={item.m_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                            </div>
                           
                           
                        </div> 
                    </div>
                    <button className='s' type='submit' onClick={updatemainCourseItem}>Update</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='s'>Back</button>
                    </Link>
                </form>
            </div>
        </center>
    )
}

export default UpdateIndianMainCourse;
