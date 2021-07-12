import React from 'react'

function About({ bio, objective, description }) {
    return (
        <div className='about'>
            <h1>{bio}</h1>
            <h1>{objective}</h1>
            <h1>{description}</h1>
        </div>
    )
}

export default About
