import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Axios from "axios";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const JiraIssue = () => {
  const url = "https://interatewithjira.atlassian.net/rest/api/2/issue/JIR-4";
  useEffect(() => {
    try {
      Axios.get(url, {
        header: {
          Authorization:
            "Basic a2FwaWxrdW1hYXJ2ZXJtYUBnbWFpbC5jb206MXNuRnd0eDNucWhQRlN0YmZHcjI1RTI2",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      Jira Issue
      <Button variant="contained" color="primary">
        This is it.
      </Button>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Paper>
    </div>
  );
};

export default JiraIssue;
