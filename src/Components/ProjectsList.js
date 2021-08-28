import { useState, useEffect } from "react";
import NewProjectButton from "./NewProjectButton";
import ProjectForm from "./ProjectForm";

const ProjectLists = ({ data }) => {
  const [projectsList, setProjectsList] = useState(data || []);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState({ active: false, project: undefined });

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

  const editProject = (proj) => {
    if (proj.projectEntry.title || !/^\s*$/.test(proj.projectEntry.title)) {
      const newProjects = [...projectsList];
      newProjects[proj.projectIndex] = proj.projectEntry;
      setProjectsList(newProjects);
    }
    setEdit({ active: false, project: undefined });
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
  if (edit.active) {
    return (
      <ProjectForm
        formType="edit"
        projectIndex={edit.index}
        activeProject={edit.project}
        onCancel={() => setEdit({ ...edit, active: false })}
        onSubmit={editProject}
      />
    );
  }
  return (
    <div>
      <NewProjectButton
        onClick={() => {
          setAdd(true);
        }}
      />
      {projectsList.map((project, n) => {
        return (
          <div key={project.id + n}>
            <h2>{project.title}</h2>
            <div>
              <button
                onClick={() =>
                  setEdit({ active: true, project: project, index: n })
                }
              >
                Edit
              </button>
            </div>
            <p>
              {new Date(project.creationData.date).toLocaleDateString()}{" "}
              {new Date(project.creationData.date).toLocaleTimeString()}
            </p>
            <div>
              <h4>Description:</h4>
              <p>{project.description}</p>
            </div>
            <p>Deadline: {project.deadline}</p>
            {project.members && (
              <div>
                <h4>Members:</h4>
                <ul>
                  {project.members.map((member, n) => {
                    return <li key={member + n}>{member}</li>;
                  })}
                </ul>
              </div>
            )}
            {
              // show number of open issues if any
              project.issues?.filter((issue) => issue.status === "open")
                .length && (
                <p>
                  {project.issues.length} Issue
                  {project.issues.length !== 1 && "s"} Open
                </p>
              )
            }
          </div>
        );
      })}
    </div>
  );
};

export default ProjectLists;
