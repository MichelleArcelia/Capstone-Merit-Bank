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



        </>
    )
}

export default Login;