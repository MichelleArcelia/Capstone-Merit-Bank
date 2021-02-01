import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './Dashboard.css';

class Video extends Component {
    render () {
        return (
       


        <video className='VideoBg-world' loop autoPlay>
      <source src='videos/world.mp4' type="video/mp4"/>
 </video>
            
       
        )
    }
}

export default Video;



/*<ReactPlayer
            className='VideoBg'
            url= 'videos/video.mp4'
            width='100%'
            height='100%'
            
            />



<ReactPlayer playing url='video.mp4'
                height='500px'
                width='800px'
                controls='true'
            />*/