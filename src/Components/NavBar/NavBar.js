import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import './NavBar.css';


class NavBar extends React.Component {

    handleonClick() {
        
    }

    render() {
        return (
            <div className="NavBar">
                <Nav>
                    <Navbar.Brand href="../Home/Home.js"><span>SLETT<i className="fas fa-camera"></i></span></Navbar.Brand>
                    <NavDropdown title="PORTFOLIO" id="portfolio" className="navItem">
                        <NavDropdown.Item className="navItem">LANDSCAPE</NavDropdown.Item>
                        <NavDropdown.Item className="navItem">WEDDING</NavDropdown.Item>
                        <NavDropdown.Item className="navItem">SPORT</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item><Nav.Link href="../About/About.js" className="navItem">ABOUT</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link herf="../Contact/Contact.js" className="navItem">CONTACT</Nav.Link></Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default NavBar;