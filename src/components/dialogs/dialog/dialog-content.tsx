import * as Dialog from '@radix-ui/react-dialog'
import { type DialogContentProps } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '../../../utils/cn'

const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...props
}: DialogContentProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content
        className={cn(
          'flex w-full flex-col',
          'fixed inset-0',
          'bg-background',
          'outline-none',
          'dark:border dark:border-border',
          'overflow-y-auto overflow-x-hidden',
          'md:inset-auto md:left-1/2 md:top-1/2 md:h-[90vh]',
          'md:max-w-2xl md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md'
        )}
        {...props}
      >
        <Dialog.Close
          className={cn(
            'absolute right-1 top-1',
            'p-1.5',
            'text-muted-foreground hover:text-foreground'
          )}
        >
          <X className="size-5" />
        </Dialog.Close>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export { DialogContent }
