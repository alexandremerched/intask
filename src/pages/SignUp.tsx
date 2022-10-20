import { FormEvent, useRef, useState } from "react"
import { Link } from "react-router-dom"

import { Logo } from "../components/Logo"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Toast, ToastRef } from "../components/Toast"

interface FormData {
  email: string
  password: string
}

export function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })

  const signUpSuccessToastRef = useRef<ToastRef>(null)

  const handleOnChangeField = (event: FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget
    setFormData(prevState => ({ ...prevState, [id]: value }))
  }

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)

    if (signUpSuccessToastRef.current) {
      signUpSuccessToastRef.current.show()
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-screen w-screen px-4">
      <Toast
        title="Cadastro realizado com sucesso!"
        type="success"
        ref={signUpSuccessToastRef}
      />
      <header className="text-center">
        <Logo className="mb-8" />
        <h1 className="text-2xl font-inter font-bold">Crie a sua conta</h1>
      </header>

      <form className="flex flex-col rounded-lg bg-white p-4 mt-4 gap-4 w-full max-w-[400px]" onSubmit={handleOnSubmit}>
        <div className="flex flex-col text-sm gap-1">
          <label className="text-gray-500 font-bold" htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            required={true}
            value={formData.email}
            onChange={handleOnChangeField}
          />
        </div>

        <div className="flex flex-col text-sm gap-1">
          <label className="text-gray-500 font-bold" htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            required={true}
            value={formData.password}
            onChange={handleOnChangeField}
          />
        </div>

        <Button
          isLoading={isSubmitting}
          onClick={() => setIsSignUpSuccess(true)}
          className="mt-2"
        >
          Criar
        </Button>

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
