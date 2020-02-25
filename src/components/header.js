import { Link } from "gatsby";
import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
// import "../styles/styles.scss";

const Styles = styled.div`
    /* .navbar{
        background-color: white;
    } */

    .navbar-brand{
        text-transform: uppercase;
        letter-spacing: 1.2px;
        font-size: 1.2rem;
        font-weight: 700;
        color: #303030;
        &:hover {
            color: rgb(255, 217, 0);
        }
    }

    .nav-item{
        text-transform: uppercase;
        letter-spacing: 1.2px;
        font-size: 0.8rem;
        color: #303030;
        .nav-link{
            &:hover {
            color: rgb(255, 217, 0);
            }
        }
    }
`
const Header = () => (
    <Styles>
        <Navbar>
            <Navbar.Brand href="/">Tianchang</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default Header;



// const Header1 = () => (
//     <header>
//         <div className='container'>
//             <div className="inner-header">
//                 <div className="logo">
//                     <Link to="/">Tianchang</Link>
//                 </div>
//                 <div className="mr-auto navigation">
//                     <nav>
//                         {/* <Link to="/">Home</Link> */}
//                         <Link to="/projects">Projects</Link>
//                         <Link to="/about">Resume</Link>
//                         <Link to="/photograhy">Photography</Link>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     </header>
// )

// const Header2 = () => (
//     <Navbar>
//         <Navbar.Brand href="/">Tianchang</Navbar.Brand>
//         {/* <Navbar.Toggle /> */}
//         <Navbar.Collapse className="nav-text justify-content-end">
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/projects">Projects</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//         </Navbar.Collapse>
//     </Navbar>
// )