import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const CreateIssue = () => {
  const [issueData, setIssueData] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/issue", issueData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <h5>Create an issue</h5>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Project</Form.Label>
                <Form.Control
                  as="select"
                  size="sm"
                  onChange={(e) => {
                    setIssueData({ ...issueData, project: e.target.value });
                  }}
                >
                  <option></option>
                  <option>JIR</option>
                  <option>JAR</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Issue Type</Form.Label>
                <Form.Control
                  as="select"
                  size="sm"
                  onChange={(e) => {
                    setIssueData({ ...issueData, issueType: e.target.value });
                  }}
                >
                  <option></option>
                  <option>Bug</option>
                  <option>Task</option>
                  <option>Improvement</option>
                  <option>New Feature</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Summary"
              size="sm"
              onChange={(e) => {
                setIssueData({ ...issueData, summary: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              size="sm"
              onChange={(e) => {
                setIssueData({ ...issueData, description: e.target.value });
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="sm">
            Create
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CreateIssue;
