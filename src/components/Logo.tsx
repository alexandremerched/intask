import clsx from "clsx";

interface LogoProps {
  size?: "3xl" | "5xl" | "7xl";
  className?: string;
}

export function Logo({ size = "5xl", className }: LogoProps) {
  return (
    <h1 className={clsx(
      "font-inter font-bold text-blue-600",
      {
        "text-3xl": size === "3xl",
        "text-5xl": size === "5xl",
        "text-7xl": size === "7xl",
      },
      className
    )}>
      InTask
    </h1>
  )
}
