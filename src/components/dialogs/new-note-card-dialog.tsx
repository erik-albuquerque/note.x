import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

type NewNoteCardDialogProps = {
  children: React.ReactNode
}

const NewNoteCardDialog: React.FC<NewNoteCardDialogProps> = ({
  children
}: NewNoteCardDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 flex h-[60vh] w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-zinc-800 outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-zinc-900 p-1.5 text-zinc-500 hover:text-zinc-300">
            <X className="size-5" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-zinc-300">
              Adicionar nota
            </span>
            <p className="text-sm leading-6 text-zinc-400">
              Comece{' '}
              <button className="font-medium text-violet-300 hover:underline">
                gravando uma nota
              </button>{' '}
              em áudio ou se preferir{' '}
              <button className="font-medium text-violet-300 hover:underline">
                utilize apenas texto
              </button>
              .
            </p>
          </div>

          <button
            type="button"
            className="w-full bg-violet-400 py-4 text-center text-sm font-medium text-violet-950 outline-none transition-colors hover:bg-violet-500"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { NewNoteCardDialog }
