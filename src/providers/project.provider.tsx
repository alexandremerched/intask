import { useState, createContext, useContext } from "react";

import { Project, IProject } from "../models/project.model";

interface ProjectContextData {
  projects: Project[];
  createNewProject: (project: IProject) => Promise<void>;
}

interface ProjectProviderProps {
  children: React.ReactNode;
}

const ProjectContext = createContext<ProjectContextData>({
  projects: [],
  createNewProject: async () => {},
});

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const createNewProject = async (project: IProject) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newProject = Project.factory(project);

    setProjects(prevState => ([...prevState, newProject]));
  }

  return (
    <ProjectContext.Provider value={{
      projects,
      createNewProject
    }}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProject = () => {
  return useContext(ProjectContext);
}