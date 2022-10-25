import { FolderPlus, Plus } from "phosphor-react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
dayjs.locale(ptBr);

import { Button } from "../../components/Button";
import { CreateProjectModal } from "./components/CreateProjectModal";

import { useProject } from "../../providers/project.provider";

export function ProjectList() {
  const { projects } = useProject()

  return (
    <div className="flex flex-1 flex-col bg-gray-100">
      <header className="flex items-center border-b py-4 px-8 bg-white h-[73px]">
        <span className="flex-1 text-2xl">Projetos</span>
        <CreateProjectModal>
          <Button>Novo Projeto</Button>
        </CreateProjectModal>
      </header>

      {projects.length ? (
        <div className="flex m-8 overflow-auto rounded-lg border">
          <table className="bg-white text-sm overflow-y-scroll w-full">
            <thead className="bg-gray-50 sticky top-0 border-b">
              <tr className="h-10 text-left">
                <th className="pl-4">Nome</th>
                <th>Participantes</th>
                <th>Criado em</th>
                <th className="w-16"></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{project.name}</td>
                  <td>*Avatar*</td>
                  <td>{dayjs(project.createdDate).format("DD [de] MMMM [às] HH:mm")}</td>
                  <td>
                    <Link className="text-blue-600" to={project.id}>
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center text-sm">
          <FolderPlus className="text-gray-500 mb-3" size={50} />
          <span className="font-semibold mb-1">Sem projetos</span>
          <span className="text-gray-500 mb-5">Comece criando um novo projeto.</span>
          <CreateProjectModal>
            <Button className="items-center gap-2 px-3">
              <Plus />
              <span>Novo Projeto</span>
            </Button>
          </CreateProjectModal>
        </div>
      )}
    </div>
  )
}
