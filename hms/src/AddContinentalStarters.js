import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddContinentalBreakfast.css';

function AddContinentalStarters() {
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
                        <div className="su" type="Starters">
                                <label><b>Starters :</b></label>
                                <input type='text' name='starters' list='Starters' value={item.starters} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Starters">
                                    <option value="Veg Paneer Tikka">Veg Paneer Tikka</option>
                                    <option value="Chicken Lollipops">Chicken Lollipops</option>
                                    <option value="Gobhi Manchurian">Gobhi Manchurian</option>
                                    <option value="Corn & Paneer Enchiladas">Corn & Paneer Enchiladas</option>
                                    <option value="Cabbage Pakora">Cabbage Pakora</option>
                                </datalist>
                            </div>
                            <div className="su" type="S1_price">
                                <label><b>S1_price :</b></label>
                                <input type='text' name='s1_price' list="S1_price" value={item.s1_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
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

export default AddContinentalStarters;
