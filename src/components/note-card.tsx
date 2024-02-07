import React from 'react'

import { Note } from '../types/note'
import { formatDistanceToNow } from '../utils/format-distance-to-now'

type NoteCardProps = {
  note: Note
}

const NoteCard = React.forwardRef<HTMLButtonElement, NoteCardProps>(
  ({ note, ...props }, ref) => {
    return (
      <button
        className="relative flex flex-col gap-3 overflow-hidden rounded-md bg-zinc-800 p-5 text-left outline-none transition-all hover:ring-2 hover:ring-zinc-700 focus-visible:ring-2 focus-visible:ring-violet-300"
        ref={ref}
        {...props}
      >
        <span className="text-sm font-medium text-zinc-300">
          {formatDistanceToNow(note.date)}
        </span>
        <p className="text-sm leading-6 text-zinc-400">{note.content}</p>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-black/0" />
      </button>
    )
  }
)

NoteCard.displayName = 'NoteCard'

export { NoteCard }
