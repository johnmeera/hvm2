import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddBreakfast.css';

function AddSoups() {
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
                                <input type='text' name='s_price' list="S_price" value={item.s_price} onChange={handleChange} placeholder='Add new item' />
                            </div>
                           
                            <button className='ms1' type='submit' onClick={handleSubmit}>Add</button><br/>
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

export default AddSoups;
