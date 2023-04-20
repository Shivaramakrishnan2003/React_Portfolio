import React from 'react'
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{backgroundColor:"rgb(50, 55, 60)", height:"94.5vh", marginTop:"2.9%"}}>
        <Navbar variant="dark" fixed="top" style={{backgroundColor:"rgb(50, 55, 60)"}}>
        <Container>
          <Navbar.Brand href="#home">Shivaramakrishnan R</Navbar.Brand>
          <Nav>
            <LinkContainer to="/Home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Education">
              <Nav.Link>Education</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Resume">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Aboutme">
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

// backgroundColor: "#7f5a83", backgroundImage: "linear-gradient(315deg, #7f5a83 20%, #0d324d 74%)"
// background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);


export default Layout