import React from 'react'
import '../Logout/Logout.css';


function Logout() {
    return (
        <>

            <div className='Logoutimage'>
                
                    <img src='images/Flogo_Full.png' alt='LoginImage' />
                

            </div>

            <div className='Logout'>
                <h1>You've been logged out, Michelle</h1>
                <h3>Thanks for visiting, you've been safely signed out of your account. Until next time!</h3>

            </div>
        </>
    )
}

export default Logout
