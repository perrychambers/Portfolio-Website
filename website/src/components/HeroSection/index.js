import React, { useState } from 'react'
import herovid from '../../assets/videos/herovid.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer id='hero'>
            <HeroBg>
                <VideoBg autoPlay loop muted playsInline src={herovid} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello, I'm</HeroH1>
                <HeroH1>Perry Chambers Jr.</HeroH1>
                <HeroP>Software Engineer</HeroP>
                <HeroBtnWrapper>
                    <Button to='about' 
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    activeClass='active'
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>About Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
