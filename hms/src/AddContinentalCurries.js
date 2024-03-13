import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddContinentalBreakfast.css';

function AddContinentalCurries() {
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
            const response = await axios.post('http://localhost:8100/continental/save', item);
            console.log('Item added successfully:', response.data);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <>
            <center>
                <div className="add">
                    <div className="additems-container">
                        <div className="additems-options">
                           
                        <h3>Add new items</h3>
                            <div className="su" type="Curries">
                                <label><b>Curries :</b></label>
                                <input type='text' name='curries' list='Curries' value={item.curries} onChange={handleChange} placeholder='Add new item'  /><br/><br></br>
                                <datalist id="Curries">
                                    <option value="Caesar Salad">Caesar Salad</option>
                                    <option value="Pasta Carbonara">Pasta Carbonara</option>
                                    <option value="Quiche Lorraine">Quiche Lorraine</option>
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
                    <button className='s' type='submit' onClick={handleSubmit}>Add</button><br/>
                    <Link to={'/ContinentalMenu'}>
                        <button className='s' type='submit' >Back</button>
                    </Link>
                </div>
            </center>
        </>
    )
}

export default AddContinentalCurries;
