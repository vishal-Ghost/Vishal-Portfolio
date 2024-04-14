import React from 'react'
import Cards from './Cards'
import reactImg  from '../src/assets/physics.gif'
import graphImg from '../src/assets/line-bars.gif'
import htmlImg from '../src/assets/html.gif'

const Home = () => {
  return (
    <>
    <div style={{height:'100vh',backgroundColor:'rgb(26 34 47)', display:'flex'}}>
      <div style={{flex:1, color:'white',display:'flex',flexDirection:'column' ,justifyContent:'center',marginLeft:'9vw'}}>
        <h1 style={{fontWeight:'bolder'}}>Hi, My Name Is Vishal Bhagat</h1><br/>
        <p>Experienced MERN stack developer with a passion for creating efficient and scalable web applications. Skilled in
        React.js, Node.js, JavaScript, Redux, Oracle, HTML5, CSS, Bootstrap, Material UI, PL/SQL, GitHub, RESTful
        APIs, Responsive Web Design, Agile Methodologies, Unit Testing, and Webpack. Proficient in developing
        cross-platform mobile applications using React Native. Proven track record of delivering high-quality software
        solutions in fast-paced environments. Seeking opportunities to leverage my skills in a dynamic team environment.</p>
      </div>
      <div style={{flex:1, display:'flex', flexDirection:'row', flexWrap:'wrap', gap:50, justifyContent:'center', alignItems:'center'}}>
        <Cards imagPath={reactImg} title={'Programming'}/>
        <Cards imagPath={graphImg} title={'Visualization  '}/>
        <Cards imagPath={htmlImg} title={'Web Design'} />
      </div>
    </div>
    </>
  )
}

export default Home