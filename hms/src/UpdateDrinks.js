import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './UpdateBreakfast.css';

function UpdateDrinks() {
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
                        <div className="ms" type="Drinks">
                                <label><b>Drinks :</b></label>
                                <input type='text' name='drinks' list='Drinks' value={item.drinks} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
                                <datalist id="Drinks">
                                    <option value="Sprite">Sprite</option>
                                    <option value="Thumbs Up">Thumbs Up</option>
                                    <option value="Pulpy">Pulpy</option>
                                    <option value="Fanta">Fanta</option>
                                    <option value="Coco Cola">Coco Cola</option>
                                </datalist>
                            </div>
                            <div className="ms" type="D1_price">
                                <label><b>D1_price :</b></label>
                                <input type='text' name='d1_price' list="D1_price" value={item.d1_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
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

export default UpdateDrinks;
