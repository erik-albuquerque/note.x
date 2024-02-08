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
        className="fixed inset-0 flex w-full flex-col overflow-hidden bg-zinc-800 outline-none md:inset-auto md:left-1/2 md:top-1/2 md:h-[60vh] md:max-w-[600px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md"
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
