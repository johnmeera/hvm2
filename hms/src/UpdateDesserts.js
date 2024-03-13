import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './UpdateBreakfast.css';

function UpdateDesserts() {
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
                        <div className="ms" type="Desserts">
                                <label><b>Desserts :</b></label>
                                <input type='text' name='desserts' list='Desserts' value={item.desserts} onChange={handleChange} placeholder='Add new item'  /><br/><br></br>
                                <datalist id="Desserts">
                                    <option value="Strawberry Cake">Strawberry Cake</option>
                                    <option value="ButterScotch Ice Cream">ButterScotch Ice Cream</option>
                                    <option value="Gulab Jabunm">Gulab Jabunm</option>
                                    <option value="Kaju Katli">Kaju Katli</option>
                                    <option value="Kheer">Kheer</option>
                                </datalist>
                            </div>
                            <div className="ms" type="D_price">
                                <label><b>D_price :</b></label>
                                <input type='text' name='d_price' list="D_price" value={item.d_price} onChange={handleChange} placeholder='Add new item' /><br/><br></br>
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

export default UpdateDesserts;
