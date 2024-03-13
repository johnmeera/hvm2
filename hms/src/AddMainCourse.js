import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddBreakfast.css';

function AddMainCourse() {
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
            const response = await axios.post('http://localhost:8100/indian/save', item);
            console.log('Item added successfully:', response.data);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <>
         <div className="ms41">
            <center>
                <div className="add-ms">
                    <div className="additems-container-ms">
                        <div className="additems-options-ms">
                           
                        <h3 className='s2-ms3'>Add new items</h3>
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
                                <input type='text' name='m_price' list="M_price" value={item.m_price} onChange={handleChange} placeholder='Add new item' />
                            </div>
                           
                           
                           
                        </div> 
                    </div>
                    <button className='ms1' type='submit' onClick={handleSubmit}>Add</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='ms1' type='submit' >Back</button>
                    </Link>
                </div>
            </center>
            </div>
        </>
    )
}

export default AddMainCourse;
