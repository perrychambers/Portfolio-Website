import React from 'react'

function Hero({ name, title, image}) {
    return (
        <div clasName="hero-wrapper">
            <div className="img-text-wrapper">
                <div className="img-background">
                    <img 
                        src={image} alt="bg"/>
                </div>

                <div className="subtitle">
                    {/* <h1>{name}</h1>
                    <h1>{title}</h1> */}
                </div>
            </div>
        </div>
    )
}

Hero.defaultProps = {
    name: 'Name Here',
    title: 'Title Here'
}

export default Hero
