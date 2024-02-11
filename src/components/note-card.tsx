import React from 'react'

import { Note } from '../types/note'
import { cn } from '../utils/cn'
import { formatDistanceToNow } from '../utils/format-distance-to-now'

type NoteCardProps = {
  note: Note
}

const NoteCard = React.forwardRef<HTMLButtonElement, NoteCardProps>(
  ({ note, ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative flex flex-col gap-3',
          'outline-none',
          'overflow-hidden rounded-lg border-2 border-border p-5 text-left',
          'transition-colors hover:bg-muted/50 focus-visible:border-primary'
        )}
        ref={ref}
        {...props}
      >
        <span className="text-base font-medium text-foreground md:text-sm">
          {formatDistanceToNow(note.date)}
        </span>
        <p className="text-base leading-6 text-muted-foreground md:text-sm">
          {note.content}
        </p>

        {/* <div
          className={cn(
            'pointer-events-none',
            'absolute bottom-0 left-0 right-0 h-1/2',
            'bg-gradient-to-t from-black/30 to-black/0'
          )}
        /> */}
      </button>
    )
  }
)

NoteCard.displayName = 'NoteCard'

export { NoteCard }
