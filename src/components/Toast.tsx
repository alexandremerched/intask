import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import clsx from "clsx"

interface ToastProps {
  title: string
  type?: 'default' | 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export interface ToastRef {
  show: () => void
}

const colors = {
  default: 'bg-white text-gray-800',
  success: 'bg-green-100 text-green-600',
  warning: 'bg-yellow-100 text-yellow-600',
  error: 'bg-red-100 text-red-600',
  info: 'bg-blue-100 text-blue-600',
}

export const Toast = forwardRef<ToastRef, ToastProps>(({ title, duration = 3000, type = "default" }, forwarededRef) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(open => !open)

  const show = () => {
    toggleOpen()
    duration && setTimeout(toggleOpen, duration)
  }

  useImperativeHandle(forwarededRef, () => ({ show }))

  return (
    <ToastPrimitive.Provider swipeDirection='right'>
      <ToastPrimitive.Root open={open} className={clsx(
        'flex fixed top-4 right-4 rounded-lg shadow p-3 gap-2 min-w-[250px]',
        open ? 'animate-slide-right' : 'animate-fade-out',
        colors[type]
      )}>
        <ToastPrimitive.Title className='flex flex-1 items-center gap-2'>
          <span className='text-xs font-bold font-inter'>{title}</span>
        </ToastPrimitive.Title>
        <ToastPrimitive.Close onClick={toggleOpen}>
          <X weight='bold' size={14} />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )
})
