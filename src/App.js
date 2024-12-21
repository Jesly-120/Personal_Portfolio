import React from 'react'
import Navbar from './components/Navbar'
import Topcontainer from './components/topcontainer'
import About from "./components/about/about"
import Skillcontainer from "./components/skillcontainer/skillcontainer"
import Project from "./components/project/project"
import ContactForm from './components/ContactForm/ContactForm';
import Footer from "./components/footer/footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Topcontainer/>
      <About/>
     <Skillcontainer/>
     <Project/>
     <ContactForm/>
     <Footer/>
    
    </div>
  )
}

export default App