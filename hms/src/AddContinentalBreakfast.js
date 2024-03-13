import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddContinentalBreakfast.css';

function AddContinentalBreakfast() {
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
                            <div className="su" type="Breakfast">
                                <label><b>Breakfast :</b></label>
                                <input type='text' name='breakfast' list="Breakfast" value={item.breakfast} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                               
                                <datalist id="Breakfast">
                                    <option value="Dosa">Dosa</option>
                                    <option value="Croissant">Croissant</option>
                                    <option value="Omelette">Omelette</option>
                                    <option value="Yogurt Parfait">Yogurt Parfait</option>  
                                    <option value="Samosa">Samosa</option> 
                                    
                                </datalist>
                            </div>
                            <div className="su" type="B_price">
                                <label><b>B_price :</b></label>
                                <input type='text' name='b_price' list="B_price" value={item.b_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
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

export default AddContinentalBreakfast;
