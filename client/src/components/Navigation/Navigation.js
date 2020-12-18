import React from "react";
import { useSpring, animated } from "react-spring";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Navigation = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 },
  });
  const style = {
    backgroundColor: "steelblue",
    padding: "1.5rem",
    color: "white",
  };
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#home">Jira - Integration</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto" className="justify-content-end">
            <NavDropdown title="User Name" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Issues</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
