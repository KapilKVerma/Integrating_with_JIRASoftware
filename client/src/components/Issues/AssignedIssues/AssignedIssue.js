import React, { useState, useEffect } from "react";
import { Card, Button, Badge } from "react-bootstrap";

// Css
import "./AssignedIssue.css";

const AssignedIssue = (props) => {
  const { name, description } = props;
  const [details, setDetails] = useState("issue-details");
  const [status, setStatus] = useState("");
  const [button, setButton] = useState();

  const controlDetails = () => {
    if (details === "issue-details") setDetails("");
    else setDetails("issue-details");
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
              {/* <span
                style={{
                  background: "steelblue",
                  padding: "5px",
                  fontSize: "14px",
                  cursor: "pointer",
                  color: "white",
                  borderRadius: "3px",
                }}
                className="mr-1"
                onClick={controlDetails}
              >
                Details
              </span> */}
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
            <hr></hr>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                size="sm"
                variant="warning"
                className="mr-1"
                onClick={changeStatusTrue}
              >
                Start
              </Button>
              <Button size="sm" variant="success" onClick={changeStatusFalse}>
                Completed
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AssignedIssue;
