import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Projects from '../Components/Projects'
import { Element, scroller } from 'react-scroll';
import Skills from '../Components/Skills';
import Exp from '../Components/Exp';


const App = () => {

  const scrollTo = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 500,
      smooth: true,
      offset: -70
    });
  };


  return (
    <>
    <Navbar scrollTo={scrollTo}/>
    <Element name='intro'>
    <Home/>
    </Element>
    <Element name='projects'>
    <Projects/>
    </Element>
    <Element name='skills'>
      <Skills/>
    </Element>
    {/* <Element name='exp'>
      <Exp />
    </Element> */}
    </>
  )
}

export default App