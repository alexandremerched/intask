import { useLocation } from "react-router-dom";
import { House, Users, SignOut } from "phosphor-react"
import { Link } from "react-router-dom"

import { Logo } from "./Logo";
import { CustomNavLink } from "./CustomNavLink";

import { useAuth } from "../providers/auth.provider";

export function Menu() {
  const { signOut } = useAuth()
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col bg-white border h-full w-[250px]">
      <header>
        <Link to="/">
          <Logo className="text-3xl p-4 mb-1 text-left" />
        </Link>
      </header>

      <div className="flex flex-1 flex-col gap-1">
        <CustomNavLink
          to="/"
          title="Painel"
          isActive={pathname === "/"}
          icon={<House size={22} weight="bold" />}
        />

        <CustomNavLink
          to="/clientes"
          title="Clientes"
          isActive={pathname === "/clientes"}
          icon={<Users size={22} weight="bold" />}
        />
      </div>

      <hr className="w-full " />

      <footer className="py-2">
        <CustomNavLink
          to="/"
          title="Sair"
          icon={<SignOut size={22} weight="bold" />}
          onClick={signOut}
        />
      </footer>
    </div>
  )
}
