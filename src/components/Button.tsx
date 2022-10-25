import { ButtonHTMLAttributes, ReactNode, LegacyRef, forwardRef } from "react";
import clsx from "clsx";

import Loader from "./Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  { children, className, isLoading, ...props }, forwarededRef
) => {
  return (
    <button
      className={clsx(
        "flex justify-center shadow rounded-md bg-blue-600 text-white text-sm px-5 py-2 transition-colors hover:bg-blue-700 outline-blue-600 outline-offset-2",
        className
      )}
      ref={forwarededRef}
      disabled={isLoading}
      {...props}
    >
      {!isLoading ? children : <Loader size={20} />}
    </button>
  )
}
)