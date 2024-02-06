import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { formatDistanceToNow } from '../../utils/format-distance-to-now'

type PreviewNoteCardDialogProps = {
  children: React.ReactNode
  note: {
    date: Date
    content: string
  }
}

const PreviewNoteCardDialog: React.FC<PreviewNoteCardDialogProps> = ({
  note,
  children
}: PreviewNoteCardDialogProps) => {
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
              {formatDistanceToNow(note.date)}
            </span>
            <p className="text-sm leading-6 text-zinc-400">{note.content}</p>
          </div>

          <button
            type="button"
            className="group w-full bg-zinc-900 py-4 text-center text-sm font-medium text-zinc-300 outline-none"
          >
            Deseja{' '}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { PreviewNoteCardDialog }
