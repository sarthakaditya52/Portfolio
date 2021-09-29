import React, { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="home-container">
            <h5>Hello, my name is</h5>
            <h1>Sarthak Aditya.</h1>
            <h2>I'm a fullstack developer.</h2>
            <div className="home-content">
                I am a software developer who is always looking for an opportunity to work on exciting and challenging projects. 
                Currently, I'm working on building highly responsive and functional web applications at <span><a href="https://www.plunes.com">Plunes</a></span>.
            </div>
            <div onClick={() => props.linkClick(props.aboutRef)} className="home-about-btn" size='lg'>
                <a href="#about">See More</a>
            </div>
        </div>
    )
})

export default Home
