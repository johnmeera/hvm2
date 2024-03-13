import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddBreakfast.css';

function AddBreakfast() {
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
                <div className="add-ms" >
                    <div className="additems-container-ms">
                        <div className="additems-options-ms">
                            <h3 className='s2-ms3'>Add new items</h3>
                            <div className="ms" type="Breakfast">
                                <label><b>Breakfast :</b></label>
                                <input type='text' name='breakfast' list="Breakfast" value={item.breakfast} onChange={handleChange} placeholder='Add new item' />
                               
                                <datalist id="Breakfast">
                                    <option value="Dosa">Dosa</option>
                                    <option value="Upma">Upma</option>
                                    <option value="Idli">Idli</option>
                                    <option value="Samosa">Samosa</option> 
                                    <option value="Poori">Poori</option>  
                                </datalist>
                            </div>
                            <div className="ms" type="B_price">
                                <label><b>B_price :</b></label>
                                <input type='text' name='b_price' list="B_price" value={item.b_price} onChange={handleChange} placeholder='Add new item' /><br/>
                            </div>
                        
                           
                        </div> 
                    </div>
                    <button className='ms1' type='submit' onClick={handleSubmit}>Add</button><br/>
                    <Link to={'/IndianMenu'}>
                        <button className='ms1' type='submit' >Back</button>
                    </Link>
                </div>
                
            </center>
            </div>
        </>
    )
}

export default AddBreakfast;
