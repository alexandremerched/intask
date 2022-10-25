import { TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={clsx("w-full border border-gray-300 rounded-md p-2 outline-blue-600 resize-none", className)}
      rows={3}
      {...props}
    />
  )
}
