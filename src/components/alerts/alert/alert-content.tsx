import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { DialogContentProps } from '@radix-ui/react-dialog'

import { cn } from '../../../utils/cn'

const AlertContent: React.FC<DialogContentProps> = ({
  children,
  className = undefined,
  ...props
}: DialogContentProps) => {
  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
      <AlertDialog.Content
        className={cn(
          'flex h-fit flex-col',
          'fixed inset-0',
          'bg-background',
          'outline-none',
          'dark:border dark:border-border',
          'overflow-y-auto overflow-x-hidden',
          'left-1/2 top-1/2',
          'w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md',
          className
        )}
        {...props}
      >
        {children}
      </AlertDialog.Content>
    </AlertDialog.Portal>
  )
}

export { AlertContent }
