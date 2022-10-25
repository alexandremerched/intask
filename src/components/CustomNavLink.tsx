import { ForwardRefExoticComponent, RefAttributes } from "react"
import { NavLink, NavLinkProps, useLocation } from "react-router-dom"
import { IconProps } from "phosphor-react"
import clsx from "clsx"

interface CustomNavLinkProps extends Omit<NavLinkProps, "to"> {
  to: string
  title: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  isActive?: boolean
}

export const CustomNavLink = ({ title, Icon, isActive, to, ...props }: CustomNavLinkProps) => {
  const { pathname } = useLocation()
  isActive = isActive ?? pathname.split("/")[1] === to.split("/")[1]

  return (
    <NavLink
      className={clsx(
        "flex items-center gap-3 px-4 py-2 transition hover:bg-blue-200 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-600 focus:outline-none",
        isActive ? "bg-blue-200 text-blue-600 px-3 border-l-4 border-blue-600" : "text-gray-400"
      )}
      to={to}
      {...props}
    >
      <Icon size={22} />
      <span className="text-sm">{title}</span>
    </NavLink>
  )
}