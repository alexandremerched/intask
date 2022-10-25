import { Routes, Route } from 'react-router-dom'

import { Menu } from "../components/Menu"
import { Home } from '../pages/Home'
import { Customers } from '../pages/Customers'
import { ProjectList } from '../pages/ProjectList'
import { Project } from '../pages/Project'

import { ProjectProvider } from '../providers/project.provider'

const ProjectListWithProvider = () => (
  <ProjectProvider>
    <ProjectList />
  </ProjectProvider>
)

export function MainRoute() {
  return (
    <div className="flex h-screen w-screen">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Customers />} />
        <Route path="/projetos">
          <Route index element={<ProjectListWithProvider />} />
          <Route path=":projectId" element={<Project />} />
        </Route>
      </Routes>
    </div>
  )
}
