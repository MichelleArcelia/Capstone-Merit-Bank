import React from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
import { homeObjOne } from './Data'
import Pricing from '../../Pricing';

function Dashboard() {
    return (
        <>
            <Pricing />
            <HeroSection { ...homeObjOne} />
        </>
    )
}

export default Dashboard;