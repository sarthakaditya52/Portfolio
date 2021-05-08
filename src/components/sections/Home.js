import React, { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="home-container">
            <h5>Hello, my name is</h5>
            <h1>Sarthak Aditya.</h1>
            <h2>I'm a fullstack developer.</h2>
            <div className="home-content">
                I am a graduate from <span><a href="https://www.iiitd.ac.in">IIIT-D</a></span> who loves building web and mobile applications. 
                Currently, I'm working as a freelancer and looking for an opportunity to work for a company where I can work on 
                exciting and challenging projects.
            </div>
            <div onClick={() => props.linkClick(props.aboutRef)} className="home-about-btn" size='lg'>
                <a href="#about">See More</a>
            </div>
        </div>
    )
})

export default Home
