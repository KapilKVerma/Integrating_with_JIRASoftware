import React from "react";
import CompletedIssue from "./CompletedIssue";

const CompletedIssues = () => {
  const issuesAssigned = [
    { index: "1", name: "Issue 1", description: "This is the first issue" },
    { index: "2", name: "Issue 2", description: "This is the second issue" },
    { index: "3", name: "Issue 3", description: "This is the third issue" },
  ];
  return (
    <div>
      <h5 className="mb-4">Your completed issues</h5>
      {issuesAssigned &&
        issuesAssigned.map((issue) => {
          return (
            <CompletedIssue
              name={issue.name}
              description={issue.description}
              key={issue.index}
            />
          );
        })}
    </div>
  );
};

export default CompletedIssues;
