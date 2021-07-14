import React from 'react'
import { SkillsContainer, SkillsWrap, SkillsTitleContainer, SkillsTitleWrapper, 
    SkillsItems, SkillsItemsTitle, SkillsTitle, SkillsText } from './SkillsElements'


const Skills = () => {
    return (
        <SkillsContainer id='skills'>
            <SkillsWrap>
            <SkillsText>Technical Skills</SkillsText>
                <SkillsTitleContainer>
                    <SkillsTitleWrapper>
                        <SkillsItems>
                            <SkillsItemsTitle>Languages</SkillsItemsTitle>
                                <SkillsTitle>JavaScript (ES6)</SkillsTitle>
                                <SkillsTitle>HTML & CSS</SkillsTitle>
                                <SkillsTitle>Java</SkillsTitle>
                                <SkillsTitle>C/C++</SkillsTitle>
                                <SkillsTitle>Python</SkillsTitle>
                        </SkillsItems>
                        <SkillsItems>
                            <SkillsItemsTitle>Frameworks</SkillsItemsTitle>
                                <SkillsTitle>React</SkillsTitle>
                                <SkillsTitle>Vue</SkillsTitle>
                                <SkillsTitle>Node</SkillsTitle>
                                <SkillsTitle>Spring</SkillsTitle>
                        </SkillsItems>
                        <SkillsItems>
                            <SkillsItemsTitle>Tools</SkillsItemsTitle>
                                <SkillsTitle>Git & Github</SkillsTitle>
                                <SkillsTitle>Chrome/Firefox DevTools</SkillsTitle>
                                <SkillsTitle>MongoDB</SkillsTitle>
                                <SkillsTitle>SQL/MySQL</SkillsTitle>
                        </SkillsItems>
                        <SkillsItems>
                            <SkillsItemsTitle>Design</SkillsItemsTitle>
                                <SkillsTitle>Photoshop</SkillsTitle>
                                <SkillsTitle>Illustrator</SkillsTitle>
                                <SkillsTitle>Prototyping</SkillsTitle>
                                <SkillsTitle>Vuetify & React Bootstrap</SkillsTitle>
                        </SkillsItems>
                    </SkillsTitleWrapper>
                </SkillsTitleContainer>
            </SkillsWrap>
        </SkillsContainer>
    )
}

export default Skills
