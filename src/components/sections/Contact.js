import React from 'react'
import SectionHeading from '../SectionHeading'

function Contact() {
    return (
        <div>
            <SectionHeading index={4} heading="Contact" />
            <div className="contact-head">
                Get In Touch
            </div>
            <p className="contact-desc">
                Looking for a fullstack developer or have a question ?
                <br />Feel free to contact me.
            </p>
            <div className="email-btn">
                <a href="mailto:sarthak.aditya52@gmail.com">Say Hello</a>
            </div>
        </div>
    )
}

export default Contact
