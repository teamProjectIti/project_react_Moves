import React from "react";
import Container from "react-bootstrap/Container";
// import  NavDropdown  from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor() { // 1
    super();
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">ITI Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="/Home" className="mx-3">Skills</Link>
                <Link to="/Protfolio" className="mx-3">Protfolio</Link>
                <Link to="/AddUsre" className="mx-3">AddUsre</Link>
                <Link to="/Product" className="mx-3">Product</Link>
                {/* <Link to="/products" className="mx-3">Products</Link> */}
                {/* <h3>{language}</h3> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  // 3 use By Api
  componentDidMount() {
    return <></>;
  }

  // 4 Dispose As like C# when dead Compnent
  componentWillUnmount() {}
}

export default Header;
