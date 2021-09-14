import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const ProjectsContext = createContext({});

export const useProjectsContext = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const jsonKey = "Projects";
  const authAxios = axios.create({
    baseURL: "https://api.m3o.com/v1/db",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_M3O_KEY}`,
    },
  });

  useEffect(() => {
    // replace with api call
    const localStorageProjects = JSON.parse(localStorage.getItem(jsonKey));
    if (localStorageProjects) {
      setProjects(localStorageProjects);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(jsonKey, JSON.stringify(projects));
  }, [projects]);

  const addToProjects = (project) => {
    setProjects([...projects, project]);
  };

  const deleteFromProjects = (project) => {
    setProjects(projects.filter((item) => item.id !== project.id));
  };

  const submitEditToProjects = (project) => {
    setProjects([
      ...projects.filter((item) => item.id !== project.id),
      project,
    ]);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        addToProjects,
        deleteFromProjects,
        submitEditToProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
