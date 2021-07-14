import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to='skills' onClick={toggle}>
                            Skills
                        </SidebarLink>
                        <SidebarLink to='projects' onClick={toggle}>
                            Projects
                        </SidebarLink>
                        <SidebarLink to='contact' onClick={toggle}>
                            Contact
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
