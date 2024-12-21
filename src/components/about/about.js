import React from 'react'
import "./about.css";
import aboutme from "../../images/portf.jpg"
import { Element } from "react-scroll";
const about = () => {
  return (
    <Element className='about' id='about'>
    <div className='about__container'> 
        <div className='aboutme'>
            <h1>ABOUT ME:</h1>
            <br></br>
            <br></br>
            <p>Iam a hard working,punctual and sincere person.Iam a good listener.Iam a self motivated person.Iam always willing to learn
            new skills.My short term goal is to get placed in a reputed company.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr className='new1'></hr>
        </div>
        <div className='about_image'>
          
            <img src={aboutme} alt=''/>
        </div>
    </div>
    </Element>
  )
}

export default about