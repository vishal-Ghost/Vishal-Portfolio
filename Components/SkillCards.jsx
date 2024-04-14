import React from 'react'
import './SkillCards.css'

const SkillCards = ({imagPath, title, url}) => {

    function handleLinkOpen(){
        window.open(url,'_blank')
    }

  return (
    <div  style={{width:'20vh', height:'13vw', display:'flex', flexDirection:'column',gap:10,justifyContent:'center', alignItems:'center', color:'gray'}}>
        <img loading='lazy' onClick={handleLinkOpen} className='skillImg' src={imagPath} style={{height:'15vh'}} />
        <h6>{title}</h6>
    </div>
    )
}

export default SkillCards