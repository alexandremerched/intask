import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Logo } from "../components/Logo"
import { Button } from "../components/Button"
import { TextInput } from "../components/TextInput"
import { useAuth } from "../providers/auth.provider"

interface FormData {
  email: string
  password: string
}

const defaultFormData: FormData = {
  email: "",
  password: "",
}

export function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>(defaultFormData)

  const handleOnChangeField = (event: FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget
    setFormData(prevState => ({ ...prevState, [id]: value }))
  }

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    await signUp(formData).then(() => navigate("/"));

    setIsSubmitting(false)
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <header className="text-center">
        <Logo className="mb-8" />
        <h1 className="text-2xl font-inter font-bold">Crie a sua conta</h1>
      </header>

      <form className="flex flex-col rounded-lg bg-white p-4 mt-4 gap-4 w-full max-w-[400px]" onSubmit={handleOnSubmit}>
        <label className="text-sm" htmlFor="email">
          <span className="text-gray-500">Email</span>
          <TextInput
            id="email"
            type="email"
            value={formData.email}
            onChange={handleOnChangeField}
            required
          />
        </label>

        <label className="text-sm" htmlFor="password">
          <span className="text-gray-500">Senha</span>
          <TextInput
            id="password"
            type="password"
            value={formData.password}
            onChange={handleOnChangeField}
            required
          />
        </label>

        <Button isLoading={isSubmitting} className="mt-2">Criar</Button>

        <Link
          className="text-blue-600 text-xs text-right transition-colors hover:text-blue-500"
          to="/"
        >
          Já possui registro?
        </Link>
      </form>
    </div>
  )
}
