import { useProjectsContext } from "../contexts/ProjectsContext";
import { useHistory } from "react-router-dom";

const Projects = () => {
  let history = useHistory();
  const { projects, deleteFromProjects } = useProjectsContext();

  const handleEditClick = (id) => {
    history.push(`/edit/${id}`);
  };
  return (
    <div>
      {projects.map((project, n) => {
        return (
          <div key={project.id + n}>
            <h2>{project["project name"]}</h2>
            <p>{project.id}</p>
            <div>
              <button onClick={() => handleEditClick(project.id)}>Edit</button>
              <button onClick={() => deleteFromProjects(project)}>
                Delete
              </button>
            </div>
            <p>
              Created On: {new Date(project["created on"]).toLocaleDateString()}{" "}
              {new Date(project["created on"]).toLocaleTimeString()}
            </p>
            <div>
              <p>
                Start Date:{" "}
                {new Date(project["start date"]).toLocaleDateString()}
              </p>
            </div>
            <p>
              Target End Date:{" "}
              {new Date(project["target end date"]).toLocaleDateString()}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
