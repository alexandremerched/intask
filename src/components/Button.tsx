import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import Loader from "./Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex justify-center rounded-md bg-blue-600 text-white text-sm px-4 py-2 transition-colors hover:bg-blue-700 outline-blue-600 outline-offset-2",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {!isLoading ? children : <Loader size={20} />}
    </button>
  )
}
