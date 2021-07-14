import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'
import Icon1 from '../../assets/images/psyche.svg'
import Icon2 from '../../assets/images/discord.svg'
import Icon3 from '../../assets/images/react.svg'
import Icon4 from '../../assets/images/rpi.svg'
import Icon5 from '../../assets/images/vue.svg'

const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Electrical Propulsion Database</ProjectsH2>
                    <ProjectsP>Full Stack Application for NASA Engineers to have a centralized electrical propulsion system. This sytem allowed them to perform their tradeoff studies by comparing systems, as well as performing CRUD operations on the data.</ProjectsP>
                    <ProjectsP>Stack</ProjectsP>
                    <ProjectsP>MySQL, Node(Serverless), VueJS, AWS Services</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Discord Bot</ProjectsH2>
                    <ProjectsP>Server Management Bot that performs a various amount of commands.</ProjectsP>
                    <ProjectsP>Stack</ProjectsP>
                    <ProjectsP>NodeJS, Discord.JS</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Website</ProjectsH2>
                    <ProjectsP>Project to showcase my front-end design skills, as well as learning a new framework in the process. Currently under development.</ProjectsP>
                    <ProjectsP>Stack</ProjectsP>
                    <ProjectsP>ReactJS, Styled Components</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon4}/>
                    <ProjectsH2>Mock Oven Controller</ProjectsH2>
                    <ProjectsP>Real-Time Embedded system developed for Raspberry Pi. Emulates the lifecycle of an oven, controls all the mock elements that work in conjunction with a real oven.</ProjectsP>
                    <ProjectsP>Stack</ProjectsP>
                    <ProjectsP>C, Sockets, Unix</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon5}/>
                    <ProjectsH2>Restaurant Management System</ProjectsH2>
                    <ProjectsP>Full Stack Application that gave CRUD operations to recipes, allowed customers to enter their order and for the chefs to complete those orders. When an order came in, the chefs were able to view the recipe to ensure consistency and quality.</ProjectsP>
                    <ProjectsP>Stack</ProjectsP>
                    <ProjectsP>Spring, VueJS, MySQL</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
