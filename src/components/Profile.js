import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const Navigate = useNavigate();
    const onClikcHomePage = () => {
        Navigate("/");
    }
    return (
        <div>
            <h4>Completed the work of 1,2 and 3rd day.</h4>
            <button onClick={onClikcHomePage}>Navigate to Home Page!</button>
        </div>
    )
}

export default Profile