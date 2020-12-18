import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import AssignedIssue from "./AssignedIssue";

const AssignedIssues = () => {
  const issuesAssigned = [
    { index: "1", name: "Issue 1", description: "This is the first issue" },
    { index: "2", name: "Issue 2", description: "This is the second issue" },
    { index: "3", name: "Issue 3", description: "This is the third issue" },
  ];
  return (
    <>
      <Container>
        <h5 className="mb-4">Your assigned issues</h5>
        {issuesAssigned &&
          issuesAssigned.map((issue) => {
            return (
              <AssignedIssue
                name={issue.name}
                description={issue.description}
                key={issue.index}
              />
            );
          })}
      </Container>
    </>
  );
};

export default AssignedIssues;
