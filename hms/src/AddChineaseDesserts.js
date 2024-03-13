import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddChineaseBreakfast.css';

function AddChineaseDesserts() {
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
            const response = await axios.post('http://localhost:8100/chinease/save', item);
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
                    <button className='s' type='submit' onClick={handleSubmit}>Add</button><br/>
                    <Link to={'/ChineaseMenu'}>
                        <button className='s' type='submit' >Back</button>
                    </Link>
                </div>
            </center>
        </>
    )
}

export default AddChineaseDesserts;
