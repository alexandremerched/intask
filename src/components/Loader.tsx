import { SpinnerGap, IconProps } from "phosphor-react"
import clsx from "clsx"

export default function Loader({className, ...props}: IconProps) {
  return (
    <SpinnerGap className={clsx("animate-spin", className)} {...props} />
  )
}
