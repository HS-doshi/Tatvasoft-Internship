import React from 'react'
import { useNavigate } from 'react-router-dom'

function Employ() {
    const Navigate = useNavigate();
    const onClickHomePa = () => {
        Navigate('/')
    }
    return (
        <div>
            <h4>Name : Heet Doshi</h4>
            <h5>I'm confident to give my best to the organization.</h5>

            <button onClick={onClickHomePa}>Navigate to Home Page!</button>
        </div>
    )
}

export default Employ