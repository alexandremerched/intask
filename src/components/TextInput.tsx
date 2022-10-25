import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function TextInput({ className, ...props }: TextInputProps) {
  return (
    <input
      className={clsx("w-full border border-gray-300 rounded-md p-2 outline-blue-600", className)}
      {...props}
    />
  )
}
