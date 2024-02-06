import React from 'react'

const NewNoteCard = React.forwardRef<HTMLButtonElement>(({ ...props }, ref) => {
  return (
    <button
      className="flex flex-col gap-3 rounded-md bg-zinc-900 p-5 text-left outline-none ring-2 ring-zinc-800 transition-colors hover:bg-zinc-800/50 focus-visible:ring-violet-400"
      ref={ref}
      {...props}
    >
      <span className="text-sm font-medium text-zinc-200">Adicionar nota</span>
      <p className="text-sm leading-6 text-zinc-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </button>
  )
})

NewNoteCard.displayName = 'NewNoteCard'

export { NewNoteCard }
