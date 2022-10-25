import clsx from 'clsx'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "xs" | "2xl" | "4xl"
  children: string
  className?: string
}

export function Heading({ size = "4xl", children, className }: HeadingProps) {
  return (
    <h2 className={clsx(
      "font-bold font-inter",
      {
        "text-xs": size === "xs",
        "text-2xl": size === "2xl",
        "text-4xl": size === "4xl",
      },
      className
    )}>
      {children}
    </h2>
  )
}
