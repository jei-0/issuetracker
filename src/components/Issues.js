import { useIssuesContext } from "../contexts/IssuesContext";
import { useHistory } from "react-router-dom";

const Issues = (props) => {
  let history = useHistory();
  const { issues, deleteFromIssues } = useIssuesContext();

  const handleEditClick = (id) => {
    history.push(`/edit/${id}`);
  };
  return (
    <div>
      {issues.map((issue, n) => {
        return (
          <div key={issue.id + n}>
            <h2>{issue["issue summary"]}</h2>
            <p>{issue.id}</p>
            <div>
              <button onClick={() => handleEditClick(issue.id)}>Edit</button>
              <button onClick={() => deleteFromIssues(issue)}>Delete</button>
            </div>
            <p>Identified By: {issue["identified by"]}</p>
            <p>
              Identified Date:{" "}
              {new Date(issue["identified date"]).toLocaleDateString()}
            </p>
            <p>Progress: {issue["progress"]}</p>
            <p>Status: {issue["status"]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Issues;
