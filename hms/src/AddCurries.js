import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './AddBreakfast.css';

function AddCurries() {
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
                            <div className="ms" type="Curries">
                                <label><b>Curries :</b></label>
                                <input type='text' name='curries' list='Curries' value={item.curries} onChange={handleChange} placeholder='Add new item'  /><br/><br></br>
                                <datalist id="Curries">
                                    <option value="Butter Chicken">Butter Chicken</option>
                                    <option value="Paneer Tikka Massala">Paneer Tikka Massala</option>
                                    <option value="Rajma Chawal">Rajma Chawal</option>
                                    <option value="Chicken Curry">Chicken Curry</option>
                                    <option value="Mutton Curry">Mutton Curry</option>
                                </datalist>
                            </div>
                            <div className="ms" type="C_price">
                                <label><b>C_price :</b></label>
                                <input type='text' name='c_price' list="B_price" value={item.c_price} onChange={handleChange} placeholder='Add new item' />
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

export default AddCurries;