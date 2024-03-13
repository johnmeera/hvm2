import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './UpdateBreakfast.css';

function UpdateStarters() {
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
                        <div className="ms" type="Starters">
                                <label><b>Starters :</b></label>
                                <input type='text' name='starters' list='Starters' value={item.starters} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Starters">
                                    <option value="Veg Paneer Tikka">Veg Paneer Tikka</option>
                                    <option value="Chicken Lollipops">Chicken Lollipops</option>
                                    <option value="Chicken Wings">Chicken Wings</option>
                                    <option value="Vada Pav">Vada Pav</option>
                                    <option value="Cabbage Pakora">Cabbage Pakora</option>
                                </datalist>
                            </div>
                            <div className="ms" type="S1_price">
                                <label><b>S1_price :</b></label>
                                <input type='text' name='s1_price' list="S1_price" value={item.s1_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
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

export default UpdateStarters;
