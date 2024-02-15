import { type DialogProps } from '@radix-ui/react-dialog'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Note } from '../../types/note'
import { cn } from '../../utils/cn'
import { formatDate } from '../../utils/format-date'
import { formatDistanceToNow } from '../../utils/format-distance-to-now'
import { formatHours } from '../../utils/format-hours'
import { DeleteNoteCardAlert } from '../alerts/delete-note-card-alert'
import { Button } from '../button'
import { Dialog } from './dialog'

export type PreviewNoteCardDialogProps = DialogProps & {
  note: Note
}

const PreviewNoteCardDialog: React.FC<PreviewNoteCardDialogProps> = ({
  note,
  ...props
}: PreviewNoteCardDialogProps) => {
  const renderDate = (date: Date) => {
    const distanceToNow = formatDistanceToNow(date)

    if (distanceToNow.includes('dias')) {
      return `${formatDate(date)} • ${formatHours(note.date)}`
    }

    return format(date, 'EEE, h:mm a', {
      locale: ptBR
    })
  }

  return (
    <Dialog.Root {...props}>
      <Dialog.Content>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex flex-col gap-1">
            <span className="text-xl font-medium leading-6 text-foreground">
              {note.title}
            </span>

            <span className="text-sm text-muted-foreground">
              {renderDate(note.date)} | {note.content.length} characters
            </span>
          </div>

          <p className={cn('text-base leading-6', 'text-foreground')}>
            {note.content}
          </p>
        </div>

        <DeleteNoteCardAlert noteId={note.id}>
          <Button
            type="button"
            className={cn(
              'group w-full py-4 outline-none',
              'bg-zinc-900',
              'text-center text-base font-medium text-white md:text-sm'
            )}
          >
            Deseja{' '}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </Button>
        </DeleteNoteCardAlert>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export { PreviewNoteCardDialog }
