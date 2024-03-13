import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './UpdateBreakfast.css';

function UpdateSoups() {
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
                        <div className="ms" type="Soups">
                                <label><b>Soups :</b></label>
                                <input type='text' name='soups' list='Soups' value={item.soups} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Soups">
                                    <option value="Tomato">Tomato</option>
                                    <option value="Mutton">Mutton</option>
                                    <option value="Corn">Corn</option>
                                    <option value="Green">Green</option>
                                    <option value="Carrot Ginger">Carrot Ginger</option>
                                </datalist>
                            </div>
                            <div className="ms" type="S_price">
                                <label><b>S_price :</b></label>
                                <input type='text' name='s_price' list="S_price" value={item.s_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
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

export default UpdateSoups;
