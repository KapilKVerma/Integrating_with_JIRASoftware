import React, { useState, useEffect } from "react";
import { Card, Button, Badge } from "react-bootstrap";

// Css
import "./CompletedIssue.css";

const CompletedIssue = (props) => {
  const { name, description } = props;
  const [details, setDetails] = useState("completed-issue-details");
  const [status, setStatus] = useState("");
  const [button, setButton] = useState();

  const controlDetails = () => {
    if (details === "completed-issue-details") setDetails("");
    else setDetails("completed-issue-details");
  };

  const controllButtons = () => {
    if (status === true) {
      setButton(
        <Button variant="warning" size="sm" style={{ pointerEvents: "none" }}>
          In Progress
        </Button>
      );
    } else if (status === false) {
      setButton(
        <Button variant="success" size="sm" style={{ pointerEvents: "none" }}>
          Completed
        </Button>
      );
    }
  };

  const changeStatusTrue = () => {
    setStatus(true);
  };

  const changeStatusFalse = () => {
    setStatus(false);
  };

  useEffect(() => {
    controllButtons();
  }, [status]);

  return (
    <>
      <div>
        <Card style={{ borderRadius: "0px", marginBottom: "4px" }}>
          <Card.Header
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              {name} - {description}
            </div>
            <div>
              <Button
                variant="info"
                size="sm"
                onClick={controlDetails}
                className="mr-1"
              >
                Details
              </Button>

              {button && button}
            </div>
          </Card.Header>
          <Card.Body className={details}>
            <div>Details of {name}</div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CompletedIssue;
