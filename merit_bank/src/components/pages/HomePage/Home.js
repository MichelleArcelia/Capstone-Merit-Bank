import React from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
import { homeObjOne, homeObjTwo } from './Data'
import Pricing from '../../Pricing';

function Home() {
    return (
        <>
            <HeroSection { ...homeObjOne } />
            <HeroSection { ...homeObjTwo} />
        </>
    )
}

export default Home;


// <Pricing />
// <HeroSection { ...homeObjFour } />