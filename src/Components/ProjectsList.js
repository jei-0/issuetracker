import NewProjectButton from "./NewProjectButton";

const ProjectLists = ({ data }) => {
  return (
    <div>
      {data.map(
        ({ projectID, projectTitle, projectDescription, projectIssues }, n) => {
          return (
            <div key={projectID + n}>
              <h3>
                {projectTitle}
                <span> |{projectID}|</span>
              </h3>
              <p>{projectDescription}</p>
              {
                // show number of open issues if any
                projectIssues.filter((issue) => issue.issueStatus === "open")
                  .length && (
                  <p>
                    {projectIssues.length} Issue
                    {projectIssues.length !== 1 && "s"} Open
                  </p>
                )
              }
            </div>
          );
        }
      )}
      <NewProjectButton />
    </div>
  );
};

export default ProjectLists;
