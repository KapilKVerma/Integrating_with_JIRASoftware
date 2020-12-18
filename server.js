const express = require("express");
const app = express();
const jiraClient = require("jira-connector");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

var getIssues = [];
var counter = 0;

var jira = new jiraClient({
  host: "interatewithjira.atlassian.net", //project name
  basic_auth: {
    username: "kapilkumaarverma@gmail.com",
    password: "1snFwtx3nqhPFStbfGr25E26",
  },
  strictSSL: false,
});

const showIssues = (issue) => {
  getIssues.push(issue);
  counter += 1;
  if (counter == 5) {
    console.log(getIssues);
  }
};

app.get("/", (req, res) => {
  res.json({ message: "Data from server" });
});

app.get("/issue", (req, res) => {
  // const issues = ["JIR-6", "JIR-7", "JIR-8", "JIR-9", "JIR-5"];
  const issues = ["JIR-29"];
  issues.forEach((issue) => {
    jira.issue.getIssue(
      {
        issueKey: issue,
      },
      (err, issue) => {
        showIssues(issue.fields.summary);
        console.log(issue);
      }
    );
  });
});

app.post("/issue", async (req, res) => {
  try {
    const issueCreated = await jira.issue.createIssue({
      fields: {
        project: {
          key: "JIR",
        },
        summary: "CyberChief - Issues",
        description: `Path traversal or as it is otherwise known, directory traversal, refers to an attack through which an attacker may trick a web application into reading and subsequently divulging the contents of files outside of the document root directory of the application or the web server.

        Path/directory traversal attacks typically manipulate web application inputs by using the ../ (ie. dot-dot-slash) sequences, or variations like ..\ in Microsoft Windows, to access server file system folders that are higher in the hierarchy than the web root folder.
        
        Typically, path traversal attacks are used to gain access to sensitive information stored within arbitrary files in other areas of a web application or in other parts of the file system that the web server can read.`,
        environment: "Firing Range",
        issuetype: {
          name: "Bug",
        },
        timetracking: {
          originalEstimate: "1d 2h",
          remainingEstimate: "3h 25m",
        },
      },
      function(error, issue) {
        console.log("error", error);
        console.log("issue", issue);
      },
    });
    console.log(issueCreated);
    res.json(issueCreated);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log("Server is up at port " + PORT);
});
