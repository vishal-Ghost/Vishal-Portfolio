import React from 'react'
import {Chart} from 'react-chartjs-2'
import 'chart.js/auto';
import Cards from './Cards';
import NodeJSImg from '../src/assets/nodejs.png'
import ReactJSImg from '../src/assets/react.png'
import JSImg from '../src/assets/javascript.png'
import HtmlImg from '../src/assets/html.png'
import CssImg from '../src/assets/css.png'
import SqlImg from '../src/assets/sql.png'
import DockerImg from '../src/assets/docker.png'
import gitImg from '../src/assets/git.png'


import SkillCards from './SkillCards';


const Skills = () => {

    const data = {labels: ['React JS', 'Express JS', 'Node JS','JavaScript'],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['#B83227', '#019031', '#F3B431'],
        hoverBackgroundColor: ['#B83227', '#019031', '#F3B431'],
      },
    ]}

    const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
          const {ctx} = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#99ffff';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };
    

  return (
    <>
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',backgroundColor:'rgb(26 34 47)', height:'100vh'}}>
    <h1 style={{fontWeight:'bolder', color:'white',marginLeft:'9vw'}}>Skills</h1>
    <div style={{marginLeft:'9vw', height:'70vh', display:'flex',justifyContent:'center', flexWrap:'wrap',gap:90}}>
      <SkillCards imagPath={ReactJSImg} title={'React JS'} url={'https://react.dev/'}/>
      <SkillCards imagPath={NodeJSImg} title={'Node JS'} url={'https://nodejs.org/en'} />
      <SkillCards imagPath={JSImg} title={'Javascript'} url={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} />
      <SkillCards imagPath={HtmlImg} title={'HTML'} url={'https://developer.mozilla.org/en-US/docs/Web/HTML'} />
      <SkillCards imagPath={CssImg} title={'CSS'} url={'https://developer.mozilla.org/en-US/docs/Web/CSS'} />
      <SkillCards imagPath={SqlImg} title={'SQL'} url={'https://www.oracle.com/in/database/technologies/appdev/sql.html'} />
      <SkillCards imagPath={DockerImg} title={'Docker'} url={'https://www.docker.com/'}/>
      <SkillCards imagPath={gitImg} title={'Git & Github'} url={'https://github.com/vishal-Ghost'} />
    </div>
    </div>
    </> 
  )
}

export default Skills