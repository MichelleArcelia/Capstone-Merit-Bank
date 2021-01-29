import React from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
import { homeObjThree, homeObjFour } from './Data'
import Pricing from '../../Pricing';

function Login() {
    return (
        <>
            <HeroSection { ...homeObjThree } />
            <Pricing />
            <HeroSection { ...homeObjFour } />

            <div className="modal" id="email-modal">
                <div className="modal-content">
                    <span className="close-btn">&times;</span>
                    <div className="modal-content-left">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;