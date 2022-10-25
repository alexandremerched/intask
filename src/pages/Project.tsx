import { useParams } from 'react-router-dom'

export function Project() {
  const { projectId } = useParams<string>()

  return (
    <div className="flex flex-1 bg-gray-100 py-4 px-8">
      <h1 className="font-inter text-2xl">Projeto {projectId}</h1>
    </div>
  )
}
