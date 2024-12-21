import React from 'react'
import {Link} from "react-scroll"
import "./topcontent.css"
const topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
            <h3>Hi, Iam</h3>
            <h1>G.Jesly Praba</h1>
            <p>Aspiring Web Developer</p>
            <br></br>
            <a href='www.google.com'>
                <button className='topcontent_resume'>Resume</button>
            </a>
            <Link to="projects" smooth={true} duration={500} >
            <button className='topcontent_work'>My Work</button>
            </Link>

        </div>
    </div>
  )
}

export default topcontent