import React from 'react'
import filePath from '../src/assets/VISHAL_RESUME_MERN_DEV.pdf'

const Navbar = ({scrollTo}) => {

  function handleResumeDownload(){
    const a = document.createElement('a')
    a.href = filePath
    a.setAttribute('download','VISHAL_RESUME_MERN_DEV.pdf')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <>
    <nav  style={{ height:'20vh', display:'flex', justifyContent:'space-evenly', alignItems:'center', position:'sticky', top:0, backgroundColor:'rgb(26 34 47)'}}>
        <div style={{flex:1}}>
            <p align='center' style={{color:'white', fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize:20 }}>Vishal Bhagat<br/>Full-Stack Developer</p>
        </div>
        <div style={{display:'flex', flex:2, justifyContent:'space-evenly'}}>
        <button onClick={()=>scrollTo('intro')} className='btn btn-outline-warning'>Introduction</button>
        <button onClick={()=>scrollTo('projects')} className='btn btn-outline-warning'>Projects</button>
        <button onClick={()=>scrollTo('skills')} className='btn btn-outline-warning'>Skills</button>
        {/* <button onClick={()=>scrollTo('exp')} className='btn btn-outline-warning'>Experience</button>
        <button className='btn btn-outline-warning'>Education</button>
        <button className='btn btn-outline-warning'>Contact</button> */}
        <button onClick={handleResumeDownload} className='btn btn-outline-warning'>Resume</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar