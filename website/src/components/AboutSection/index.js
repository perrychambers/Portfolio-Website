import React from 'react'
//import { Button } from '../ButtonElement'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper,
     TopLine, Heading, Subtitle, ImgWrap, Img } from './AboutElements'

const About = ({
    lightBg, id, imgStart, topLine, lightText, darkText, headline, 
    description, buttonLabel, img, alt, primary, dark, dark2
    }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightText={lightText}>{description}</Subtitle>
                                {/* <BtnWrap>
                                    <Button to='home' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0 }
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap> */}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
