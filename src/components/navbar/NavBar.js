import React, { useEffect, useRef, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo'
import resume from '../../assets/files/resume.pdf'
import { navLinks } from './navLinks'

function NavBar({linkClick, refs}) {

    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)  
  
  
    useEffect(() => {

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
    
            if ((prevScrollPos > currentScrollPos) !== visible)
            {
                setVisible(prevScrollPos > currentScrollPos)
            }
    
            setPrevScrollPos(currentScrollPos)
            
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
  
    }, [prevScrollPos, visible])
  
    const navRef = useRef(null)

    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(navRef.current.classList.contains('show'))
    }, [])

    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <Navbar className={`${visible ? "nav-show" : "nav-show-not"} ${prevScrollPos === 0 && "nav-no-shadow nav-show"}`}expand="lg">
            <Navbar.Brand className="nav-brand" href="https://sarthakaditya52.github.io">
                <Logo nav={true} />
            </Navbar.Brand>
            <span onClick={toggleShow}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <div className={`nav-icon ${show && 'active'}`}>
                        <div></div>
                    </div>
                </Navbar.Toggle>
            </span>
            <Navbar.Collapse ref={navRef} id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {navLinks.map((link, index) =>
                        <Nav.Link key={index} onClick={() => linkClick(refs[index])} href={link.address}>
                            <span className="nav-links-container">
                                <div className="nav-link-index">
                                    {(index + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}.
                                </div>
                                <div className="nav-link-label">
                                    {link.label}
                                </div>
                            </span>
                        </Nav.Link>
                    )}
                    <Nav.Link href={resume} className="nav-link-resume" download="Sarthak_Aditya_Fullstack.pdf">
                        <div className="resume-link">
                            Resume
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
