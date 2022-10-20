import clsx from "clsx";

interface LogoProps {
  theme?: 'normal' | 'light'
  className?: string;
}

export function Logo({ theme = "normal", className }: LogoProps) {
  return (
    <h2 className={clsx(
      "text-5xl font-inter color font-bold text-blue-600",
      theme === "light" && "text-blue-300",
      className
    )}>
      InTask
    </h2>
  )
}
