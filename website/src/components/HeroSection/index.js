import React from 'react'
import herovid from '../../assets/videos/herovid.mp4'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted playsInline src={herovid} type='video/mp4'/>
            </HeroBg>
            
        </HeroContainer>
    )
}

export default HeroSection
