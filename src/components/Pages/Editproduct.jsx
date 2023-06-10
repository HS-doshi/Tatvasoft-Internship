import React from 'react'
import './Editproduct.css'

// fname, lname, shopby category, self help, business, Description, save , cancel
const Editproduct = () => {
    return (
        <div className='Editproduct'>
            <h1 className='headeredit'>Edit Product</h1>
            <hr />
            <div className='editinfo'>
                <div className='edit'>
                    <p>First Name *</p>
                    <input type='text' required />
                </div>
                <div className='edit'>
                    <p>Last Name *</p>
                    <input type='text' required />
                </div>
            </div>
            <div className='editinfo'>
                <div className='edit'>
                    <p>Shop by Categories</p>
                    <select>
                        <optgroup label='Books'>
                            <option value='self-help'>Self Help</option>
                            <option value='business'>Business</option>
                        </optgroup>
                    </select>
                </div>
                <div className='edit1'>
                    <p className='desci'>Description</p>
                    <input type='text' required />
                </div>
            </div>
            <div className='editinfo'>
                <div className='edit'>
                    <input type='file' />
                </div>
            </div>
            <div className='editinfo'>
                <div className='edit'>
                    <button type='submit' className='save-btn'><b>Save</b></button>
                    <button type='submit' className='cancel-btn'><b>Cancel</b></button>
                </div>
            </div>
        </div>
    )
}

export default Editproduct