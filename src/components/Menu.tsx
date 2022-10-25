import { House, Users, SignOut, Kanban } from "phosphor-react"
import { Link } from "react-router-dom"

import { Logo } from "./Logo";
import { CustomNavLink } from "./CustomNavLink";

import { useAuth } from "../providers/auth.provider";

const menuOptions = [
  { to: "/", title: "Início", Icon: House },
  { to: "/clientes", title: "Clientes", Icon: Users },
  { to: "/projetos", title: "Projetos", Icon: Kanban },
]

export function Menu() {
  const { signOut } = useAuth()

  return (
    <div className="flex flex-col bg-white border-r h-full w-[250px]">
      <header className="flex p-4 mb-1">
        <Link to="/">
          <Logo size="3xl" />
        </Link>
      </header>

      <div className="flex flex-1 flex-col gap-1">
        {menuOptions.map(props => <CustomNavLink key={props.title} {...props} />)}
      </div>

      <hr />

      <footer className="py-2">
        <CustomNavLink
          to="/"
          title="Sair"
          onClick={signOut}
          Icon={SignOut}
          isActive={false}
        />
      </footer>
    </div>
  )
}
