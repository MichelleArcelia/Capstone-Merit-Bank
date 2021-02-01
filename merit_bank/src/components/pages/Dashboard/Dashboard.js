//import React from 'react'
import HeroSection from '../../HeroSection'
//pulling data properties 
//import { homeObjOne } from './Data'
import Pricing from '../../Pricing';
import DashboardElements from '../../pages/Dashboard/DashboardElements';
import './Dashboard.css';
//import Video from '.././public/images/video.mp4'
//import { HeroContainer, HeroBg, VideoBg } from '../Dashboard/DashboardElements'


//import video from '../videos/video.mp4';



import { Link } from "react-router-dom";
import Video from '../Dashboard/Video';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

function Dashboard() {
    return (
        <>
            <DashboardElements />

            <Pricing />
        </>
    )
}

export default Dashboard;