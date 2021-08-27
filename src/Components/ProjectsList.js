import { useState, useEffect } from "react";
import NewProjectButton from "./NewProjectButton";
import ProjectForm from "./ProjectForm";

const ProjectLists = ({ data }) => {
  const [projectsList, setProjectsList] = useState(data || []);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const jsonKey = "Projects";

  useEffect(() => {
    const loadedProjects = JSON.parse(localStorage.getItem(jsonKey));
    if (loadedProjects) {
      setProjectsList(loadedProjects);
    }
  }, []);

  useEffect(() => {
    const savingProjects = JSON.stringify(projectsList);
    localStorage.setItem(jsonKey, savingProjects);
  }, [projectsList]);

  const addProject = (proj) => {
    if (proj.title || !/^\s*$/.test(proj.title)) {
      const newProjects = [...projectsList, proj];
      setProjectsList(newProjects);
    }
    setAdd(false);
  };

  if (add) {
    return (
      <ProjectForm
        formType="add"
        onCancel={() => setAdd(false)}
        onSubmit={addProject}
      />
    );
  }
  if (edit) {
    return (
      <ProjectForm
        formType="edit"
        onCancel={() => setEdit(false)}
        //onSubmit={editProject}
      />
    );
  }
  return (
    <div>
      <NewProjectButton
        onClick={() => {
          setAdd(!add);
          console.log(add);
        }}
      />
      {projectsList.map(
        (
          { id, title, description, creationData, members, deadline, issues },
          n
        ) => {
          return (
            <div key={id + n}>
              <h2>{title}</h2>
              <p>
                {new Date(creationData.date).toLocaleDateString()}{" "}
                {new Date(creationData.date).toLocaleTimeString()}
              </p>
              <div>
                <h4>Description:</h4>
                <p>{description}</p>
              </div>
              <p>Deadline: {deadline}</p>
              {members && (
                <div>
                  <h4>Members:</h4>
                  <ul>
                    {members.map((member, n) => {
                      return <li key={member + n}>{member}</li>;
                    })}
                  </ul>
                </div>
              )}
              {
                // show number of open issues if any
                issues?.filter((issue) => issue.status === "open").length && (
                  <p>
                    {issues.length} Issue
                    {issues.length !== 1 && "s"} Open
                  </p>
                )
              }
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProjectLists;
