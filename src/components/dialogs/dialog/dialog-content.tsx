import * as Dialog from '@radix-ui/react-dialog'
import { DialogContentProps } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...rest
}: DialogContentProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content
        className="fixed left-1/2 top-1/2 flex h-[60vh] w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-zinc-800 outline-none"
        {...rest}
      >
        <Dialog.Close className="absolute right-0 top-0 bg-zinc-900 p-1.5 text-zinc-500 hover:text-zinc-300">
          <X className="size-5" />
        </Dialog.Close>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export { DialogContent }
