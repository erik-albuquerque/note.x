import { formatDistanceToNow } from '../../utils/format-distance-to-now'
import { Dialog } from './dialog'

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
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content className="fixed left-1/2 top-1/2 flex h-[60vh] w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-zinc-800 outline-none">
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
    </Dialog.Root>
  )
}

export { PreviewNoteCardDialog }
