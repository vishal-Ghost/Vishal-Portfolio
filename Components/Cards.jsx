import React from 'react'

const Cards = ({imagPath, title}) => {
  return (
    <div style={{width:'20vh', height:'10vw', display:'flex', flexDirection:'column',gap:10,justifyContent:'center', alignItems:'center', color:'gray'}}>
        <img src={imagPath} style={{height:'15vh', borderRadius:'50px'}} />
        <h6>{title}</h6>
    </div>
    )
}

export default Cards