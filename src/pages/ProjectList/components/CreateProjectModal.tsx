import { ReactNode, FormEvent, useState, useRef } from "react";

import { Dialog } from "../../../components/Dialog";
import { Button } from "../../../components/Button";
import { TextInput } from "../../../components/TextInput";
import { TextArea } from "../../../components/TextArea";

import { useProject } from "../../../providers/project.provider";
import { Toast, ToastRef } from "../../../components/Toast";

interface CreateProjectModalProps {
  children: ReactNode;
}

const defaultFormData = {
  name: "",
  description: "",
}

export function CreateProjectModal({ children }: CreateProjectModalProps) {
  const { projects, createNewProject } = useProject()

  const [open, setOpen] = useState(false)
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  const createProjectSuccessfullyToastRef = useRef<ToastRef>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsCreatingNewProject(true)

    await createNewProject({
      id: (projects.length + 1).toString(),
      ...formData
    })

    setIsCreatingNewProject(false)
    setFormData(defaultFormData)
    setOpen(false)

    if (createProjectSuccessfullyToastRef.current) {
      createProjectSuccessfullyToastRef.current.show()
    }
  }

  const handleOnChangeField = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.currentTarget
    setFormData(prevState => ({ ...prevState, [id]: value }))
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Content
        title="Novo Projeto"
        description="Crie um novo projeto para começar a trabalhar."
        className="flex flex-col animate-fade-in"
      >
        <form onSubmit={handleSubmit} className="flex flex-col mt-5 text-xs gap-4">
          <label htmlFor="name">
            <span className="text-gray-600">Nome</span>
            <TextInput
              id="name"
              value={formData.name}
              onChange={handleOnChangeField}
              required
            />
          </label>

          <label htmlFor="name">
            <span className="text-gray-600">Descrição</span>
            <TextArea
              id="description"
              value={formData.description}
              onChange={handleOnChangeField}
              required
            />
          </label>

          <div className="flex justify-end items-center">
            <Button
              onClick={() => setOpen(false)}
              type="button"
              disabled={isCreatingNewProject}
              className="bg-white text-gray-500 border border-gray-300 hover:bg-gray-50"
            >
              Cancelar
            </Button>

            <Button
              isLoading={isCreatingNewProject}
              className="border border-blue-600 ml-2 focus:border-none"
            >
              Criar
            </Button>
          </div>
        </form>
      </Dialog.Content>

      <Toast
        title="Projeto criado com sucesso!"
        type="success"
        ref={createProjectSuccessfullyToastRef}
      />
    </Dialog.Root>
  )
}
