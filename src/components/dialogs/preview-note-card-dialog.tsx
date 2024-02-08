import { Note } from '../../types/note'
import { formatDistanceToNow } from '../../utils/format-distance-to-now'
import { Dialog } from './dialog'

type PreviewNoteCardDialogProps = {
  children: React.ReactNode
  note: Note
}

const PreviewNoteCardDialog: React.FC<PreviewNoteCardDialogProps> = ({
  note,
  children
}: PreviewNoteCardDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <span className="text-base font-medium text-zinc-300 md:text-sm">
            {formatDistanceToNow(note.date)}
          </span>
          <p className="text-base leading-6 text-zinc-400 md:text-sm">
            {note.content}
          </p>
        </div>

        <button
          type="button"
          className="group w-full bg-zinc-900 py-4 text-center text-base font-medium text-zinc-300 outline-none md:text-sm"
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
