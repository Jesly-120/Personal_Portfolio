import React from 'react'
import { Element } from "react-scroll";
import skilling from "../../images/skilling.png" 
import { LinearProgress } from '@mui/material';
import "./skillcontainer.css";
const skillcontainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
        <div className='skillcontainer_image'>
            <img src={skilling} alt=''/>
        </div>
        <br></br>
        <div className='skillcontainer_text'>
            <h2>SKILLSET</h2>
            <br></br>
            <div className='skillcntainer_skillset'>
                <h5>HTML</h5>
                <div className='skillcontainer_slider skillcontainer_slider1'>
                  <LinearProgress variant="determinate" value={90}/>
                </div>
            </div>
            <br></br>
            <div className='skillcontainer_skillset'>
                <h5>CSS</h5>
                <div className='skillcontainer_slider skillcontainer_slider2'>
                  <LinearProgress variant="determinate" value={85}/>
                </div>
            </div>
            <br></br>
            <div className='skillcntainer_skillset'>
                <h5>JAVASCRIPT</h5>
                <div className='skillcontainer_slider skillcontainer_slider3'>
                  <LinearProgress variant="determinate" value={70}/>
                </div>
            </div>
            <br></br>
            <div className='skillcntainer_skillset'>
                <h5>JAVA</h5>
                <div className='skillcontainer_slider skillcontainer_slider4'>
                  <LinearProgress variant="determinate" value={65}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default skillcontainer