import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, WebsiteRights, SocialIcons, SocialIconLink, SocialMediaWrap} from './FooterElements'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>Perry Chambers Jr © {new Date().getFullYear()} </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/perry.chambers.7/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/perrychambers/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//twitter.com/perry_chambers' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com/in/perry-chambers-jr-7bbbb3209/' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin /> 
                            </SocialIconLink>
                            <SocialIconLink href='//www.github.com/perrychambers' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
