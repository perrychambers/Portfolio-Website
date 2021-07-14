import React, {useState} from 'react'
import NavBar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import { homeObjOne } from '../components/AboutSection/data'
import Footer from '../components/Footer/index'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection/>
            <AboutSection {...homeObjOne} />
            <Skills />
            <Projects />
            <Contact dark={true} primary={true} darkText={false} id={'contact'}/>
            <Footer />
        </>
    )
}

export default Home
