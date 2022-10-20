import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: InputProps) {
  return (
    <input
      className="w-full border border-gray-300 rounded-md p-2 outline-blue-600"
      {...props}
    />
  )
}
