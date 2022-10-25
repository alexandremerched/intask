import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"

import { Logo } from "../components/Logo"
import { Heading } from "../components/Heading"
import { TextInput } from "../components/TextInput"
import { Button } from "../components/Button"

import { useAuth } from "../providers/auth.provider"

interface FormData {
  email: string
  password: string
}

export function SignIn() {
  const { signIn } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })

  const handleOnChangeField = (event: FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget
    setFormData(prevState => ({ ...prevState, [id]: value }))
  }

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    await signIn(formData)

    setIsSubmitting(false)
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <header className="text-center">
        <Logo className="mb-8" />
        <Heading size="2xl">Faça login em sua conta</Heading>
      </header>

      <form className="flex flex-col rounded-lg bg-white p-4 gap-4 mt-4 w-full max-w-[400px]" onSubmit={handleOnSubmit}>
        <label className="text-sm" htmlFor="email">
          <span className="text-gray-500">Email</span>
          <TextInput
            id="email"
            type="email"
            required={true}
            value={formData.email}
            onChange={handleOnChangeField}
          />
        </label>

        <label className="text-sm" htmlFor="password">
          <span className="text-gray-500">Senha</span>
          <TextInput
            id="password"
            type="password"
            required={true}
            value={formData.password}
            onChange={handleOnChangeField}
          />
        </label>

        <Button isLoading={isSubmitting} className="mt-2">Entrar</Button>

        <Link
          className="text-blue-600 text-xs text-right transition-colors hover:text-blue-500"
          to="/registro"
        >
          Não tem registro?
        </Link>
      </form>
    </div>
  )
}
