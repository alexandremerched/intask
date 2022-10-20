import { Link } from "react-router-dom";

import { Button } from "../components/Button";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-gray-100 h-screen w-screen p-2">
      <header className="flex items-center">
        <span className="text-blue-600 font-bold font-inter text-4xl">404</span>

        <div className="h-full border border-gray-300 mx-4" />

        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl font-bold font-inter">Página não encontrada.</h1>
          <span className="text-gray-600 text-sm mt-1">Verifique o URL na barra de endereço e tente novamente.</span>
        </div>
      </header>

      <Link to="/" className="mt-10">
        <Button>Voltar para a tela inicial</Button>
      </Link>
    </div>
  )
}
