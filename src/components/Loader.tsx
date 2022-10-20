import { SpinnerGap, IconProps } from "phosphor-react"

export default function Loader(props: IconProps) {
  return (
    <SpinnerGap
      {...props}
      className="animate-spin"
    />
  )
}
