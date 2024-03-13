import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddContinentalBreakfast.css';

function AddContinentalSoups() {
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
                        <div className="su" type="Soups">
                                <label><b>Soups :</b></label>
                                <input type='text' name='soups' list='Soups' value={item.soups} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Soups">
                                    <option value="Kale Soup">Kale Soup</option>
                                    <option value="Taco Soup">Taco Soup</option>
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
                    <button className='s' type='submit' onClick={handleSubmit}>Add</button><br/>
                    <Link to={'/ContinentalMenu'}>
                        <button className='s' type='submit' >Back</button>
                    </Link>
                </div>
            </center>
        </>
    )
}

export default AddContinentalSoups;
