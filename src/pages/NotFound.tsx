import { Link } from "react-router-dom";

import { Heading } from "../components/Heading";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 p-2">
      <header className="flex items-center">
        <Heading className="text-blue-600">404</Heading>

        <div className="h-full border border-gray-300 mx-4" />

        <div className="text-left gap-1">
          <Heading>Página não encontrada.</Heading>
          <span className="text-gray-500 text-sm">Verifique o URL na barra de endereço e tente novamente.</span>
        </div>
      </header>

      <Link to="/" className="mt-10">
        <Button>Voltar para a tela inicial</Button>
      </Link>
    </div>
  )
}
