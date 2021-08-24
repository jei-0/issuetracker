import NewProjectButton from "./NewProjectButton";

const ProjectLists = ({ data }) => {
  return (
    <div>
      {data.map(({ id, title, description, issues }, n) => {
        return (
          <div key={id + n}>
            <h3>
              {title}
              <span> |{id}|</span>
            </h3>
            <p>{description}</p>
            {
              // show number of open issues if any
              issues.filter((issue) => issue.status === "open").length && (
                <p>
                  {issues.length} Issue
                  {issues.length !== 1 && "s"} Open
                </p>
              )
            }
          </div>
        );
      })}
      <NewProjectButton />
    </div>
  );
};

export default ProjectLists;
