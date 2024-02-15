import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

import { Note } from '../../types/note'
import { cn } from '../../utils/cn'
import { formatDate } from '../../utils/format-date'
import { formatDistanceToNow } from '../../utils/format-distance-to-now'
import { formatHours } from '../../utils/format-hours'
import { DeleteNoteCardAlert } from '../alerts/delete-note-card-alert'
import { Button, type ButtonProps } from '../button'
import { PreviewNoteCardDialog } from '../dialogs/preview-note-card-dialog'
import { Tooltip } from '../tooltip'
import { NoteCardToolbar } from './note-card-toolbar'

export type NoteCardProps = ButtonProps & {
  note: Note
}

const NoteCard: React.FC<NoteCardProps> = ({
  note,
  className = undefined,
  ...props
}: NoteCardProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [isPreviewNoteCardDialogOpen, setIsPreviewNoteCardDialogOpen] =
    useState(false)
  const [isDeleteNoteCardAlertOpen, setIsDeleteNoteCardAlertOpen] =
    useState(false)

  const handleMouseOver = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  const handleShowPreviewNoteCardDialog = () =>
    setIsPreviewNoteCardDialogOpen(true)
  const handleShowDeleteNoteCardAlert = () => setIsDeleteNoteCardAlertOpen(true)

  const renderDate = (date: Date) => {
    const distanceToNow = formatDistanceToNow(date)

    if (distanceToNow.includes('dias')) {
      return `${formatDate(date)} • ${formatHours(note.date)}`
    }

    return distanceToNow
  }

  return (
    <>
      <Button
        className={cn(
          'relative flex max-h-[460px] flex-col gap-3',
          'cursor-default outline-none',
          'rounded-lg border-2 border-border p-5 pb-0 text-left',
          'transition-colors focus-visible:border-primary',
          className
        )}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          className="flex w-full flex-1 cursor-pointer flex-col gap-3 overflow-hidden"
          onClick={handleShowPreviewNoteCardDialog}
        >
          <span className="truncate text-base font-medium text-foreground">
            {note.title}
          </span>

          <div className="flex flex-col gap-2">
            <p className="text-base leading-6 text-foreground md:text-sm">
              {note.content}
            </p>

            <span className="text-base text-muted-foreground md:text-xs">
              {renderDate(note.date)}
            </span>
          </div>
        </div>

        <NoteCardToolbar.Root isActive={isHovering}>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <NoteCardToolbar.Action onClick={handleShowDeleteNoteCardAlert}>
                <Trash2 className="size-4 text-foreground" />
              </NoteCardToolbar.Action>
            </Tooltip.Trigger>

            <Tooltip.Content>Delete note</Tooltip.Content>
          </Tooltip.Root>
        </NoteCardToolbar.Root>
      </Button>

      {isPreviewNoteCardDialogOpen && (
        <PreviewNoteCardDialog
          note={note}
          open={isPreviewNoteCardDialogOpen}
          onOpenChange={setIsPreviewNoteCardDialogOpen}
        />
      )}

      {isDeleteNoteCardAlertOpen && (
        <DeleteNoteCardAlert
          noteId={note.id}
          open={isDeleteNoteCardAlertOpen}
          onOpenChange={setIsDeleteNoteCardAlertOpen}
        />
      )}
    </>
  )
}

export { NoteCard }
