import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignUpForm from './SignUpForm';
import '../Styles/CustomNavbar.css';

function CustomNavbar() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="custom-navbar-brand">OTT Platform</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="custom-navbar-toggle" />
          <Navbar.Collapse id="navbarScroll" className="custom-navbar-collapse">
            <Nav className="me-auto my-2 my-lg-0 custom-navbar-nav" navbarScroll>
              <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies" className="custom-nav-link">Movies</Nav.Link>
              <Nav.Link as={Link} to="/tvshows" className="custom-nav-link">TV Shows</Nav.Link>
              <Nav.Link as={Link} to="/categories" className="custom-nav-link">Categories</Nav.Link>
              <Nav.Link as={Link} to="/profile" className="custom-nav-link">Profile</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown" className="custom-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action3" className="custom-nav-dropdown-item">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4" className="custom-nav-dropdown-item">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5" className="custom-nav-dropdown-item">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex custom-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 custom-search-input"
                aria-label="Search"
              />
              {/* <Button variant="outline-light" className="custom-search-button">Search</Button> */}
            </Form>
            <Button variant="primary" className="custom-signup-button" onClick={handleSignUpClick}>Sign Up</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showSignUp && <SignUpForm onClose={handleCloseSignUp} />}
    </>
  );
}

export default CustomNavbar;
