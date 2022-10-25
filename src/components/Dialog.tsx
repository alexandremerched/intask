import { forwardRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import clsx from 'clsx';

interface DialogContentProps extends DialogPrimitive.DialogContentProps {
  title?: string
  description?: string
}

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className, title, description, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className='bg-black opacity-50 fixed inset-0 place-items-center grid overflow-y-auto' />
        <DialogPrimitive.Content
          className={clsx(
            'fixed -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 bg-white p-6 rounded', className
          )}
          ref={forwardedRef}
          {...props}
        >
          <DialogPrimitive.Title className="font-semibold mb-1">{title}</DialogPrimitive.Title>
          <DialogPrimitive.Description className="text-gray-500 text-xs">{description}</DialogPrimitive.Description>
          {children}

          <DialogPrimitive.Close className='absolute top-4 right-4'>
            <X weight='bold' size={14} />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    )
  }
)

export const Dialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Content: DialogContent,
}