import React from 'react'
import Tatvasoft from "../../Images/Tatvasoft-logo-profile.jpg"
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Tatvasoft} alt='Tatvasoft' className='footer-img' />
            <p className='footer-text'><small>© 2015 Tatvasoft.com. All rights reserved.</small></p>
        </div>
    )
}

export default Footer