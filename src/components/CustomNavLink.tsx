import { NavLink, NavLinkProps } from "react-router-dom"
import clsx from "clsx"

interface CustomNavLinkProps extends NavLinkProps {
  title: string
  icon: React.ReactNode
  isActive?: boolean
}

export const CustomNavLink = ({ title, icon, isActive = false, ...props }: CustomNavLinkProps) => (
  <NavLink
    className={clsx(
      "flex items-center gap-3 px-4 py-2 transition hover:bg-blue-200 hover:text-blue-600",
      isActive ? "bg-blue-200 text-blue-600 px-3 border-l-4 border-blue-600" : "text-gray-400"
    )}
    {...props}
  >
    {icon}
    <span className={clsx(
      "font-inter text-sm font-semibold"
    )}>{title}</span>
  </NavLink>
)