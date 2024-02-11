import { useNotesStore } from '../../store/use-notes-store'
import { Note } from '../../types/note'
import { cn } from '../../utils/cn'
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
  const { onDeleteNote } = useNotesStore()

  // TODO: add toast.success when note is deleted

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <span className="text-base font-medium text-foreground md:text-sm">
            {formatDistanceToNow(note.date)}
          </span>
          <p
            className={cn(
              'text-base leading-6',
              'text-foreground dark:text-muted-foreground'
            )}
          >
            {note.content}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onDeleteNote(note.id)}
          className={cn(
            'group w-full py-4 outline-none',
            'bg-zinc-900 hover:bg-zinc-900/90',
            'text-center text-base font-medium text-white md:text-sm'
          )}
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
