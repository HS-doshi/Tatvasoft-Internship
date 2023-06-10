import React from 'react'
import dummying from '../../Images/dummy-image.png'
import './Bookstyle.css'
import Book1 from '../../Images/book1.jpg'

const Booklistning = () => {
    return (
        <div className='productlist'>
            <h1 className='headerbook'>Book Listing</h1>
            <div className='cartcontainer'>
                <h3 className='headtitle'>Product Name - 100 items</h3>
                <h5 className='totalprice'>Sort By
                    <select>
                        <optgroup label='sort'>
                            <option value="acending">a-z</option>
                            <option value="descending">A-Z</option>
                        </optgroup>
                    </select>
                </h5>
            </div>

            <div className='listing-section'>
                <div className='bookforlist'>
                    <div className='image-box'>
                        <div className='images'><img src={Book1} className='images' /></div>
                    </div>
                    <div className='text-box'>
                        <h2 className='item'>Book Title</h2>
                        <h3 className='price'>Price</h3>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper mauris ut ex cursus, ac eleifend nisl

                        </p>
                        <h3 className='price'><b>MRP &#8377; 800</b></h3>
                        <button>Add to Cart</button>
                    </div>
                </div>


                <div className='bookforlist'>
                    <div className='image-box'>
                        <div className='images'><img src={dummying} className='images' /></div>
                    </div>
                    <div className='text-box'>
                        <h2 className='item'>Book Title</h2>
                        <h3 className='price'>Price</h3>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper mauris ut ex cursus, ac eleifend nisl

                        </p>
                        <h3 className='price'><b>MRP &#8377; 800</b></h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className='bookforlist'>
                    <div className='image-box'>
                        <div className='images'><img src={dummying} className='images' /></div>
                    </div>
                    <div className='text-box'>
                        <h2 className='item'>Book Title</h2>
                        <h3 className='price'>Price</h3>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper mauris ut ex cursus, ac eleifend nisl

                        </p>
                        <h3 className='price'><b>MRP &#8377; 800</b></h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className='bookforlist'>
                    <div className='image-box'>
                        <div className='images'><img src={dummying} className='images' /></div>
                    </div>
                    <div className='text-box'>
                        <h2 className='item'>Book Title</h2>
                        <h3 className='price'>Price</h3>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper mauris ut ex cursus, ac eleifend nisl

                        </p>
                        <h3 className='price'><b>MRP &#8377; 800</b></h3>
                        <button>Add to Cart</button>
                    </div>
                </div>


                <div className='bookforlist'>
                    <div className='image-box'>
                        <div className='images'><img src={dummying} className='images' /></div>
                    </div>
                    <div className='text-box'>
                        <h2 className='item'>Book Title</h2>
                        <h3 className='price'>Price</h3>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper mauris ut ex cursus, ac eleifend nisl

                        </p>
                        <h3 className='price'><b>MRP &#8377; 800</b></h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

            </div>
            <div className='pagination'>
                <p>&laquo;</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>&raquo;</p>
            </div>
        </div>
    )
}

export default Booklistning