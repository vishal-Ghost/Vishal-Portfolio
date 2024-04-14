import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import reactLogo from '../src/assets/react.svg'

const Projects = () => {            
  return (
    <>
    <div style={{height:'100vh',backgroundColor:'rgb(26 34 47)'}}>
        <div style={{width:'80vw', height:'100vh',marginLeft:'9vw', display:'flex',flexDirection:'column', gap:20,justifyContent:'center'}}>
        <h1 style={{fontWeight:'bolder', color:'white'}}>Projects</h1>
        <div >
          <Tabs style={{borderBottom:'none', display:'flex',gap:20}} defaultActiveKey={'a3'}>
            <Tab eventKey={'wf'} title={<span style={{color:'grey'}}>Workflow Managment</span>} style={{color:'white'}}>
            <ul style={{display:'flex', flexDirection:'column',gap:20, marginTop:20}}>
              <li>Developed a comprehensive Workflow Management System using React.js, Express.js, and MySQL.</li>
              <li> Implemented JWT authentication for secure user authentication and authorization.</li>
              <li>Designed and developed user management functionalities, allowing for user registration, login, and profile management.</li>
              <li> Integrated drag and drop elements for easy task management and workflow creation</li>
              <li> Implemented multi-step forms for creating and editing workflows, providing a user-friendly experience.</li>
              <li> Utilized MySQL for database management, ensuring data integrity and scalability.</li>
              <li> Integrated a mailing service for notifications and task assignments.</li>
              <li> Successfully delivered a robust and scalable workflow management solution meeting client requirements.</li>
            </ul>
            </Tab>
            <Tab eventKey={'a3'} title={<span style={{color:'grey'}}>Assessment Application</span>} style={{color:'white'}}>
            <ul style={{display:'flex', flexDirection:'column',gap:20, marginTop:20}}>
              <li>Engineered a dynamic Assessment Application using React, Axios, Bootstrap, and Redux for seamless functionality.</li>
              <li>
              Integrated React-Table for streamlined data management and captivating modals for an interactive user experience.
              </li>
              <li>
              Elevated functionality with Redux-powered state management, enabling API-driven global search and export to Excel and PDF.
              </li>
              <li>
              A comprehensive solution blending technology and user-centric design, ensuring optimal assessment experiences with enhanced efficiency and user engagement.
              </li>
            </ul>
            </Tab>
            <Tab eventKey={'dda'} title={<span style={{color:'grey'}}>Data Driven Audit Management</span>} style={{color:'white'}}>
              <ul style={{display:'flex', flexDirection:'column',gap:20, marginTop:20}}>
           <li> Skillfully crafted a dynamic application with a secure login, intricate forms, and attachments using Bootstrap, React Table, and Charts.js 2 for data visualization.
           </li>
          <li>Implemented Redux for state management, Axios for seamless API calls, resulting in a robust and aesthetically pleasing user experience.
          </li>
            </ul>
            </Tab>
            <Tab eventKey={'rnp'} title={<span style={{color:'grey'}}>React Native Project</span>} style={{color:'white'}}>
              <ul style={{display:'flex', flexDirection:'column',gap:20, marginTop:20}}>
                <li>
                Developed a basic React Native project to demonstrate fundamental mobile app development skills
                </li>
                <li>
                Created a simple mobile application with basic UI components and navigation features.
                </li>
                <li>
                Utilized React Native’s capabilities to build a cross-platform mobile app for iOS and Android
                </li>
                <li>
                Implemented basic functionality such as user input, data display, and navigation between screens.
                </li>
              </ul>
            </Tab>
            <Tab eventKey={'fw'} title={<span style={{color:'grey'}}>Framework</span>} style={{color:'white'}}>
              <ul style={{display:'flex', flexDirection:'column',gap:20, marginTop:20}}>
                <li>
                Integrated JWT token authentication for enhanced security and implemented Redux for robust state management.
                </li>
                <li>
                Introduced multi-row capabilities using React Table, expanded reporting functionalities, and innovatively incorporated a configuration feature for dynamic form creation and editing directly from the frontend.
                </li>
                <li>
                Redefined workflow management with streamlined configurations, fostering a highly adaptable and feature-rich application experience.
                </li>
              </ul>
            </Tab>
          </Tabs>
        </div>
        </div>
    </div>
    </>
  )
}

export default Projects