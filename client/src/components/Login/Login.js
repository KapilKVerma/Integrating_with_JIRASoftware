import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

// Css
import "./Login.css";

const Component2 = () => {
  return (
    <>
      <div className="login-body">
        <h1 style={{ color: "white" }}>Login</h1>
        <Card style={{ width: "25%", height: "30%" }} className="p-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Component2;
